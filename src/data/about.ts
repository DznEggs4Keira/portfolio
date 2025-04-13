export interface SkillStack {
  title: string;
  tags: string[];
}

export const skillStack: SkillStack[] = [
  {
    title: "Tech Skills",
    tags: [
      "Unity Engine",
      "Unreal Engine",
      "C#",
      "C++",
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "ThreeJS",
      "Game Design",
      "Game Mechanics",
      "Narrative Design",
      "Level Design",
    ],
  },
  {
    title: "Soft Skills",
    tags: [
      "Team Leadership",
      "Project Management",
      "Communication",
      "Problem Solving",
      "Collaboration",
      "Adaptability",
      "Vibe Coding",
    ],
  },
];

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Junior Software Developer at AHEAD Automotive GmbH",
    description:
      "Working on Qira, a AI Repair assistant for mechanics. Developing features and improving user experience. Also provide technical support for company software (Google Workspace, CRM, etc.).",
  },
  {
    id: 2,
    year: "2022 - 2024",
    title: "Internship Games Programmer at Ergofox GmbH",
    description:
      "Created several prototypes exploring different genres and mechanics for Ergogames, a subset of serious games focused on health and preventive care.",
  },
  {
    id: 3,
    year: "2021 - 2024",
    title: "Freelance Game Developer at BlueGoo Games",
    description:
      "Worked on SpaceChef, an upcoming space exploring, cooking game with a twist. Developed core gameplay mechanics and collaborated with artists to create engaging environments.",
  },
  {
    id: 4,
    year: "2019 - 2021",
    title: "Games Programming Exploration",
    description:
      "Started taking online courses to further hone my skills in the arts of videogame programming. Explored various game engines and programming languages.",
  },
  {
    id: 5,
    year: "2018 - 2019",
    title: "Master's Degree in Computer Games Technology at Abertay University",
    description:
      "Graduated with merit. Focused on game development, programming, and design. Developed a strong foundation in game mechanics and narrative design.",
  },
  {
    id: 6,
    year: "2015 - 2018",
    title: "Bachelor's Degree in Computer Science at Mazoon University",
    description:
      "Graduated with distinction. Studied computer science fundamentals, programming languages, and software development.",
  },
];
