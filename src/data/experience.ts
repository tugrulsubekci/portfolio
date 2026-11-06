export interface Experience {
  period: string;
  title: string;
  company: string;
  url: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    period: 'OCT 2022 — APR 2025',
    title: 'Software Engineer',
    company: 'Sugar Technology',
    url: 'https://sugartech.io/',
    bullets: [
      'Built and maintained scalable, user-centric applications.',
      'Designed modular architectures for performance and flexibility.',
      'Collaborated across teams to deliver high-quality software.',
      'Applied design patterns to ensure clean, maintainable code.',
      'Diagnosed and resolved performance and usability issues.',
      'Developed internal APIs and integrated services.',
      'Analyzed data to debug and improve functionality.',
      'Proposed and prototyped technical solutions to complex problems.',
      'Participated in agile workflows and peer code reviews.',
    ],
  },
  {
    period: 'MAY 2022 — OCT 2022',
    title: 'Software Engineer',
    company: 'Self-employed',
    url: 'https://tugrulsubekci.itch.io/',
    bullets: [
      'Developed and published 7 mobile games, ensuring quality and platform compliance',
      'Implemented monetization, performance optimizations, and user engagement features',
      'Collaborated with artists; built dynamic gameplay systems (physics, AI, procedural content)',
    ],
  },
];
