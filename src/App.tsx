import { useState, type ReactNode } from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, GraduationCap } from 'lucide-react';

function App() {
  type Lang = 'en' | 'pt';
  type Position = {
    title: Record<Lang, string> | string;
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
    heroHeadline: string;
    heroTagline: string;
    metaLine: string;
    contactButton: string;
    resumeButton: string;
    aboutTitle: string;
    aboutText: ReactNode;
    projectSectionTitle: string;
    projectBadge: string;
    projectTagline: string;
    projectDescription: string;
    projectLiveButton: string;
    projectCodeButton: string;
    experienceTitle: string;
    educationTitle: string;
    educationDegree: string;
    stackTitle: string;
    secondaryStackPrefix: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    contact: string;
    location: string;
    years: string;
    footer: string;
  }> = {
    en: {
      heroHeadline: 'Frontend Engineer',
      heroTagline:
        'Building web applications with strong UI taste and end-to-end execution—from design concepts to production code.',
      metaLine: 'São Paulo, Brazil • 5+ years of experience',
      contactButton: 'Contact',
      resumeButton: 'Resume (PDF)',
      aboutTitle: 'About Me',
      aboutText: (
        <>
          Frontend Engineer with 5 years of experience building web applications and developer tools. I bridge the gap between design concepts and production code—specializing in server-rendered applications, Tailwind CSS, and clean semantic HTML. Adopting <strong className="font-semibold text-slate-900 dark:text-slate-100">Spec-Driven Development (SDD)</strong> with AI-assisted tools (Cursor, OpenSpec), I accelerate feature prototyping while maintaining full ownership of code quality, performance, and UI polish for complex data interfaces.
        </>
      ),
      projectSectionTitle: 'Featured Project',
      projectBadge: 'Live in Production',
      projectTagline: 'Autonomous Flight Tracker & Price Alert Platform',
      projectDescription:
        'Fullstack application for automated, continuous flight fare tracking on Google Flights. Features a resilient Playwright scraper orchestrated with an async mutex lock to prevent memory exhaustion in container environments, background scheduling via node-cron, and hybrid LibSQL persistence (local SQLite / Turso Cloud). Visualizes price trends with Recharts and triggers transactional email alerts whenever fares hit target thresholds.',
      projectLiveButton: 'bipfly.app',
      projectCodeButton: 'GitHub',
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education',
      educationDegree: "Associate Degree in Systems Analysis and Development",
      stackTitle: 'Tech Stack',
      secondaryStackPrefix: 'Also experienced with',
      ctaTitle: 'Ready to build something great together?',
      ctaText:
        "I’m currently open to international roles, projects, and partnerships. If you're looking for an engineer focused on performance, clean code, and UI polish—let’s connect!",
      ctaButton: 'Send Email',
      contact: 'Contact',
      location: 'São Paulo, Brazil',
      years: '5+ years of experience',
      footer: `© ${new Date().getFullYear()} Gabriela Tomasini. Built with React & Tailwind CSS.`,
    },
    pt: {
      heroHeadline: 'Frontend Engineer',
      heroTagline:
        'Criando aplicações web com forte senso de UI e execução de ponta a ponta — dos conceitos de design ao código em produção.',
      metaLine: 'São Paulo, Brasil • 5+ anos de experiência',
      contactButton: 'Contato',
      resumeButton: 'Currículo (PDF)',
      aboutTitle: 'Sobre mim',
      aboutText: (
        <>
          Engenheira de Frontend com 5 anos de experiência na criação de aplicações web e ferramentas para desenvolvedores. Conecto conceitos de design ao código em produção, com especialidade em aplicações renderizadas no servidor, Tailwind CSS e HTML semântico. Adotando <strong className="font-semibold text-slate-900 dark:text-slate-100">Spec-Driven Development (SDD)</strong> com ferramentas assistidas por IA (Cursor, OpenSpec), acelero a prototipagem de funcionalidades mantendo controle total sobre a qualidade do código, performance e acabamento visual em interfaces de dados complexos.
        </>
      ),
      projectSectionTitle: 'Projeto em Destaque',
      projectBadge: 'Em Produção',
      projectTagline: 'Monitoramento Autônomo e Alertas de Tarifas Aéreas',
      projectDescription:
        'Aplicação fullstack para rastreamento automatizado e contínuo de passagens no Google Flights. Desenvolvida com scraper resiliente em Playwright (Chromium headless gerenciado por trava de Mutex assíncrono para conter uso de memória em contêineres), agendador em background com node-cron e persistência híbrida via LibSQL (SQLite local / Turso Cloud). Acompanha a evolução de preços com Recharts e dispara alertas transacionais por e-mail quando a tarifa atinge a meta definida pelo usuário.',
      projectLiveButton: 'bipfly.app',
      projectCodeButton: 'GitHub',
      experienceTitle: 'Experiência profissional',
      educationTitle: 'Formação Acadêmica',
      educationDegree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      stackTitle: 'Tecnologias',
      secondaryStackPrefix: 'Também com experiência em',
      ctaTitle: 'Pronto para construirmos algo incrível juntos?',
      ctaText:
        'Estou aberta a oportunidades internacionais, projetos e parcerias. Se você procura uma engenheira com foco em performance, código limpo e refinamento de UI—vamos nos conectar!',
      ctaButton: 'Enviar E-mail',
      contact: 'Contato',
      location: 'São Paulo, Brasil',
      years: '5+ anos de experiência',
      footer: `© ${new Date().getFullYear()} Gabriela Tomasini. Feito com React & Tailwind CSS.`,
    },
  };

  const brqDescriptions: Record<'junior' | 'technician' | 'intern', Record<Lang, string>> = {
    junior: {
      en: `- Developed microfrontends using Angular, TypeScript/JavaScript, HTML, CSS, and Voxel (Itaú’s design system).
- Implemented unit tests with Jest, end-to-end testing with Cypress, and versioning with Git under AWS-managed CI/CD infrastructure.
- Actively participated in technical discussions and refinement to modernize legacy systems and improve user experience.`,
      pt: `- Desenvolvimento de microfrontends utilizando Angular, TypeScript/JavaScript, HTML, CSS e Voxel (o design system do Itaú).
- Implementação de testes unitários com Jest, testes ponta a ponta com Cypress e versionamento com Git sob infraestrutura de CI/CD gerenciada pela AWS.
- Participação ativa em discussões técnicas e refinamentos para modernizar sistemas legados e aprimorar a experiência do usuário.`,
    },
    technician: {
      en: `- Built microfrontends with Angular, TypeScript, HTML, and CSS.
- Implemented regression test suites using Cypress to ensure application stability.`,
      pt: `- Construção de microfrontends com Angular, TypeScript, HTML e CSS.
- Implementação de suítes de testes de regressão com Cypress para garantir a estabilidade das aplicações.`,
    },
    intern: {
      en: `- Gained hands-on experience developing microfrontends using Angular, TypeScript, HTML, and CSS.`,
      pt: `- Experiência prática no desenvolvimento de microfrontends utilizando Angular, TypeScript, HTML e CSS.`,
    },
  };

  const charismaDescriptions: Record<Lang, string> = {
    en: `- Delivered full-cycle software development, managing everything from data modeling to implementing AI-driven solutions for internal process optimization.
- Applied Spec-Driven Development (SDD) using OpenSpec and Cursor to structure clear system specifications, accelerating full-stack feature delivery.
- Engineered full-stack applications (Node.js, Next.js, PostgreSQL) focused on performance and legacy system scalability.
- Applied Prompt Engineering to automate editorial workflows and structure unformatted data using AI.
- Built complex React dashboards integrating audit workflows and structured log monitoring.
- Managed modern infrastructure using Docker, Kubernetes, and CI/CD pipelines, alongside AWS storage and SSO security integrations.`,
    pt: `- Atuação no ciclo completo de software, desde a modelagem de dados até a implementação de soluções baseadas em IA para otimização de processos internos.
- Aplicação de Spec-Driven Development (SDD) com OpenSpec e Cursor para estruturar especificações claras de sistema, acelerando a entrega de funcionalidades full-stack.
- Desenvolvimento de aplicações Full Stack (Node.js, Next.js, PostgreSQL) com foco em performance e escalabilidade de sistemas legados.
- Aplicação de Prompt Engineering para automação de tarefas editoriais e estruturação de dados não formatados via IA.
- Construção de dashboards de alta complexidade com React, integrando fluxos de auditoria e monitoramento de logs.
- Gestão de infraestrutura com Docker, Kubernetes e CI/CD, além de integração de storage e segurança via AWS e SSO.`,
  };

  const aliceDescriptions: Record<Lang, string> = {
    en: `- Developed functional and high-performing frontend interfaces using Vue 3 and Jest for administrative member support systems.
- Collaborated on AI initiatives, integrating internal systems with OpenAI solutions to increase service scalability, agility, and efficiency.
- Ensured high code quality and test coverage aligned with business goals within a high-performing team.`,
    pt: `- Desenvolvimento de interfaces frontend funcionais e de alta performance utilizando Vue 3 e Jest para sistemas de atendimento administrativo de membros.
- Colaboração em iniciativas de IA, integrando sistemas internos com soluções da OpenAI para aumentar escalabilidade, agilidade e eficiência nos atendimentos.
- Garantia de alta qualidade de código e cobertura de testes alinhada aos objetivos estratégicos do negócio em um time de alto nível.`,
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
          description: aliceDescriptions,
        },
      ],
    },
    {
      company: "BRQ Digital Solutions",
      totalDuration: { en: '2 years 9 months', pt: '2 anos 9 meses' },
      positions: [
        {
          title: {
            en: "Desenvolvedora Front-End Jr [Allocated at Itaú]",
            pt: "Desenvolvedora Front-End Jr [Alocada no Itaú]",
          },
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
    "Next.js 16", "TypeScript", "Playwright", "Turso / SQLite", "Railway", "Resend", "Recharts", "Tailwind CSS"
  ];

  const coreSkills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Turso/SQLite"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-violet-100 dark:selection:bg-violet-900">
      {/* Header / Hero */}
      <header className="max-w-4xl mx-auto pt-14 pb-12 px-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden ring-2 ring-slate-200 dark:ring-slate-800 shrink-0 shadow-sm">
              <img 
                src="https://github.com/gabitomasini.png" 
                alt="Gabriela Tomasini" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Gabriela Tomasini
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-violet-600 dark:text-violet-400 font-semibold mt-0.5">
                {copy[lang].heroHeadline}
              </p>
            </div>
          </div>

          <div className="inline-flex rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-1 shrink-0 mt-1">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={[
                "px-3 py-1 text-xs font-medium rounded-full transition-colors",
                lang === 'en'
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
              ].join(" ")}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('pt')}
              className={[
                "px-3 py-1 text-xs font-medium rounded-full transition-colors",
                lang === 'pt'
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
              ].join(" ")}
              aria-pressed={lang === 'pt'}
            >
              PT
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {copy[lang].heroTagline}
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-normal pt-1">
            {copy[lang].metaLine}
          </p>
        </div>

        {/* Action Buttons: Bordered links */}
        <div className="flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-5 gap-y-3 pt-6">
          <a 
            href="mailto:gabriela_tomasini@hotmail.com" 
            className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl text-sm font-medium transition-all shadow-xs"
          >
            <Mail size={16} />
            <span>{copy[lang].contactButton}</span>
          </a>

          <a 
            href="https://github.com/gabitomasini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl text-sm font-medium transition-all shadow-xs"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/gabriela-tomasini-88276553/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl text-sm font-medium transition-all shadow-xs"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 rounded-xl text-sm font-medium transition-all shadow-xs"
          >
            <FileText size={16} />
            <span>{copy[lang].resumeButton}</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-12 md:space-y-14">
        {/* About */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
              {copy[lang].aboutTitle}
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{copy[lang].aboutText}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              {copy[lang].stackTitle}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {coreSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-medium text-slate-600 dark:text-slate-300">{copy[lang].secondaryStackPrefix}:</span>{" "}
              Vue 3, Angular, Jest, Cypress, Docker, AWS
            </p>
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
                            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                              {typeof pos.title === 'string' ? pos.title : pos.title[lang]}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{pos.employmentType[lang]}</p>
                          </div>
                          <p className="text-sm font-medium text-slate-500">{pos.period[lang]}</p>
                        </div>

                        <div className="mt-4 space-y-2.5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                          {pos.description[lang].split("\n").filter(Boolean).map((line, lineIndex) => {
                            const isBullet = line.trim().startsWith("- ");
                            const text = isBullet ? line.trim().slice(2) : line;
                            return isBullet ? (
                              <div key={`${lang}-${lineIndex}`} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0"></span>
                                <span className="flex-1">{text}</span>
                              </div>
                            ) : (
                              <p key={`${lang}-${lineIndex}`}>{text}</p>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
            {copy[lang].educationTitle}
          </h2>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-5 md:p-6 backdrop-blur-sm shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200/60 dark:border-violet-800/40 flex items-center justify-center shrink-0 text-violet-600 dark:text-violet-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {copy[lang].educationDegree}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    Universidade Anhembi Morumbi
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 shrink-0 self-start sm:self-center">
                2021 – 2024
              </span>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-4xl mx-auto px-6 py-14 border-t border-slate-200 dark:border-slate-800 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {copy[lang].ctaTitle}
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {copy[lang].ctaText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a 
              href="mailto:gabriela_tomasini@hotmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              <Mail size={16} />
              <span>{copy[lang].ctaButton}</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/gabriela-tomasini-88276553/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/gabitomasini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-medium transition-colors shadow-sm"
            >
              <Github size={16} />
              <span>GitHub</span>
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
