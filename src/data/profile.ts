/** A run of plain text, or an inline link inside a paragraph. */
export type RichTextSegment = string | { text: string; href: string; external?: boolean };
export type RichTextParagraph = RichTextSegment[];

export const profile = {
  name: 'Tugrul Subekci',
  title: 'Software Engineer',
  bio: 'Designing systems that run reliably at scale. Computer Science MSc with distinction.',
};

export const aboutParagraphs: RichTextParagraph[] = [
  [
    "I'm a software engineer with nearly three years of experience building and operating production-grade systems. I enjoy designing scalable architectures, shipping real-time features, and ensuring that what goes to production is reliable, observable, and maintainable. I'm particularly motivated by problems at the intersection of system design, performance, and clean API architecture.",
  ],
  [
    'At ',
    { text: 'Sugar Technology', href: 'https://sugartech.io/' },
    ', I joined as one of five engineers and helped scale the company to twenty-five people. I contributed to the development and operation of ',
    { text: 'RapidRender', href: 'https://rapidrender.app/' },
    ', a distributed cloud-rendering platform used by more than ten companies worldwide. I built and maintained over one hundred production services, designed and optimized large database schemas, improved asynchronous processing pipelines, and automated deployments in the cloud. During this time, the product sold over 2,000 licenses globally, and I was directly involved in both its technical evolution and commercial growth.',
  ],
  [
    'I recently completed an MSc in Computer Science with Distinction at the ',
    {
      text: 'University of Greenwich',
      href: 'https://www.gre.ac.uk/postgraduate-courses/engsci/computer-science-msc',
      external: true,
    },
    '. My studies focused on distributed systems, parallel computing, databases, and cybersecurity. For my dissertation, I designed and implemented a ',
    {
      text: 'machine learning–based image anonymization system',
      href: 'https://youtu.be/RCVvqtBqA_8?si=eyY8jnFRV2xe23vF',
    },
    ' that detects and obscures faces and license plates, combining deep learning models with a full-stack, cloud-deployed application.',
  ],
  [
    'Earlier in my journey, I built and shipped multiple interactive applications independently, experimenting with real-time systems, monetization, and user-driven iteration. These experiences shaped how I approach engineering: move fast, measure impact, and continuously refine.',
  ],
  [
    "I'm currently interested in backend, full-stack, and ML-adjacent roles where I can combine production engineering experience with applied machine learning. Outside of work, I'm usually cycling around London, exploring startup ideas, or building side projects that blend AI with interactive systems.",
  ],
];
