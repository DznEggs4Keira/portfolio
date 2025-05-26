export interface Project {
  id: number;
  title: string;
  slug?: string;
  category: "Professional" | "Hobby" | "Student";
  description: string;
  fullDescription?: string;
  technologies: string[];
  cardUrl: string;
  videoUrl?: string;
  imageUrl?: string;
  galleryImages?: string[];
  links?: {
    official?: string;
    itch?: string;
    github?: string;
  };
  features?: string[];
  challenges?: string;
  learnings?: string;
  webglEnabled?: boolean;
  webglUrl?: string;
}

export const projects: Project[] = [
  // Professional Projects
  {
    id: 5,
    title: "SpaceChef",
    slug: "spacechef",
    category: "Professional",
    description: "An upcoming game from BlueGoo Games for space cowboy food enthusiasts.",
    fullDescription: "SpaceChef is an innovative cooking simulation game set in the far reaches of the galaxy. As the head chef aboard the interstellar cruise ship 'Gastronaut', players must prepare exotic dishes from alien ingredients to satisfy the diverse palates of passengers from across the universe.\n\nThe game features a unique 2D isometric kitchen environment with physics-based cooking mechanics. I worked as part of the BlueGoo Games team to develop core gameplay systems, including the ingredient interaction system and recipe progression mechanics.",
    technologies: ["Unity", "C#", "2D Isometric", "Shader Graph", "Cinemachine"],
    cardUrl: "/spacechef/spacechef-card.png",
    videoUrl: "/spacechef/spacechef-video.mp4",
    links: {
      official: "https://www.spacechefgame.com/",
    },
    features: [
      "Dynamic cooking system with realistic ingredient interactions",
      "Over 50 unique alien ingredients with special properties",
      "Procedurally generated customer requests based on species preferences",
      "Time management gameplay with increasing complexity"
    ],
    challenges: "The most challenging aspect was creating a convincing physics system for the cooking mechanics that was both fun and intuitive. We had to strike a balance between realism and playability, especially when simulating how exotic alien ingredients would behave when combined.",
    learnings: "Working on SpaceChef improved my skills in Unity's physics system and taught me valuable lessons about gameplay balancing. I also gained experience in collaborative game development within a professional studio environment.",
    webglEnabled: false,
    webglUrl: ""
  },
  {
    id: 6,
    title: "ErgoGames",
    slug: "ergogames",
    category: "Professional",
    description: "A series of Endless Runner games focused on health and fitness.",
    fullDescription: "ErgoGames is a collection of health-focused endless runner games designed to make physical therapy and fitness more engaging. Developed for Ergofox GmbH, these games use motion tracking to turn therapeutic exercises into gameplay mechanics.\n\nThe suite includes several themed runners, each targeting different muscle groups and movement patterns. As players perform their prescribed exercises, their movements control the game character, making therapy sessions more enjoyable and increasing adherence to treatment plans.",
    technologies: ["Node", "JavaScript", "ThreeJS", "React", "Motion Tracking API"],
    cardUrl: "/ergo-games/ergogames-card.svg",
    imageUrl: "/ergo-games/ergogames-image.gif",
    links: {
      official: "https://ergofox.me/de/Ergogames.html",
    },
    features: [
      "Real-time motion tracking integration with browser-based games",
      "Customizable difficulty levels based on patient capabilities",
      "Analytics dashboard for therapists to track patient progress",
      "Multiple game themes to maintain patient engagement"
    ],
    challenges: "The primary challenge was ensuring the motion tracking was both accurate enough for therapeutic value and forgiving enough to be enjoyable. We also had to optimize the ThreeJS rendering to perform well on a variety of devices, including tablets used in clinical settings.",
    learnings: "This project deepened my understanding of 3D web technologies and the integration of physical inputs with digital experiences. I also gained valuable insights into developing games for healthcare applications, including accessibility considerations and clinical efficacy requirements.",
    webglEnabled: false,
    webglUrl: ""
  },
  // Hobby Projects
  {
    id: 1,
    title: "Who is Grandma?",
    slug: "who-is-grandma",
    category: "Hobby",
    description: "Entry for Global Game Jam 2022. The theme was 'Duality'",
    fullDescription: "Who is Grandma? was my submission for the Global Game Jam 2022, exploring the theme of 'Duality'. This 2D platformer tells the story of a grandchild who discovers their sweet, cookie-baking grandmother has a secret past as a ninja assassin.\n\nThe gameplay switches between two modes: 'Grandma Mode' where the player moves slowly but can bake cookies to charm enemies, and 'Ninja Mode' where the player can perform acrobatic moves and takedowns. Players must strategically switch between these dual identities to navigate levels and uncover the full story.",
    technologies: ["Unity Engine", "C#", "2D Platformer", "Cinemachine", "Spine Animation"],
    cardUrl: "/who-is-grandma/who-is-grandma-card.png",
    imageUrl: "/who-is-grandma/ggj-2022.png",
    galleryImages: [
      "/who-is-grandma/grandma-mode.jpg",
      "/who-is-grandma/ninja-mode.jpg",
      "/who-is-grandma/boss-fight.jpg",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/who-is-grandma",
      github: "https://github.com/DznEggs4Keira/GGJ-2022",
    },
    features: [
      "Character mode-switching mechanic with distinct abilities",
      "Hand-drawn art style with fluid character animations",
      "Narrative-driven level design with hidden collectibles",
      "Original soundtrack that changes based on character mode"
    ],
    challenges: "The biggest challenge was implementing the seamless transition between the two character modes while maintaining consistent physics and collision detection. I also had to carefully balance the abilities of each mode to ensure both were useful throughout the game.",
    learnings: "This jam taught me a lot about character controller design and state management in Unity. I also improved my skills in game feel and juiciness, adding small details like screen shake and particle effects that make the game more satisfying to play.",
    webglEnabled: true,
    webglUrl: "/webgl/who-is-grandma/index.html"
  },
  {
    id: 2,
    title: "The Root of All Evil",
    slug: "the-root-of-all-evil",
    category: "Hobby",
    description: "Entry for Global Game Jam 2023. The theme was 'Roots'",
    fullDescription: "The Root of All Evil was my creation for the Global Game Jam 2023, inspired by the theme 'Roots'. This isometric puzzle game casts players as a sentient plant seeking revenge on the humans who destroyed its forest.\n\nPlayers control a network of roots that can grow beneath the soil, emerging to ensnare humans or interact with the environment. The game combines stealth and puzzle elements as players must strategically plan their root network to overcome obstacles and complete objectives without being detected by humans with plant-killing chemicals.",
    technologies: ["Unity Engine", "C#", "2D Isometric", "Shader Graph", "Pathfinding"],
    cardUrl: "/root-of-all-evil/root-of-all-evil-card.png",
    videoUrl: "https://www.youtube.com/watch?v=RlfU8akPOa0&feature=youtu.be",
    imageUrl: "/ggj-2023.png",
    galleryImages: [
      "https://youtu.be/U0EUTLDtEEg",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/the-root-of-all-evil",
      github: "https://github.com/DznEggs4Keira/GGJ-2023",
    },
    features: [
      "Dynamic root growth system with branching mechanics",
      "Resource management (water and nutrients)",
      "Stealth-based gameplay with vision cones and detection meters",
      "Environmental puzzles requiring creative use of root abilities"
    ],
    challenges: "Creating a convincing root growth system that felt organic while still being precisely controllable was the main technical challenge. I developed a custom spline-based system that allows roots to grow naturally around obstacles while following player input.",
    learnings: "This project improved my skills with procedural generation and AI behavior programming. I also learned valuable lessons about communicating game mechanics visually, as the underground/aboveground dichotomy required clear visual language.",
    webglEnabled: true,
    webglUrl: "/webgl/the-root-of-all-evil/index.html"
  },
  {
    id: 3,
    title: "Hooded Hooligans",
    slug: "hooded-hooligans",
    category: "Hobby",
    description: "Entry for Global Game Jam 2024. The theme was 'Make Me Laugh'",
    fullDescription: "Hooded Hooligans was my humorous entry for the Global Game Jam 2024, addressing the theme 'Make Me Laugh'. This 3D platformer comedy game follows a group of mischievous teenagers in hoodies who must complete pranks around their neighborhood without being caught.\n\nThe game features physics-based gameplay where players can set up elaborate Rube Goldberg-like pranks using everyday objects. The more creative and ridiculous the prank execution, the higher the score. Players must balance the complexity of their pranks with the risk of being spotted by patrolling adults.",
    technologies: ["Unreal Engine", "Blueprints", "3D Platformer", "Physics System", "AI Behavior Trees"],
    cardUrl: "/hooded-hooligans/hooded-hooligans-card.png",
    videoUrl: "/hooded-hooligans/hooded-hooligans-video.mp4",
    galleryImages: [
      "/projects/hooded-hooligans/prank-setup.jpg",
      "/projects/hooded-hooligans/neighborhood.jpg",
      "/projects/hooded-hooligans/character-customization.jpg",
    ],
    links: {
      itch: "https://globalgamejam.org/2024/games/hooded-hooligans-2",
      github: "https://github.com/DznEggs4Keira/GGJ-2024",
    },
    features: [
      "Physics-based prank construction system",
      "Stealth mechanics with noise detection and line of sight",
      "Character customization with unlockable hoodie designs",
      "Cooperative multiplayer mode for team pranking"
    ],
    challenges: "The most difficult aspect was creating a physics system that was chaotic enough to create funny moments but predictable enough that players could plan their pranks. Finding this balance required extensive playtesting and fine-tuning of the physics parameters.",
    learnings: "This project significantly improved my Unreal Engine skills, particularly with Blueprint visual scripting and the physics engine. I also learned techniques for creating comedic timing in games and how to design systems that encourage player creativity.",
    webglEnabled: true,
    webglUrl: "/webgl/hooded-hooligans/index.html"
  },
  {
    id: 4,
    title: "Lose-it Dreaming",
    slug: "lose-it-dreaming",
    category: "Hobby",
    description: "Entry for Global Game Jam 2025. The theme was 'Bubbles'",
    fullDescription: "Lose-it Dreaming was my submission for the Global Game Jam 2025, where the theme was 'Bubbles'. In this surreal adventure game, players navigate through a dreamscape where thoughts and memories appear as bubbles that can be collected, combined, or popped to solve puzzles and progress through the narrative.\n\nThe game features an isometric view with a unique art style that blends watercolor aesthetics with 3D environments. I developed this game solo over the 48-hour jam period, focusing on creating an atmospheric experience with intuitive gameplay mechanics.",
    technologies: ["Unreal Engine", "Blueprints", "3D Isometric", "CI/CD with Github Actions"],
    cardUrl: "/lose-it-dreaming/lose-it-dreaming-card.png",
    imageUrl: "/ggj-2025.png",
    galleryImages: [
      "/projects/lose-it-dreaming/screenshot1.jpg",
      "/projects/lose-it-dreaming/screenshot2.jpg",
      "/projects/lose-it-dreaming/screenshot3.jpg",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/lose-it-dreaming",
      github: "https://github.com/DznEggs4Keira/GGJ-2025",
    },
    features: [
      "Dream-like isometric environments with dynamic lighting",
      "Bubble physics system for puzzle mechanics",
      "Original soundtrack that evolves based on player actions",
      "Multiple endings based on which memories are preserved"
    ],
    challenges: "The biggest challenge was implementing the bubble physics in Unreal Engine while maintaining good performance. I had to optimize the collision system and create a custom shader for the bubble appearance that wouldn't be too resource-intensive.",
    learnings: "This project taught me a lot about rapid prototyping and scope management in game jams. I also improved my skills with Unreal's material editor and gained experience with procedural audio generation.",
    webglEnabled: true,
    webglUrl: "/webgl/lose-it-dreaming/index.html"
  }
]; 