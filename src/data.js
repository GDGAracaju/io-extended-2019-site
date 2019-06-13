export const palestrantes = [
  {
    id: "erick",
    image: require("./assets/images/fotos/erick.png"),
    nome: "Erick Wendell",
    bio:
      "Erick Wendel, palestrante, consultor de software e co-organizador de comunidades de tecnologia no Brasil. Nomeado pela Microsoft como Most Valuable Professional e pelo Google como Google Developer Expert, especialista em aplicações Node.js e Javascript. Ele é arquiteto independente de software onde ajuda empresas desenvolver aplicações em nuvem com o melhor curso beneficio baseadas em recursos do cliente final. Conta com mais de noventa apresentações em sua carreira e coopera em comunidades de software como Nerdzão, NodeBR e Javascript São Paulo.",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["Web"]
  },
  {
    id: "bianca",
    image: require("./assets/images/fotos/bianca.jpg"),
    nome: "Bianca Ximenes",
    bio:
      "Bianca Ximenes é Google Expert em Estratégia de Produto. Ela é formada em Economia e possui mestrado em Ciência da Computação. Sua experiência de trabalho incluiu back-office, bancos, gerenciamento de projetos e de inovação, desenvolvimento de produtos, ensino e mentorias. Ela produziu pesquisas apresentadas em conferências internacionais e acredita firmemente na ciência e na sua conexão com o desenvolvimento de produtos de sucesso no mundo real. Atualmente, é consultora independente e doutoranda em Ciência da Computação na UFPE.  Seu trabalho aborda HCAI as repercussões éticas de IA e ML na sociedade, descobrindo como criar produtos digitais baseados em IA de forma responsável.",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["IA"]
  },
  {
    id: "jessica",
    image: require("./assets/images/fotos/jessica.jpg"),
    nome: "Jéssica Costa",
    bio:
      "Formada em Sistemas de Informação pela Universidade Federal de Sergipe, Analista de Desenvolvimento de Sistemas na TOPOS/SERGÁS e GDG Organizer e WTM Ambassador em Aracaju.",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["IA"]
  },
  {
    id: "wilson",
    image: require("./assets/images/fotos/wilson.jpg"),
    nome: "Wilson",
    bio:
      "Entusiasta do desenvolvimento de software desde os 12 anos, atualmente é desenvolvedor mobile na Popcode, onde utiliza principalmente Kotlin/Java e trabalha ativamente com Android, além de atuar como desenvolvedor backend(com Python e Django) nas horas vagas, em projetos paralelos/freelancers.",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["Android"]
  },
  {
    id: "alex",
    image: require("./assets/images/fotos/alex.jpg"),
    nome: "Alex Freire",
    bio:
      "Alex,  há 11 anos trabalhando na área tecnológica é formado em desenvolvimento de sistemas e pôs graduando em segurança da informação.",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["IOT", "Web"]
  },
  {
    id: "thiagof",
    image: require("./assets/images/fotos/thiagof.jpg"),
    nome: "Thiago Fontes",
    bio: "Desenvolvedor Fullstack e discente de Engenharia de Computação",
    url: "",
    empresa: "",
    urlEmpresa: "",
    areas: ["IOT"]
  },
  {
    id: "thiagos",
    image: require("./assets/images/fotos/thiagos.png"),
    nome: "Thiago dos Santos",
    bio:
      "Desenvolvedor Android, curioso sobre Flutter, amante de VFX e jogar uns games legais.",
    url: "",
    areas: ["Android"]
  },
  {
    id: "caique",
    image: require("./assets/images/fotos/caique.jpg"),
    nome: "Caique Oliveira",
    bio:
      "Desenvolvedor Android com muito interesse por testes e arquiteturas de projetos, nas horas vagas inventa rolês aleatórios de moto. ",
    url: "",
    areas: ["Android"]
  }
];

const getPalestrante = id => palestrantes.find(p => p.id === id);

export const programacao = [
  {
    horario: "8:00",
    titulo: "Credenciamento",
    break: true
  },
  {
    horario: "8:30",
    titulo: "Resumo do Google I/O",
    palestrante: { nome: "GDG Aracaju" }
  },
  {
    horario: "9:00",
    titulo: "O que eu faço com meus dados: uma introdução a ciência de dados",
    resumo:
      "Nessa palestra daremos uma noção sobre a área de ciência de dados e como utilizar bases de dados para obter padrões e encontrar informações importantes  que podem agregar muito no processo de tomada de decisão.",
    palestrante: getPalestrante("jessica")
  },
  {
    horario: "9:50",
    titulo: "Simplificando o desenvolvimento Android com Koin",
    resumo:
      "O objetivo da palestra é apresentar a Koin, passo-a-passo, através de um simples projeto utilizando Kotlin + Android, abordando suas principais funcionalidades(escopos, injeção de ViewModels, etc) e demonstrando como pode ser fácil e eficiente utilizar injeção de dependências. Ao final, a própria Koin será comparada à outras opções disponíveis e comuns no mercado, como Dagger e Kodein, utilizando dados como: desempenho, curva de aprendizado, problemas com manutenção, etc.",
    palestrante: getPalestrante("wilson")
  },
  {
    horario: "10:40",
    titulo: "Como Começar com IoT",
    resumo:
      "Como começar a criar produtos utilizando Iot (Internet das coisas), demostrarei como funcionam os microcontroladores, sensores e como fazer tudo isso comunicar via internet.",
    palestrante: getPalestrante("alex")
  },
  {
    horario: "11:30",
    titulo: "Implementando sua primeira solução de IOT usando Firebase",
    resumo:
      "A palestra trará conceitos básicos sobre arquitetura de microcontroladores, conceitos básicos sobre sensores analógicos e digitais, configuração de ambiente de desenvolvimento e os passos da implementação.",
    palestrante: getPalestrante("thiagof")
  },
  {
    horario: "12:20",
    titulo: "Almoço",
    break: true
  },
  {
    horario: "14:00",
    titulo: "Configurando e modelando seu projeto Android com MVVM",
    resumo:
      "Uma apresentação introdutória de como configurar um projeto e criar uma arquitetura que seja produtiva e testável, mantendo a estrutura MVVM com RxJava e Architecture Components. Cansado(a) de pesquisar onde, o que e como se encaixa no projeto? Nessa palestra vou testar explicar algumas delas.",
    palestrante: getPalestrante("thiagos")
  },
  {
    horario: "14:50",
    titulo: "Coroutines e Flow",
    resumo:
      "Entenda como funciona coroutines e o flow, como utilizá-los no desenvolvimento de seus apps",
    palestrante: getPalestrante("caique")
  },
  {
    horario: "15:40",
    titulo: "Coffee Break",
    break: true
  },
  {
    horario: "16:00",
    titulo:
      "Inteligência Artificial em Produtos: construindo pra gente de verdade",
    resumo:
      "Essa palestra se baseia no Google People + AI Guidebook, lançado no I/O 2019, e enfatiza as diferenças e especificidades que devem ser levadas em conta ao se construir produtos baseados em dados e inteligência artificial. A relação com o usuário precisa ser repensada e novas necessidades surgem com relação a métricas de sucesso, coleta de dados, explicabilidade, confiança e gestão de falhas do sistema. Depois dessa palestra, seus produtos inteligentes vão atingir outro nível ;)",
    palestrante: getPalestrante("bianca")
  },
  {
    horario: "16:50",
    titulo: "Encerramento",
    break: true
  }
];

export const linkInscricao =
  "https://www.sympla.com.br/io-extended-aracaju__540962";
export const links = {
  facebook: "http://fb.com/gdgaracaju",
  instagram: "http://instagram.com/gdgaracaju",
  telegram: "https://t.me/gdgaracaju",
  whatsapp: "https://chat.whatsapp.com/4qU6ouV0HzjJUhBAPIaKSo",
  meetup: "https://www.meetup.com/gdgaracaju/",
  medium: "http://medium.com/gdg-aracaju"
};
