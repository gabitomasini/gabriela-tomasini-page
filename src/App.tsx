import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  const experiences = [
    {
      company: "Charisma",
      role: "Senior Frontend Developer",
      period: "2024 - Present",
      description: "Leading frontend initiatives and developing high-performance web applications. Working with modern React patterns and ensuring high-quality user experiences in a fast-paced environment."
    },
    {
      company: "Alice Saúde",
      role: "Frontend Developer",
      period: "2023 - 2024",
      description: "Contributed to the development of health-tech solutions, focusing on building accessible and scalable interfaces using React and TypeScript. Collaborated with cross-functional teams to deliver impactful features."
    },
    {
      company: "BRQ Digital Solutions",
      role: "Senior Frontend Developer",
      period: "2021 - 2023",
      description: "Built complex applications using React, TypeScript, and micro-frontends for major financial sector clients. Focused on performance optimization and software engineering best practices."
    },
    {
      company: "Freelance / Personal Projects",
      role: "Frontend Developer",
      period: "2019 - 2021",
      description: "Created responsive and intuitive interfaces for various clients. Experience with HTML5, CSS3, JavaScript (ES6+), and REST API integration."
    }
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Next.js", "Redux / Context API", "Styled Components", 
    "Jest / RTL", "Git / GitHub", "Agile / Scrum"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Header / Hero */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-xl">
              <img 
                src="https://github.com/gabitomasini.png" 
                alt="Gabriela Tomasini" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-lg shadow-lg">
              <Code2 size={20} />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Gabriela Tomasini
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              Senior Frontend Developer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} />
                <span>São Paulo, Brazil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase size={18} />
                <span>5+ years of experience</span>
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
            className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:gabriela.tomasini@example.com" 
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-sm"
          >
            <Mail size={18} />
            <span>Contact</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* About */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Frontend Developer with nearly 5 years of experience, specializing in building modern and high-performance interfaces. 
            I have solid expertise in the React and TypeScript ecosystem, focused on delivering clean, testable, and scalable code. 
            Currently seeking challenging opportunities in the international market, where I can apply my technical knowledge 
            and collaborate with global teams to create high-impact digital products.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-600 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-200 dark:shadow-none">
          <h2 className="text-3xl font-bold mb-4">Let's build something amazing?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            I am open to new opportunities and partnerships in international projects. 
            If you are looking for a frontend developer committed to quality, let's talk!
          </p>
          <a 
            href="mailto:gabriela.tomasini@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in touch
            <ExternalLink size={20} />
          </a>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Gabriela Tomasini. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
