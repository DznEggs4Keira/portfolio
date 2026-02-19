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
    fullDescription: "SpaceChef is an innovative cooking simulation game set in the far reaches of the galaxy. Players must prepare exotic dishes from alien ingredients to satisfy the diverse palates of their customers from across the universe.\n\nThe game features an isometric environment with lush and rich planets to explore, NPCs to speak with. I worked as part of the BlueGoo Games team to develop core gameplay systems, including the Weapons inception and implementation and Level design",
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
    challenges: "",
    learnings: "",
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
    fullDescription: "Who is Grandma? was my submission for the Global Game Jam 2022, exploring the theme of 'Duality'. This 2D platformer tells the story of a grandchild who discovers their sweet, cookie-baking grandmother has a secret past as a RAVE QUEEN.",
    technologies: ["Unity Engine", "C#", "2D Platformer"],
    cardUrl: "/who-is-grandma/who-is-grandma-card.png",
    videoUrl: "https://www.youtube.com/watch?v=h5oIhIHBypA",
    galleryImages: [
      "/who-is-grandma/WiG_1.png",
      "/who-is-grandma/WiG_2.png",
      "/who-is-grandma/WiG_3.png",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/who-is-grandma",
      github: "https://github.com/DznEggs4Keira/GGJ-2022",
    },
    features: [
      "Hand-drawn art style",
      "Narrative-driven level design with hidden collectibles",
    ],
    challenges: "This was the first game jam that i paticipated in. The main challenge was definitely allocating time and getting everything done in the very limited development window.",
    learnings: "It helped me learn how to scope a project effectively and prioritize features that deliver the most impact in a short time frame.",
    webglEnabled: false,
    webglUrl: ""
  },
  {
    id: 2,
    title: "The Root of All Evil",
    slug: "the-root-of-all-evil",
    category: "Hobby",
    description: "Entry for Global Game Jam 2023. The theme was 'Roots'",
    fullDescription: "The Root of All Evil was my creation for the Global Game Jam 2023, inspired by the theme 'Roots'. This isometric puzzle game casts players as a sentient plant seeking revenge on the mycelium infesting the forest.",
    technologies: ["Unity Engine", "C#", "2D Isometric"],
    cardUrl: "/root-of-all-evil/root-of-all-evil-card.png",
    videoUrl: "https://www.youtube.com/watch?v=RlfU8akPOa0&feature=youtu.be",
    imageUrl: "/ggj-2023.png",
    galleryImages: [
      "/root-of-all-evil/RoaE_1.png",
      "/root-of-all-evil/RoaE_2.png",
      "/root-of-all-evil/RoaE_3.png",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/the-root-of-all-evil",
      github: "https://github.com/DznEggs4Keira/GGJ-2023",
    },
    features: [
      "Environmental puzzles requiring the player to find and destroy all the mycelium growth in the level"
    ],
    challenges: "I was the only developer on this project adept in Unity, so I had to find the right tasks to delegate which could be picked up by others and attempted. It was challenging to guage the difficulty of tasks from that perspective.",
    learnings: "I had a really nice time learning how to create enemy NPCs which followed a simple AI (Finite State Machine)",
    webglEnabled: false,
    webglUrl: ""
  },
  {
    id: 3,
    title: "Hooded Hooligans",
    slug: "hooded-hooligans",
    category: "Hobby",
    description: "Entry for Global Game Jam 2024. The theme was 'Make Me Laugh'",
    fullDescription: "Hooded Hooligans was my humorous entry for the Global Game Jam 2024, addressing the theme 'Make Me Laugh'. This 3D platformer comedy game follows a group of mischievous goblins disguised as one big human who must manage to collect enough gold coins to pay for a tankard of beer, and not get caught by the bartender.",
    technologies: ["Unreal Engine", "Blueprints", "3D Platformer"],
    cardUrl: "/hooded-hooligans/hooded-hooligans-card.png",
    videoUrl: "https://www.youtube.com/watch?v=PUp003NmPnI",
    galleryImages: [
      "/hooded-hooligans/HH_1.jpg",
      "/hooded-hooligans/HH_2.jpg",
      "/hooded-hooligans/HH_3.jpg",
      "/hooded-hooligans/HH_4.jpg",
    ],
    links: {
      itch: "https://globalgamejam.org/2024/games/hooded-hooligans-2",
      github: "https://github.com/DznEggs4Keira/GGJ-2024",
    },
    features: [
      "Cooperative multiplayer"
    ],
    challenges: "Our plan was quite ambitious with this game and it was really challening to get everything doen in the limited time.",
    learnings: "You can really stumble upon very unique and creative ways to circumvent your limitations. for example, we didn't have a 3D animator, so we used different face sprites to animate the goblins!",
    webglEnabled: false,
    webglUrl: ""
  },
  {
    id: 4,
    title: "Lose-it Dreaming",
    slug: "lose-it-dreaming",
    category: "Hobby",
    description: "Entry for Global Game Jam 2025. The theme was 'Bubbles'",
    fullDescription: "Lose-it Dreaming was my submission for the Global Game Jam 2025, where the theme was 'Bubbles'. It is a surreal 3D Isometric environment where players play against one another to collect as many dreams (bubbles) and trap the other players.",
    technologies: ["Unreal Engine", "Blueprints", "3D Isometric", "CI/CD with Github Actions"],
    cardUrl: "/lose-it-dreaming/lose-it-dreaming-card.png",
    imageUrl: "/lose-it-dreaming/LD_1.png",
    galleryImages: [
      "/lose-it-dreaming/LD_4.png",
      "/lose-it-dreaming/LD_3.png",
      "/lose-it-dreaming/LD_2.png",
      "/lose-it-dreaming/LD_5.png",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/lose-it-dreaming",
      github: "https://github.com/DznEggs4Keira/GGJ-2025",
    },
    features: [
      "Dream-like isometric environments with dynamic lighting",
      "Coop PVP mode",
    ],
    challenges: "We wanted to make a 3D experience but we didn't have enough 3D artists wo we had to find techniques to give depth to 2D sprites.",
    learnings: "It is quite uncommon to have a CI/CD pipeline for game jams but we wanted to try it out anyway. it was really awesome when it finally worked and we got to see how useful it is to always have a build version of the game available with the latest push.",
    webglEnabled: false,
    webglUrl: ""
  },
  {
    id: 7,
    title: "Mascov",
    slug: "mascov",
    category: "Hobby",
    description: "A dark mystery detective game created for Global Game Jam 2026 (Theme: Masks)",
    fullDescription: "You are an enigmatic investigator drawn to an island where something dark and mysterious has come to pass. The town's residents have lost their identities and now wander aimlessly, waiting for someone to relieve them of their curse. As you explore, you must decide how to help them find themselves and restore what little peace remains… or risk being consumed by the very force you came to stop.",
    technologies: ["Unreal Engine", "C++", "Blueprints", "3D", "Perforce", "GitLab CI/CD"],
    cardUrl: "/mascov/mascov-card.png",
    videoUrl: "https://youtu.be/puh182Izyfg",
    galleryImages: [
      "/mascov/Mascov_1.png",
      "/mascov/Mascov_2.png",
      "/mascov/Mascov_3.png",
      "/mascov/Mascov_4.jpg",
    ],
    links: {
      itch: "https://dzneggs4keira.itch.io/mascov",
    },
    features: [
      "Atmospheric 3D mystery/detective gameplay",
      "Dark narrative about identity and curses",
      "Single-player puzzle-solving experience",
      "Haunting island environment with restless spirits",
    ],
    challenges: "Implementing two native C++ classes for core gameplay systems was challenging, as I hadn't worked with Unreal Engine or C++ in quite some time. However, it proved to be an encouraging experience that reinforced my ability to quickly adapt to unfamiliar technical environments under pressure.",
    learnings: "Built two native C++ classes that served as core gameplay systems, providing the designer with a solid foundation to construct game logic and gameplay loops in Blueprints. Implemented CI/CD pipeline using Perforce triggers and self-hosted GitLab runners for automated builds during the jam—uncommon for game jams but proved invaluable for keeping the team synchronized with always-available latest builds.",
    webglEnabled: false,
    webglUrl: ""
  }
]; 