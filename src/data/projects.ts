export interface Project {
    id: number;
    title: string;
    category: "Professional" | "Hobby";
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
  }
  
  export const projects: Project[] = [
    // Professional Projects
    {
      id: 1,
      title: "SpaceChef",
      category: "Professional",
      description: "An upcoming game from BlueGoo Games for space cowboy food enthusiasts.",
      technologies: ["Unity", "C#", "2D Ismetric"],
      imageUrl: "/placeholder-project.svg",
      link: "./app/projects/spacechef",
    },
    {
      id: 2,
      title: "ErgoGames",
      category: "Professional",
      description: "A series of Endless Runner games focused on health and fitness.",
      technologies: ["Node", "JavaScript", "ThreeJS", "React"],
      imageUrl: "/placeholder-project.svg",
      link: "./app/projects/ergogames",
    },
    // Qira - AHEAD Automotive GmbH

    // Hobby Projects
    {
      id: 3,
      title: "Who is Grandma?",
      category: "Hobby",
      description: "Entry for Global Game Jam 2022. The theme was 'Duality'",
      technologies: ["Unity Engine", "C#", "2D Platformer"],
      imageUrl: "/placeholder-project.svg",
      link: "./app/projects/who-is-grandma",
    },
    {
        id: 4,
        title: "The Root of All Evil",
        category: "Hobby",
        description: "Entry for Global Game Jam 2023. The theme was 'Roots'",
        technologies: ["Unity Engine", "C#", "2D Isometric"],
        imageUrl: "/placeholder-project.svg",
        link: "./app/projects/the-root-of-all-evil",
      },
      {
        id: 5,
        title: "Hooded Hooligans",
        category: "Hobby",
        description: "Entry for Global Game Jam 2024. The theme was 'Make Me Laugh'",
        technologies: ["Unreal Engine", "Blueprints", "3D Platformer"],
        imageUrl: "/placeholder-project.svg",
        link: "./app/projects/hooded-hooligans",
      },
      {
        id: 6,
        title: "Lose-it Dreaming",
        category: "Hobby",
        description: "Entry for Global Game Jam 2025. The theme was 'Bubbles'",
        technologies: ["Unreal Engine", "Blueprints", "3D Isometric", "CI/CD with Github Actions"],
        imageUrl: "/placeholder-project.svg",
        link: "./app/projects/lose-it-dreaming",
      },
  ];  