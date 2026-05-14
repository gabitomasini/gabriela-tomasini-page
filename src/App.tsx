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

  const copy: Record<Lang, { aboutTitle: string; aboutText: string; experienceTitle: string; stackTitle: string; ctaTitle: string; ctaText: string; ctaButton: string; contact: string; location: string; years: string; footer: string; }> = {
    en: {
      aboutTitle: 'About Me',
      aboutText:
        'Frontend Developer with nearly 5 years of experience, specializing in building modern and high-performance interfaces. I focus on delivering clean, testable, and scalable code, and I am currently seeking challenging opportunities in the international market.',
      experienceTitle: 'Professional Experience',
      stackTitle: 'Tech Stack',
      ctaTitle: "Let's build something amazing?",
      ctaText:
        "I am open to new opportunities and partnerships in international projects. If you are looking for a developer committed to quality, let's talk!",
      ctaButton: 'Get in touch',
      contact: 'Contact',
      location: 'São Paulo, Brazil',
      years: '5+ years of experience',
      footer: `© ${new Date().getFullYear()} Gabriela Tomasini. Built with React & Tailwind CSS.`,
    },
    pt: {
      aboutTitle: 'Sobre mim',
      aboutText:
        'Desenvolvedora Frontend com quase 5 anos de experiência, especializada em construir interfaces modernas e performáticas. Tenho foco em entregar código limpo, testável e escalável, e atualmente busco oportunidades desafiadoras no mercado internacional.',
      experienceTitle: 'Experiência profissional',
      stackTitle: 'Tecnologias',
      ctaTitle: 'Vamos construir algo incrível?',
      ctaText:
        'Estou aberta a novas oportunidades e parcerias em projetos internacionais. Se você procura uma desenvolvedora comprometida com qualidade, vamos conversar!',
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

  const experiences: Experience[] = [
    {
      company: "charisma business intelligence",
      totalDuration: { en: '1 year 2 months', pt: '1 ano 2 meses' },
      positions: [
        {
          title: "Fullstack Software Engineer",
          employmentType: { en: 'Full-time', pt: 'Tempo integral' },
          period: { en: 'Apr 2025 - Present · 1 year 2 months', pt: 'abr de 2025 - o momento · 1 ano 2 meses' },
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
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-sm"
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
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
            {copy[lang].aboutTitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{copy[lang].aboutText}</p>
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

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
            {copy[lang].stackTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium shadow-sm hover:border-violet-400 dark:hover:border-violet-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-violet-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-violet-200 dark:shadow-none">
          <h2 className="text-3xl font-bold mb-4">{copy[lang].ctaTitle}</h2>
          <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">{copy[lang].ctaText}</p>
          <a 
            href="mailto:gabriela_tomasini@hotmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 rounded-full font-bold hover:bg-violet-50 transition-colors shadow-lg"
          >
            {copy[lang].ctaButton}
            <ExternalLink size={20} />
          </a>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>{copy[lang].footer}</p>
      </footer>
    </div>
  );
}

export default App;
