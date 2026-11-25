export const Bio = {
  name: "Nirupma Singh",
  roles: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  description:
    "Frontend Developer with 1.5 years of experience building responsive web apps with React, Next.js, and JavaScript. I turn Figma designs into clear, reusable interfaces, with a focus on performance and a smooth experience across devices.",
  github: "",
  resume: `${process.env.PUBLIC_URL}/Nirupma_Singh_Resume.pdf`,
  linkedin: "https://www.linkedin.com/in/nirupma-singh-230554317/",
  email: "nirupmas910@gmail.com",
};

const devicon = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${name}/${name}-${variant}.svg`;

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript (ES6+)", image: devicon("javascript") },
      { name: "HTML5", image: devicon("html5") },
      { name: "CSS3", image: devicon("css3") },
      { name: "React", image: devicon("react") },
      { name: "Next.js", image: devicon("nextjs", "original-wordmark") },
      { name: "Zustand" },
      { name: "Bootstrap", image: devicon("bootstrap") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C#", image: devicon("csharp") },
      { name: "ASP.NET", image: devicon("dotnetcore") },
      { name: "SQL" },
      { name: "REST API Integration" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", image: devicon("git") },
      { name: "GitHub", image: devicon("github", "original") },
      { name: "Claude Code" },
      { name: "Cursor AI" },
    ],
  },
  {
    title: "Practices",
    skills: [
      { name: "Responsive Web Design" },
      { name: "Component-Based Architecture" },
      { name: "SEO Optimization" },
      { name: "Cross-Browser Compatibility" },
      { name: "Performance Optimization" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer",
    company: "Rirabh Consulting Services LLP",
    location: "Noida, Uttar Pradesh, India",
    date: "Apr 2025 - Present",
    desc: [
      "Building responsive, production web applications with React, Next.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Turn Figma designs into pixel-accurate, responsive interfaces and reusable components.",
      "Contribute to the Ringopus React interface, including reusable UI, Zustand-managed live call state, and REST API integration.",
      "Improve page performance and SEO, and maintain consistent behavior across browsers and screen sizes.",
      "Work with designers and backend developers to deliver and refine production features.",
    ],
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Zustand",
      "Bootstrap",
      "REST APIs",
      "Responsive Design",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Galgotias University",
    date: "2023 - 2025",
    grade: "",
    desc: "Master of Computer Applications (MCA).",
    degree: "Master of Computer Applications (MCA)",
  },
  {
    id: 1,
    school: "R.N. College, Hajipur",
    date: "2019 - 2022",
    grade: "",
    desc: "Bachelor of Computer Applications (BCA).",
    degree: "Bachelor of Computer Applications (BCA)",
  },
];

export const certifications = [
  {
    title: "Web Development, C/C++, Java Programming, and Data Structures & Algorithms",
    issuer: "Magneto Software Pvt. Ltd.",
  },
  {
    title: "Smart India Hackathon",
    issuer: "Certificate of Participation",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ringopus — Business VoIP Softphone",
    visual: "softphone",
    date: "Apr 2025 - Present",
    description:
      "A business calling interface with a dialer, incoming and outgoing call screens, and in-call controls for hold, mute, and transfer. Zustand keeps the active call and status in sync across screens, while REST API integration handles sign-in and user data.",
    tags: ["React", "JavaScript", "Zustand", "REST APIs", "Responsive UI"],
    category: "Web & desktop app",
  },
  {
    id: 1,
    title: "CallerSpot — Next.js Web Application",
    visual: "dashboard",
    description:
      "A scalable Next.js application built with reusable components and responsive layouts. Figma designs are translated into consistent interfaces, with dynamic routing and page rendering tuned for speed and SEO.",
    tags: ["Next.js", "JavaScript", "HTML", "CSS", "Bootstrap", "SEO"],
    category: "Web application",
  },
  {
    id: 2,
    title: "Online Flight Reservation",
    visual: "voip",
    description:
      "A responsive flight booking website with a clear search and reservation flow. Reusable interface elements, consistent styling, and careful page optimization support a smooth experience across screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    category: "Web application",
  },
  {
    id: 3,
    title: "CruiseBite — Travel Website",
    visual: "support",
    description:
      "A responsive travel website with interactive interface elements and mobile-friendly layouts. Built with attention to usability, accessibility, cross-browser behavior, and page speed.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Accessibility"],
    category: "Web application",
  },
];
