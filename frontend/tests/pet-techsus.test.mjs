import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { hydrateCarousel } from '../js/pet-techsus-components.js';
import { petCollaborators, gatActivities, digitalSolutions } from '../js/pet-techsus-data.js';

const pageURL = new URL('../pages/pet-techsus.html', import.meta.url);
const html = fs.readFileSync(pageURL, 'utf8');
test('served HTML preserves the complete team and linked GAT content without JavaScript', () => {
  assert.equal((html.match(/class="pet-collaborator-card"/g) || []).length, petCollaborators.length);
  for (const person of petCollaborators) {
    assert.ok(html.includes(`Currículo Lattes de ${person.name}`), person.name);
    assert.ok(html.includes(`href="${person.lattes}"`), person.name);
    assert.ok(html.includes(`src="${person.image}"`), person.name);
  }
  for (const gat of gatActivities) {
    assert.ok(html.includes(`id="detalhes-${gat.id}"`));
    assert.ok(html.includes(gat.summary));
    assert.ok(html.includes(gat.nextSteps[0]));
  }
  for (const solution of digitalSolutions) assert.ok(html.includes(solution.stage));
  assert.ok(!html.includes('Carregando PET TechSUS'));
  assert.match(html, /<h1 id="pet-title">PET TechSUS<\/h1>/);
  assert.match(html, /id="conteudo"/);
  for (const match of html.matchAll(/(?:src|href)="(\.\.\/[^"?#]+)(?:[^\"]*)"/g)) {
    assert.ok(fs.existsSync(fileURLToPath(new URL(match[1], pageURL))), match[1]);
  }
});

test('public statuses and corrected source spelling stay consistent', () => {
  const allowed = ['Em preparação', 'Em execução', 'Em validação', 'Concluído'];
  assert.ok(gatActivities.every(g => allowed.includes(g.status)));
  const source = fs.readFileSync(new URL('../js/pet-techsus-data.js', import.meta.url), 'utf8');
  for (const typo of ['rede publica municipal', 'Reunioes', 'Prototipo', 'Seguranca do paciente', 'Farmacovigilancia']) {
    assert.ok(!source.includes(typo), typo);
  }
  for (const key of ['og:title','og:description','og:image','og:url','og:type','twitter:card']) assert.ok(html.includes(`="${key}"`));
  const social = fs.readFileSync(new URL('../assets/images/pet-techsus-social.png', import.meta.url));
  assert.equal(social.readUInt32BE(16), 1200);
  assert.equal(social.readUInt32BE(20), 630);
});

test('restored carousel moves one frame per arrow and respects reduced motion', () => {
  let onClick;
  const calls=[];
  const track={clientWidth:720,scrollBy:options=>calls.push(options)};
  const carousel={querySelector:()=>track,addEventListener:(_,handler)=>{onClick=handler;}};
  const previous=globalThis.window;
  try {
    globalThis.window={matchMedia:()=>({matches:false})};
    hydrateCarousel(carousel);
    onClick({target:{closest:()=>({getAttribute:()=> 'next'})}});
    assert.deepEqual(calls.pop(),{left:720,behavior:'smooth'});
    globalThis.window={matchMedia:()=>({matches:true})};
    onClick({target:{closest:()=>({getAttribute:()=> 'prev'})}});
    assert.deepEqual(calls.pop(),{left:-720,behavior:'auto'});
    onClick({target:{closest:()=>null}});
    assert.equal(calls.length,0);
  } finally { globalThis.window=previous; }
});
