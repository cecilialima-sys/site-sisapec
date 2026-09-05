export const petLastUpdated = "17 de julho de 2026";

export const petStats = [
  {
    icon: "layers",
    value: "7",
    title: "Grupos de Aprendizado",
    description: "GATs com atividades de ensino, pesquisa, extensão e inovação."
  },
  {
    icon: "users",
    value: "364",
    title: "Pessoas capacitadas",
    description: "Participantes capacitados em ações do GAT 2."
  },
  {
    icon: "building",
    value: "14",
    title: "Unidades alcançadas",
    description: "Unidades de saúde alcançadas nas atividades formativas."
  },
  {
    icon: "heart",
    value: "50",
    title: "Usuários previstos",
    description: "Usuários do SUS previstos na pesquisa do GAT 5."
  },
  {
    icon: "briefcase",
    value: "aprox. 200",
    title: "Profissionais envolvidos",
    description: "Profissionais envolvidos na coleta e preparação do GAT 6."
  },
  {
    icon: "cpu",
    value: "3",
    title: "Soluções digitais",
    description: "InfoVida, SisAPEC-Work e aplicativo de interações medicamentosas."
  }
];

export const gatActivities = [
  {
    id: "gat-1",
    number: 1,
    title: "Letramento digital dos profissionais de saúde",
    shortTitle: "Letramento digital",
    status: "Em andamento",
    categories: ["Letramento digital", "Educação em saúde", "Pesquisa científica", "Capacitação profissional"],
    activityTypes: ["Pesquisa", "Capacitação", "Educação em saúde"],
    highlight: "Curso com plataforma criada",
    summary: "Pesquisa sobre letramento digital e produção de materiais formativos para profissionais da rede publica municipal.",
    about: [
      "Coleta de dados para pesquisa sobre letramento digital entre profissionais de saúde da rede publica municipal.",
      "Produção de materiais para um curso direcionado ao desenvolvimento do letramento digital desse publico."
    ],
    advances: [
      "Coleta de dados com encerramento previsto para a primeira quinzena de julho de 2026.",
      "Videos das aulas concluidos.",
      "Plataforma do curso criada.",
      "Curso planejado para iniciar na segunda quinzena de agosto de 2026."
    ],
    nextSteps: [
      "Finalizar o material didático.",
      "Publicar os conteúdos na plataforma.",
      "Iniciar o curso na segunda quinzena de agosto.",
      "Construir o banco de dados da pesquisa.",
      "Realizar as análises dos dados coletados."
    ],
    metrics: [
      { label: "Curso", value: "Plataforma criada" },
      { label: "Aulas", value: "Videos concluidos" }
    ],
    technologies: ["Plataforma de curso", "Materiais didáticos digitais"],
    timeline: [
      { stage: "Coleta", description: "Encerramento previsto para a primeira quinzena de julho de 2026." },
      { stage: "Desenvolvimento", description: "Videos concluidos e plataforma do curso criada." },
      { stage: "Divulgação", description: "Curso planejado para a segunda quinzena de agosto de 2026." }
    ],
    materials: [],
    lastUpdated: "3 de julho de 2026"
  },
  {
    id: "gat-2",
    number: 2,
    title: "Saúde Digital no SUS e aplicativo InfoVida",
    shortTitle: "InfoVida",
    status: "Validação",
    categories: ["Saúde digital", "Educação em saúde", "Combate a desinformação", "Desenvolvimento de aplicativos"],
    activityTypes: ["Capacitação", "Desenvolvimento tecnologico", "Validação"],
    highlight: "364 pessoas capacitadas",
    summary: "Capacitações em Saúde Digital no SUS e desenvolvimento do aplicativo InfoVida.",
    about: [
      "Realização de capacitações em Saúde Digital no SUS para integrantes do PET, comunidade interna da UNIFAL-MG e comunidade externa.",
      "Desenvolvimento do aplicativo móvel InfoVida, voltado a divulgação de informações em saúde, prevenção de fake news e monitoramento de saúde."
    ],
    advances: [
      "138 integrantes do PET capacitados.",
      "90 participantes da comunidade interna da UNIFAL-MG.",
      "136 participantes da comunidade externa.",
      "364 participantes no total.",
      "14 unidades de saúde atendidas.",
      "Prototipo do aplicativo InfoVida em fase final de desenvolvimento."
    ],
    nextSteps: [
      "Validar o aplicativo InfoVida.",
      "Disponibilizar o aplicativo para a comunidade entre agosto e setembro de 2026.",
      "Continuar as palestras nas unidades de saúde.",
      "Realizar ações sobre Saúde Digital e prevenção de fake news.",
      "Alcancar aproximadamente 500 participantes entre julho e dezembro de 2026."
    ],
    metrics: [
      { label: "Integrantes do PET", value: 138 },
      { label: "Comunidade interna", value: 90 },
      { label: "Comunidade externa", value: 136 },
      { label: "Total", value: 364 },
      { label: "Unidades atendidas", value: 14 }
    ],
    technologies: ["Aplicativos móveis", "Educação em saúde", "Saúde digital"],
    timeline: [
      { stage: "Desenvolvimento", description: "Prototipo do InfoVida em fase final de desenvolvimento." },
      { stage: "Validação", description: "Validação prevista antes da disponibilização." },
      { stage: "Divulgação", description: "Disponibilização prevista entre agosto e setembro de 2026." }
    ],
    materials: [
      {
        title: "Acessar materiais",
        type: "Link externo",
        url: "https://drive.google.com/u/0/open?usp=forms_web&id=1MSTJpW6op6logyPf-CEPomuBmKEkL_cq"
      }
    ],
    lastUpdated: "3 de julho de 2026"
  },
  {
    id: "gat-3",
    number: 3,
    title: "Avaliação de usabilidade do SisAPEC",
    shortTitle: "Usabilidade do SisAPEC",
    status: "Avaliação em andamento",
    categories: ["Usabilidade de sistemas", "Tecnologia em saúde", "Ciência da computação", "Interoperabilidade"],
    activityTypes: ["Pesquisa", "Usabilidade", "Interoperabilidade"],
    highlight: "Avaliação somativa e heurística",
    summary: "Avaliação de usabilidade em unidades de atendimento e avaliação heurística por estudantes da Ciência da Computação.",
    about: [
      "Realização de Avaliação Somativa de Usabilidade do SisAPEC nas unidades de atendimento.",
      "Observação de tempo de tarefa, erros, intercorrências, dificuldades de utilização e experiência geral.",
      "Avaliação Heuristica da interface por estudantes da Ciência da Computação."
    ],
    advances: [
      "Identificação de excesso de informações preenchidas manualmente.",
      "Identificação de problemas pontuais na interface.",
      "Constatação de baixa frequência de uso do SisAPEC em algumas unidades.",
      "Verificação da necessidade de integração com outros sistemas utilizados pelos profissionais."
    ],
    nextSteps: [
      "Finalizar a coleta em julho de 2026.",
      "Tabular os dados.",
      "Elaborar relatório da Avaliação Somativa.",
      "Encaminhar conclusoes a equipe de desenvolvimento.",
      "Usar resultados para orientar novas versoes.",
      "Trabalhar, no segundo semestre, na interoperabilidade com outros sistemas."
    ],
    metrics: [
      { label: "Método", value: "Avaliação somativa" },
      { label: "Complemento", value: "Avaliação heurística" }
    ],
    technologies: ["Heuristicas de usabilidade", "Caso clinico simulado", "Interoperabilidade"],
    timeline: [
      { stage: "Coleta", description: "Finalização prevista para julho de 2026." },
      { stage: "Análise", description: "Tabulação dos dados e elaboração de relatório." },
      { stage: "Implementação", description: "Resultados orientarão novas versoes e estudos de interoperabilidade." }
    ],
    materials: [],
    lastUpdated: "7 de julho de 2026"
  },
  {
    id: "gat-4",
    number: 4,
    title: "SisAPEC-Work e dispositivos vestíveis",
    shortTitle: "SisAPEC-Work",
    status: "Pesquisa e prototipagem",
    categories: ["Dispositivos vestíveis", "Interoperabilidade", "Reconhecimento de fala", "Saúde digital"],
    activityTypes: ["Pesquisa", "Prototipagem", "Interoperabilidade", "Desenvolvimento tecnologico"],
    highlight: "Samsung Galaxy Watch 7 em estudo",
    summary: "Pesquisa e prototipagem para integração com dispositivos vestíveis, captura de áudio e reconhecimento de fala.",
    about: [
      "Colaboração no desenvolvimento do SisAPEC-Work, especialmente na integração com dispositivos vestíveis.",
      "Estudo do smartwatch como dispositivo de captura de áudio durante o atendimento.",
      "Discussão sobre reconhecimento de fala aplicado a estruturação de informações em saúde."
    ],
    advances: [
      "Definição da arquitetura inicial de integração.",
      "Estudos sobre padrões internacionais de interoperabilidade.",
      "Avaliação do smartwatch como dispositivo de captura de áudio.",
      "Inicio dos estudos com Samsung Galaxy Watch 7.",
      "Discussões sobre reconhecimento de fala aplicado ao registro em saúde.",
      "Estudos para futura integração com padrões de informação em saúde."
    ],
    nextSteps: [
      "Desenvolver a API de comunicação.",
      "Implementar protótipos de captura segura de áudio.",
      "Avaliar o reconhecimento de fala em ambientes reais.",
      "Validar segurança da informação.",
      "Avaliar privacidade e conformidade com a LGPD.",
      "Realizar testes de usabilidade com profissionais do SUS.",
      "Preparar implementação piloto."
    ],
    metrics: [
      { label: "Solução", value: "SisAPEC-Work" },
      { label: "Dispositivo", value: "Samsung Galaxy Watch 7" }
    ],
    technologies: ["HL7 FHIR", "HAPI FHIR", "RNDS", "OpenEHR", "Reconhecimento de fala", "Dispositivos vestíveis"],
    timeline: [
      { stage: "Planejamento", description: "Arquitetura inicial de integração definida." },
      { stage: "Desenvolvimento", description: "Prototipos de captura segura de áudio serão implementados." },
      { stage: "Validação", description: "Testes de segurança, privacidade, LGPD e usabilidade serão necessários." },
      { stage: "Implementação", description: "Preparação de implementação piloto após validações." }
    ],
    materials: [
      {
        title: "Acessar materiais",
        type: "Link externo",
        url: "https://drive.google.com/u/0/open?usp=forms_web&id=1mxHlSsE-94IBJturo_ihYL4mn6pIWCkJ"
      }
    ],
    lastUpdated: "17 de julho de 2026"
  },
  {
    id: "gat-5",
    number: 5,
    title: "Barreiras de acesso digital no SUS",
    shortTitle: "Barreiras digitais",
    status: "Coleta de dados",
    categories: ["Inclusão digital", "Acesso a saúde", "Pesquisa qualitativa", "Desigualdades sociais"],
    activityTypes: ["Pesquisa"],
    highlight: "50 usuários previstos",
    summary: "Pesquisa qualitativa sobre barreiras sociais, econômicas, culturais e de habilidade no uso de tecnologias em saúde.",
    about: [
      "Pesquisa qualitativa destinada a analisar barreiras sociais, econômicas, culturais e de habilidade para o uso de tecnologias em saúde por usuários do SUS nos três níveis de atenção."
    ],
    advances: [
      "A pesquisa encontra-se na fase de coleta de dados.",
      "Como a coleta ainda não foi concluida, não existem resultados consolidados para divulgação."
    ],
    nextSteps: [
      "Finalizar a coleta realizada durante junho e julho de 2026.",
      "Tabular os dados.",
      "Transcrever as entrevistas.",
      "Analisar os dados.",
      "Elaborar resultados e relatórios após a conclusão da análise."
    ],
    metrics: [
      { label: "Usuários previstos", value: 50 },
      { label: "Servicos envolvidos", value: 10 },
      { label: "Níveis de atenção", value: "3" }
    ],
    technologies: ["Pesquisa qualitativa", "Entrevistas", "Análise de dados"],
    timeline: [
      { stage: "Coleta", description: "Coleta realizada durante junho e julho de 2026." },
      { stage: "Análise", description: "Transcrição, tabulação e análise dos dados." },
      { stage: "Divulgação", description: "Resultados e relatórios serão elaborados após a conclusão da análise." }
    ],
    materials: [],
    emptyMaterials: "Ainda não existem materiais públicos disponíveis para este grupo.",
    lastUpdated: "2 de julho de 2026"
  },
  {
    id: "gat-6",
    number: 6,
    title: "Inteligência artificial, farmacovigilância e segurança do paciente",
    shortTitle: "IA e farmacovigilância",
    status: "Preparação",
    categories: ["Inteligência artificial", "Seguranca do paciente", "Farmacovigilancia", "Educação", "Inovação"],
    activityTypes: ["Pesquisa", "Capacitação", "Educação em saúde"],
    highlight: "aprox. 200 profissionais",
    summary: "Coleta com profissionais da Santa Casa de Alfenas e estruturação de curso sobre inteligência artificial na saúde.",
    about: [
      "Aplicação de questionários para identificar necessidades relacionadas ao uso do SisAPEC, farmacovigilância hospitalar, segurança do paciente e transformação digital em saúde.",
      "Coleta envolvendo aproximadamente 200 profissionais, de diferentes categorias e turnos.",
      "Estruturação do curso Formação Integrada em Inteligência Artificial na Saúde."
    ],
    advances: [
      "Questionário de pesquisa elaborado.",
      "Logistica da coleta organizada.",
      "Aplicação iniciada com aproximadamente 200 profissionais.",
      "Estrutura pedagógica do curso concluida.",
      "Material didático planejado.",
      "Cronograma e metodologia definidos.",
      "Curso preparado para iniciar em agosto de 2026."
    ],
    nextSteps: [
      "Concluir a coleta de dados.",
      "Consolidar e analisar os resultados.",
      "Iniciar o curso em agosto.",
      "Apos aprovação dos órgãos competentes, iniciar o projeto de farmacovigilância hospitalar.",
      "Construir e validar um banco de dados estruturado.",
      "Identificar fatores associados a eventos adversos a medicamentos.",
      "Explorar modelos preditivos para estratificação de risco."
    ],
    metrics: [
      { label: "Profissionais envolvidos", value: "aprox. 200" },
      { label: "Curso", value: "Agosto de 2026" }
    ],
    technologies: ["Inteligência artificial", "Questionários", "Farmacovigilancia", "Modelos preditivos"],
    timeline: [
      { stage: "Coleta", description: "Aplicação iniciada com aproximadamente 200 profissionais." },
      { stage: "Análise", description: "Consolidação e análise dos resultados após a coleta." },
      { stage: "Implementação", description: "Projeto de farmacovigilância condicionado a aprovação dos órgãos competentes." }
    ],
    materials: [],
    lastUpdated: "2 de julho de 2026"
  },
  {
    id: "gat-7",
    number: 7,
    title: "Interações medicamentosas e inteligência artificial",
    shortTitle: "Interações medicamentosas",
    status: "Patente e análise",
    categories: ["Interações medicamentosas", "Inteligência artificial", "Inovação", "Pesquisa científica", "Seguranca do paciente"],
    activityTypes: ["Pesquisa", "Desenvolvimento tecnologico"],
    highlight: "Aplicativo em patente",
    summary: "Desenvolvimento de aplicativo de interações medicamentosas, processo de patente, pesquisa e artigo científico.",
    about: [
      "Reunioes presenciais e remotas para alinhamento das ações.",
      "Desenvolvimento de um aplicativo de interações medicamentosas.",
      "Processo de registro de patente do aplicativo.",
      "Pesquisa com profissionais hospitalares sobre a percepção do uso da inteligência artificial na prática clínica.",
      "Desenvolvimento de artigo científico sobre o aplicativo."
    ],
    advances: [
      "Desenvolvimento de uma solução que podera auxiliar profissionais de saúde na consulta e identificação de interações medicamentosas."
    ],
    nextSteps: [
      "Aguardar a conclusão do registro de patente.",
      "Divulgar o aplicativo após autorização.",
      "Implementar a solução na pratica.",
      "Analisar os dados da pesquisa.",
      "Descrever resultados, discussão e conclusão.",
      "Submeter artigo científico a periódico nacional ou internacional."
    ],
    metrics: [
      { label: "Solução", value: "Aplicativo de interações" },
      { label: "Etapa", value: "Patente e análise" }
    ],
    technologies: ["Aplicativo de interações medicamentosas", "Inteligência artificial", "Pesquisa científica"],
    timeline: [
      { stage: "Desenvolvimento", description: "Aplicativo de interações medicamentosas em desenvolvimento." },
      { stage: "Validação", description: "Divulgação condicionada a autorização após registro de patente." },
      { stage: "Divulgação", description: "Submissão de artigo planejada após análise e redação dos resultados." }
    ],
    materials: [
      {
        title: "Acessar materiais",
        type: "Link externo",
        url: "https://drive.google.com/u/0/open?usp=forms_web&id=1gVFvohncTTfAJEeM2mEfgNdWQe3PZzRh"
      }
    ],
    lastUpdated: "8 de julho de 2026"
  }
];

export const petCollaborators = [
  {
    name: "Isabelle Cristinne Pinto Sampaio Costa",
    role: "Coordenadora geral",
    description: "Atuação na orientação acadêmica, estruturação científica e articulação institucional.",
    image: "../assets/images/isabelle-costa.jpeg",
    lattes: "http://lattes.cnpq.br/1981112121402908"
  },
  {
    name: "Andreia Cristina Barbosa Costa",
    role: "Coordenadora Tutora do GAT 7",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/andreia.jpg",
    lattes: "http://lattes.cnpq.br/7101019730284861"
  },
  {
    name: "Cristina Garcia Lopes Alves",
    role: "Coordenadora Tutora do GAT 1",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/cristina-garcia-lopes-alves.jpeg",
    lattes: "http://lattes.cnpq.br/2384731695226095"
  },
  {
    name: "Fábio de Souza Terra",
    role: "Coordenador Tutor do GAT 5",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/fabio-souza-terra.gif",
    lattes: "http://lattes.cnpq.br/3387057610555151"
  },
  {
    name: "Flávio Barbieri Gonzaga",
    role: "Tutor do GAT 6",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/flavio.jpg",
    lattes: "http://lattes.cnpq.br/1310310705488241"
  },
  {
    name: "Iago Augusto de Carvalho",
    role: "Tutor do GAT 7",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/iago-augusto-carvalho.gif",
    lattes: "http://lattes.cnpq.br/9975041225831602"
  },
  {
    name: "Lucélia Terra Chini",
    role: "Coordenadora Tutora do GAT 3",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/lucelia.jpg",
    lattes: "http://lattes.cnpq.br/9302675982148088"
  },
  {
    name: "Luiz Eduardo da Silva",
    role: "Tutor do GAT 2",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/luiz-eduardo.jpg",
    lattes: "http://lattes.cnpq.br/5459510407019521"
  },
  {
    name: "Marcelo Lacerda Rezende",
    role: "Tutor do GAT 5",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/marcelo-lacerda-rezende.gif",
    lattes: "http://lattes.cnpq.br/6453091384982419"
  },
  {
    name: "Mariane Moreira de Souza",
    role: "Tutora do GAT 3",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/mariane.jpg",
    lattes: "http://lattes.cnpq.br/9682825029495702"
  },
  {
    name: "Paulo Alexandre Bressan",
    role: "Tutor do GAT 1",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/paulo-alexandre-bressan.gif",
    lattes: "http://lattes.cnpq.br/0231239253253477"
  },
  {
    name: "Ricardo Radighieri Rascado",
    role: "Coordenador Tutor do GAT 6",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/ricardo-radighieri-rascado.gif",
    lattes: "http://lattes.cnpq.br/4051248293039990"
  },
  {
    name: "Ricardo Goes de Aguiar",
    role: "Coordenador Tutor do GAT 4",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/ricargo-goes-aguiar.gif",
    lattes: "http://lattes.cnpq.br/8721165636983997"
  },
  {
    name: "Rodrigo Martins Pagliares",
    role: "Tutor do GAT 4",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/rodrigo-martins-pagliares.gif",
    lattes: "http://lattes.cnpq.br/1194178136211401"
  },
  {
    name: "Sérgio Valverde Marques dos Santos",
    role: "Coordenador Tutor do GAT 2",
    description: "Colaboração nas atividades institucionais do PET TechSUS.",
    image: "../assets/images/sergio-valverde.jpg",
    lattes: "http://lattes.cnpq.br/8497478062082605"
  }
];

export const digitalSolutions = [
  {
    name: "InfoVida",
    gatId: "gat-2",
    gatLabel: "GAT 2",
    objective: "Divulgar informações em saúde, prevenir fake news e apoiar monitoramento em saúde.",
    stage: "Prototipo em fase final de desenvolvimento e validação.",
    technologies: ["Aplicativo móvel", "Educação em saúde", "Saúde digital"]
  },
  {
    name: "SisAPEC-Work com dispositivos vestíveis",
    gatId: "gat-4",
    gatLabel: "GAT 4",
    objective: "Estudar captura segura de áudio por smartwatch e reconhecimento de fala aplicado a saúde digital.",
    stage: "Pesquisa e prototipagem com arquitetura inicial definida.",
    technologies: ["Dispositivos vestíveis", "HL7 FHIR", "OpenEHR", "Reconhecimento de fala"]
  },
  {
    name: "Aplicativo de interações medicamentosas",
    gatId: "gat-7",
    gatLabel: "GAT 7",
    objective: "Auxiliar profissionais na consulta e identificação de interações medicamentosas.",
    stage: "Processo de patente e análise de dados.",
    technologies: ["Inteligência artificial", "Interações medicamentosas", "Seguranca do paciente"]
  }
];
