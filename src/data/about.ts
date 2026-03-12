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

export interface SideQuest {
  id: number;
  text: string;
}

export const sideQuests: SideQuest[] = [
  {
    id: 1,
    text: "When I'm not crafting digital worlds, you can find me exploring the real one through traveling to any country that will give me a visa. It is important to go out and touch grass sometimes, but i am a nerd at heart, so i joined a sword fighting club instead. I hope it counts.",
  },
  {
    id: 2,
    text: "If i am being honest, I prefer enjoying other fantastical worlds from the comfort of my home. Whether it is the post apocalyptic scenescape of Horizon, the open fields bustling with monsters in the Witcher, or the rooftops of ancient Venice in Assassins Creed. All tickle my fancy. And when they don't, I am always up for a good book or a movie. I am a sucker for deep lore and engaging cinematography, so you KNOW Star Wars and LotR are always on repeat, plus anything Wes Anderson puts out.",
  },
  {
    id: 3,
    text: "Dungeons & Dragons is my favorite TTRPG and it often inspires my game narratives as well. I regularly participate in game jams to challenge my creativity and collaborate with my game dev friends on cool little projects. These rapid development cycles have taught me to think quickly and to work efficiently under pressure.",
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
