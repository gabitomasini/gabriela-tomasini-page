import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generatePDF() {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - 16) {
      doc.addPage();
      y = 18;
    }
  };

  const addSectionTitle = (title) => {
    checkPageBreak(12);
    y += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(17, 24, 39); // #111827
    doc.text(title.toUpperCase(), margin, y);
    y += 1.8;
    doc.setDrawColor(209, 213, 219); // #d1d5db
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentWidth, y);
    y += 4;
  };

  // HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(17, 24, 39);
  doc.text('Gabriela Tomasini', margin, y);
  y += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81); // #374151
  doc.text('Frontend Engineer | São Paulo, Brazil', margin, y);
  y += 4.5;

  doc.setFontSize(9);
  doc.setTextColor(75, 85, 99); // #4b5563
  doc.text(
    'Email: gabriela_tomasini@hotmail.com  |  LinkedIn: linkedin.com/in/gabriela-tomasini-88276553  |  GitHub: github.com/gabitomasini',
    margin,
    y
  );
  y += 5;

  // PROFESSIONAL SUMMARY
  addSectionTitle('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(31, 41, 55);

  const summaryText =
    'Frontend Engineer with 5 years of experience building web applications and developer tools. I bridge the gap between design concepts and production code—specializing in server-rendered applications, Next.js, TypeScript, Tailwind CSS, and clean semantic HTML. Adopting Spec-Driven Development (SDD) with AI-assisted tools (Cursor, OpenSpec), I accelerate feature prototyping while maintaining full ownership of code quality, performance, and UI polish for complex data interfaces.';

  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4 + 2;

  // CORE SKILLS & TECH STACK
  addSectionTitle('Core Skills & Tech Stack');
  const skills = [
    {
      category: 'Core Stack',
      items: 'React, Next.js, TypeScript, Tailwind CSS, Node.js, Turso/SQLite, PostgreSQL',
    },
    {
      category: 'Architecture & Methodology',
      items:
        'Spec-Driven Development (SDD), AI-Assisted Workflows (Cursor, OpenSpec), REST APIs, Server-Side Rendering (SSR)',
    },
    {
      category: 'Quality & Automation',
      items: 'Playwright, Jest, Cypress, React Testing Library, CI/CD pipelines, Git/GitHub, Docker',
    },
    {
      category: 'UI Engineering',
      items: 'UI/UX Sensibility, Responsive Web Design, Component Systems, Micro-interactions',
    },
  ];

  doc.setFontSize(8.8);
  skills.forEach((skill) => {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(17, 24, 39);
    const prefix = `• ${skill.category}: `;
    doc.text(prefix, margin, y);
    const prefixWidth = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(55, 65, 81);
    const splitItems = doc.splitTextToSize(skill.items, contentWidth - prefixWidth);
    doc.text(splitItems, margin + prefixWidth, y);
    y += splitItems.length * 3.8 + 0.8;
  });
  y += 1.5;

  // WORK EXPERIENCE
  addSectionTitle('Work Experience');

  const experiences = [
    {
      title: 'Fullstack Software Engineer',
      company: 'Charisma Business Intelligence',
      period: 'Apr 2025 – Present | São Paulo, Brazil',
      bullets: [
        'Delivered full-cycle software development, managing everything from data modeling to implementing AI-driven solutions for internal process optimization.',
        'Applied Spec-Driven Development (SDD) using OpenSpec and Cursor to structure clear system specifications, accelerating full-stack feature delivery.',
        'Engineered full-stack applications (Node.js, Next.js, PostgreSQL) focused on performance and legacy system scalability.',
        'Applied Prompt Engineering to automate editorial workflows and structure unformatted data using AI.',
        'Built complex React dashboards integrating audit workflows and structured log monitoring.',
        'Managed modern infrastructure using Docker, Kubernetes, and CI/CD pipelines, alongside AWS storage and SSO security integrations.',
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Alice',
      period: 'Jun 2024 – Dec 2024 | São Paulo, Brazil',
      bullets: [
        'Developed responsive, high-performance web applications using Vue.js and modern frontend tooling.',
        'Collaborated closely with product designers to implement pixel-perfect user interfaces and smooth user journeys.',
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'BRQ / Itaú Unibanco',
      period: 'Sep 2021 – May 2024 | São Paulo, Brazil',
      bullets: [
        'Built scalable enterprise web interfaces using Angular, adhering to strict design system guidelines and security standards.',
        'Developed microfrontends using Angular, TypeScript/JavaScript, HTML, CSS, and Voxel (Itaú’s design system).',
        'Implemented unit tests with Jest, end-to-end testing with Cypress, and versioning with Git under AWS-managed CI/CD infrastructure.',
      ],
    },
  ];

  experiences.forEach((exp) => {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(17, 24, 39);
    doc.text(`${exp.company} — ${exp.title}`, margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(107, 114, 128); // #6b7280
    doc.text(exp.period, margin, y);
    y += 3.8;

    doc.setFontSize(8.6);
    doc.setTextColor(31, 41, 55);
    exp.bullets.forEach((bullet) => {
      checkPageBreak(8);
      const bulletPrefix = '• ';
      const bulletText = doc.splitTextToSize(bullet, contentWidth - 4);
      doc.text(bulletPrefix, margin, y);
      doc.text(bulletText, margin + 4, y);
      y += bulletText.length * 3.7 + 0.8;
    });
    y += 2.5;
  });

  // FEATURED PROJECTS
  addSectionTitle('Featured Projects');
  checkPageBreak(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text('BipFly — Fullstack Flight Tracker Application', margin, y);
  y += 4;

  const projectBullets = [
    'Fullstack application for automated, continuous flight fare tracking on Google Flights.',
    'Features a resilient Playwright scraper orchestrated with an async mutex lock to prevent memory exhaustion in container environments.',
    'Utilizes hybrid LibSQL persistence (local SQLite / Turso Cloud) and Recharts for price trend visualizations.',
    'Engineered using Spec-Driven Development (SDD) with OpenSpec and Cursor for rapid, highly-structured end-to-end iterations.',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.6);
  doc.setTextColor(31, 41, 55);
  projectBullets.forEach((bullet) => {
    checkPageBreak(8);
    const bulletPrefix = '• ';
    const bulletText = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(bulletPrefix, margin, y);
    doc.text(bulletText, margin + 4, y);
    y += bulletText.length * 3.7 + 0.8;
  });
  y += 2.5;

  // EDUCATION
  addSectionTitle('Education');
  checkPageBreak(12);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text('Associate Degree in Systems Analysis and Development', margin, y);
  y += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(75, 85, 99);
  doc.text('Universidade Anhembi Morumbi | 2021 – 2024', margin, y);

  const publicDir = path.resolve(__dirname, '../public');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(path.join(publicDir, 'Gabriela_Tomasini_Frontend_Engineer_CV.pdf'), buffer);
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), buffer);
  console.log('Resume PDFs generated successfully!');
}

generatePDF();
