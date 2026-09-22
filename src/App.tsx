import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Briefcase } from 'lucide-react';

function App() {
  type Lang = 'en' | 'pt';
  type Position = {
    title: string;
    employmentType: Record<Lang, string>;
    period: Record<Lang, string>;
    description: Record<Lang, string>;
  };
  type Experience = {
    company: string;
    totalDuration: Record<Lang, string>;
    positions: Position[];
  };

  const [lang, setLang] = useState<Lang>('en');

  const copy: Record<Lang, {
    aboutTitle: string;
    aboutText: string;
    projectSectionTitle: string;
    projectBadge: string;
    projectTagline: string;
    projectDescription: string;
    projectLiveButton: string;
    projectCodeButton: string;
    experienceTitle: string;
    stackTitle: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    contact: string;
    location: string;
    years: string;
    footer: string;
  }> = {
    en: {
      aboutTitle: 'About Me',
      aboutText:
        'Frontend Engineer and UI Designer with 5 years of experience building web applications and developer tools. I take features from initial design concepts all the way to production code—specializing in server-rendered applications, Tailwind CSS, and clean semantic HTML. I care deeply about performance, micro-interactions, and building simple, responsive interfaces for complex data.',
      projectSectionTitle: 'Featured Project',
      projectBadge: 'Live in Production',
      projectTagline: 'Autonomous Flight Tracker & Price Alert Platform',
      projectDescription:
        'Fullstack application for automated, continuous flight fare tracking on Google Flights. Features a resilient Playwright scraper orchestrated with an async mutex lock to prevent memory exhaustion in container environments, background scheduling via node-cron, and hybrid LibSQL persistence (local SQLite / Turso Cloud). Visualizes price trends with Recharts and triggers transactional email alerts whenever fares hit target thresholds.',
      projectLiveButton: 'bipfly.app',
      projectCodeButton: 'GitHub',
      experienceTitle: 'Professional Experience',
      stackTitle: 'Tech Stack',
      ctaTitle: "Let's build something amazing?",
      ctaText:
        "Open to new opportunities, high-impact projects, and international roles. If you're looking for an engineer focused on quality, performance, and UI polish—let’s talk!",
      ctaButton: 'Get in touch',
      contact: 'Contact',
      location: 'São Paulo, Brazil',
      years: '5+ years of experience',
      footer: `© ${new Date().getFullYear()} Gabriela Tomasini. Built with React & Tailwind CSS.`,
    },
    pt: {
      aboutTitle: 'Sobre mim',
      aboutText:
        'Sou Engenheira de Frontend e UI Designer com 5 anos de experiência criando aplicações web e ferramentas para desenvolvedores. Cuido de todo o ciclo de uma funcionalidade: desde a ideia inicial no design até o código rodando em produção. Tenho foco em aplicações renderizadas no servidor, Tailwind CSS e HTML semântico, com atenção especial à performance, microinterações e em transformar dados complexos em interfaces simples e intuitivas.',
      projectSectionTitle: 'Projeto em Destaque',
      projectBadge: 'Em Produção',
      projectTagline: 'Monitoramento Autônomo e Alertas de Tarifas Aéreas',
      projectDescription:
        'Aplicação fullstack para rastreamento automatizado e contínuo de passagens no Google Flights. Desenvolvida com scraper resiliente em Playwright (Chromium headless gerenciado por trava de Mutex assíncrono para conter uso de memória em contêineres), agendador em background com node-cron e persistência híbrida via LibSQL (SQLite local / Turso Cloud). Acompanha a evolução de preços com Recharts e dispara alertas transacionais por e-mail quando a tarifa atinge a meta definida pelo usuário.',
      projectLiveButton: 'bipfly.app',
      projectCodeButton: 'GitHub',
      experienceTitle: 'Experiência profissional',
      stackTitle: 'Tecnologias',
      ctaTitle: 'Vamos construir algo incrível?',
      ctaText:
        'Aberta a novas oportunidades, projetos de alto impacto e posições internacionais. Se você busca uma desenvolvedora focada em qualidade, performance e refinamento de interface—vamos conversar!',
      ctaButton: 'Entrar em contato',
      contact: 'Contato',
      location: 'São Paulo, Brasil',
      years: '5+ anos de experiência',
      footer: `© ${new Date().getFullYear()} Gabriela Tomasini. Feito com React & Tailwind CSS.`,
    },
  };

  const brqDescriptions: Record<'junior' | 'technician' | 'intern', Record<Lang, string>> = {
    junior: {
      en: `While working at Itaú (largest bank in Latin America), I was responsible for developing microfrontends using Angular, creating responsive layouts with HTML, CSS, Voxel (Itaú's design system), and integrating technologies such as Typescript and Javascript. Additionally, I wrote unit tests using Jest and implemented end-to-end tests with Cypress. The CI/CD infrastructure was managed through AWS, and code versioning was handled with GIT.

I also actively participated in discussions and decisions regarding the refinement, with a focus on modernizing the legacy system within the "Poderes" project from the Customer Experience Transformation squad, contributing to improvements in the interface and user experience.`,
      pt: `Durante meu tempo no Itaú, fui responsável pelo desenvolvimento de microfrontends utilizando Angular, criando layouts responsivos com HTML, CSS, Voxel (o design system do Itaú) e integrando tecnologias como Typescript e Javascript. Além disso, escrevi testes unitários com Jest e implementei testes end-to-end utilizando Cypress. A infraestrutura de CI/CD foi gerida através de AWS, e o versionamento de código foi realizado com GIT.

Também participei ativamente de discussões e decisões sobre o refinamento das telas do sistema, com foco na modernização do sistema legado da squad de Transformação da Experiência do Cliente, no projeto "Poderes", contribuindo para a melhoria da interface e da experiência do usuário.`,
    },
    technician: {
      en: `Experience in developing microfrontends using the Angular framework, working with technologies such as JavaScript/Typescript, HTML, and CSS. Additionally, I have expertise in implementing regression tests using Cypress to ensure the stability and functionality of the applications.`,
      pt: `Experiência no desenvolvimento de microfrontends utilizando o framework Angular, trabalhando com tecnologias como JavaScript/Typescript, HTML e CSS. Além disso, tenho conhecimento na implementação de testes regressivos com Cypress, garantindo a estabilidade e funcionalidade das aplicações.`,
    },
    intern: {
      en: `Experience in developing microfrontends using Angular (Typescript, HTML e Css).`,
      pt: `Experiência em desenvolvimento de Microfrontend com Angular (Typescript, HTML e Css).`,
    },
  };

  const charismaDescriptions: Record<Lang, string> = {
    en: `Full-cycle software development, from data modeling to the implementation of AI-driven solutions for internal process optimization.

Development of Full Stack applications (Node.js/Next.js/PostgreSQL) focused on performance and the scalability of legacy systems.

Application of Prompt Engineering for automating editorial tasks and structuring unformatted data using AI.

Implementation of high-complexity dashboards with React, integrating audit workflows and structured log monitoring.

Management of modern infrastructure using Docker, Kubernetes, and CI/CD, alongside storage and security integrations via AWS and SSO.`,
    pt: `Experiência no ciclo completo de software, desde a modelagem de dados até a implementação de soluções baseadas em IA para otimização de processos internos.

Desenvolvimento de aplicações Full Stack (Node/Next.js/PostgreSQL) com foco em performance e escalabilidade de sistemas legados.

Aplicação de Prompt Engineering para automação de tarefas editoriais e estruturação de dados não formatados via IA.

Implementação de dashboards de alta complexidade com React, integrando fluxos de auditoria e monitoramento de logs.

Gestão de infraestrutura moderna com Docker, Kubernetes e CI/CD, além de integração de storage e segurança via AWS e SSO.`,
  };

  const getDynamicDuration = (startDate: Date, endDate: Date = new Date()): Record<Lang, string> => {
    const totalMonths = Math.max(
      1,
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) +
        1
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const formatText = (y: number, m: number, l: Lang) => {
      const yStr = l === 'en' ? `${y} ${y === 1 ? 'year' : 'years'}` : `${y} ${y === 1 ? 'ano' : 'anos'}`;
      const mStr = l === 'en' ? `${m} ${m === 1 ? 'month' : 'months'}` : `${m} ${m === 1 ? 'mês' : 'meses'}`;

      if (y > 0 && m > 0) return `${yStr} ${mStr}`;
      if (y > 0) return yStr;
      return mStr;
    };

    return {
      en: formatText(years, months, 'en'),
      pt: formatText(years, months, 'pt'),
    };
  };

  const charismaDuration = getDynamicDuration(new Date(2025, 3, 1)); // 01/04/2025

  const experiences: Experience[] = [
    {
      company: "charisma business intelligence",
      totalDuration: { en: 'Current Role', pt: 'Cargo atual' },
      positions: [
        {
          title: "Fullstack Software Engineer",
          employmentType: { en: 'Full-time', pt: 'Tempo integral' },
          period: {
            en: `Apr 2025 - Present · ${charismaDuration.en}`,
            pt: `abr de 2025 - o momento · ${charismaDuration.pt}`,
          },
          description: charismaDescriptions,
        },
      ],
    },
    {
      company: "Alice",
      totalDuration: { en: '7 months', pt: '7 meses' },
      positions: [
        {
          title: "Software Engineer (Pleno)",
          employmentType: { en: 'Full-time', pt: 'Tempo integral' },
          period: { en: 'Jun 2024 - Dec 2024 · 7 months', pt: 'jun de 2024 - dez de 2024 · 7 meses' },
          description: {
            en: `Working at Alice I had the opportunity to be part of a high-performing team, where I contributed to significant deliverables that directly impacted Alice's administrative support for its members. I focused on frontend development, leveraging technologies such as Vue 3 and Jest to ensure the creation of functional, high-performing, and thoroughly tested interfaces aligned with user needs and the company's strategic objectives.

Additionally, I participated in initiatives involving the application of Artificial Intelligence, collaborating on deliverables that integrated Alice's system with OpenAI solutions. This integration enhanced scalability and agility in customer service, optimizing processes and increasing the efficiency of the services provided.`,
            pt: `Nesta experiência profissional, tive a oportunidade de integrar um time de alto nível, onde contribuí para entregas significativas que impactaram diretamente o atendimento administrativo da Alice aos seus membros. Atuei com foco no desenvolvimento frontend, utilizando tecnologias como Vue 3 e Jest, assegurando a criação de interfaces funcionais, performáticas e devidamente testadas, alinhadas às necessidades dos usuários e aos objetivos estratégicos da empresa.

Além disso, participei de iniciativas relacionadas à aplicação de Inteligência Artificial, colaborando em entregas que integraram o sistema da Alice com soluções da OpenAI. Essa integração promoveu maior escalabilidade e agilidade nos atendimentos, otimizando processos e ampliando a eficiência do serviço prestado.`,
          },
        },
      ],
    },
    {
      company: "BRQ Digital Solutions",
      totalDuration: { en: '2 years 9 months', pt: '2 anos 9 meses' },
      positions: [
        {
          title: "Desenvolvedora Front-End Jr",
          employmentType: { en: 'Full-time', pt: 'Tempo integral' },
          period: { en: 'Jan 2023 - May 2024 · 1 year 5 months', pt: 'jan de 2023 - mai de 2024 · 1 ano 5 meses' },
          description: brqDescriptions.junior,
        },
        {
          title: "Técnico de sistemas",
          employmentType: { en: 'Full-time', pt: 'Tempo integral' },
          period: { en: 'May 2022 - Jan 2023 · 9 months', pt: 'mai de 2022 - jan de 2023 · 9 meses' },
          description: brqDescriptions.technician,
        },
        {
          title: "Estágio em Desenvolvimento Front-End",
          employmentType: { en: 'Internship', pt: 'Estágio' },
          period: { en: 'Sep 2021 - Apr 2022 · 8 months', pt: 'set de 2021 - abr de 2022 · 8 meses' },
          description: brqDescriptions.intern,
        },
      ],
    },
  ];

  const projectTechs = [
    "Next.js 16", "TypeScript", "Playwright", "Turso / SQLite", "Recharts", "Tailwind CSS"
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Next.js", "Redux / Context API", "Styled Components", 
    "Jest / RTL", "Git / GitHub", "Agile / Scrum",
    "SQL", "Node.js", "Vue.js", "Angular", "AWS Certified"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-violet-100 dark:selection:bg-violet-900">
      {/* Header / Hero */}
      <header className="max-w-4xl mx-auto pt-10 pb-12 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-xl">
              <img 
                src="https://github.com/gabitomasini.png" 
                alt="Gabriela Tomasini" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-violet-600 text-white p-2 rounded-lg shadow-lg">
              <Code2 size={20} />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Gabriela Tomasini
              </h1>
              <div className="inline-flex rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-1">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={[
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
                    lang === 'en'
                      ? "bg-violet-600 text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",
                  ].join(" ")}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('pt')}
                  className={[
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
                    lang === 'pt'
                      ? "bg-violet-600 text-white"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",
                  ].join(" ")}
                  aria-pressed={lang === 'pt'}
                >
                  PT
                </button>
              </div>
            </div>
            <p className="text-xl text-violet-600 dark:text-violet-400 font-medium mb-4">
              {lang === 'en' ? 'Senior Frontend Developer' : 'Desenvolvedora Frontend Sênior'}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} />
                <span>{copy[lang].location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase size={18} />
                <span>{copy[lang].years}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
          <a 
            href="https://github.com/gabitomasini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/gabriela-tomasini-88276553/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-colors shadow-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:gabriela_tomasini@hotmail.com" 
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Mail size={18} />
            <span>{copy[lang].contact}</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* About */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
              {copy[lang].aboutTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{copy[lang].aboutText}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              {copy[lang].stackTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl text-sm font-medium shadow-sm transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
            {copy[lang].projectSectionTitle}
          </h2>

          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 md:p-8 backdrop-blur-sm shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-2.5 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src="/bipfly-icon.svg"
                    alt="BipFly Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                      BipFly
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {copy[lang].projectBadge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mt-0.5">
                    {copy[lang].projectTagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
                <a
                  href="https://bipfly.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-sm font-medium shadow-sm transition-colors"
                >
                  <span>{copy[lang].projectLiveButton}</span>
                  <ExternalLink size={15} />
                </a>
                <a
                  href="https://github.com/gabitomasini/bipfly-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-medium transition-colors shadow-sm"
                >
                  <Github size={15} />
                  <span>{copy[lang].projectCodeButton}</span>
                </a>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {copy[lang].projectDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              {projectTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
            {copy[lang].experienceTitle}
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-violet-600 transition-colors"></div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium">{exp.totalDuration[lang]}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.positions.map((pos, posIndex) => (
                      <div
                        key={`${pos.title}-${posIndex}`}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5"
                      >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                          <div>
                            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{pos.title}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{pos.employmentType[lang]}</p>
                          </div>
                          <p className="text-sm font-medium text-slate-500">{pos.period[lang]}</p>
                        </div>

                        <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                          {pos.description[lang].split("\n\n").map((paragraph, paragraphIndex) => (
                            <p key={`${lang}-${paragraphIndex}`}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="max-w-4xl mx-auto px-6 py-14 border-t border-slate-200 dark:border-slate-800 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {copy[lang].ctaTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              {copy[lang].ctaText}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="mailto:gabriela_tomasini@hotmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              <Mail size={16} />
              <span>{copy[lang].ctaButton}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 dark:text-slate-600 text-xs">
          <p>{copy[lang].footer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
