export interface DevLogEntry {
  date: string;
  title?: string;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  slug?: string;
  category: "Professional" | "Hobby" | "Student";
  focus: "gamedev" | "backend";
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
  contribution?: string[];
  devLogs?: DevLogEntry[];
  isSpotlight?: boolean;
  cardBg?: "dark";
}

export const projects: Project[] = [
  // Professional Projects
    {
    id: 0,
    title: "Qira",
    slug: "qira",
    category: "Professional",
    focus: "backend",
    description: "Your AI Repair Assistant. Repairs in record time!",
    fullDescription: "Qira is an AI-powered repair assistant developed by AHEAD GmbH which provides a web-based platform for workshops to quickly and accurately diagnose and repair vehicles. We leverage the vast databases of OEM repair manuals available under the right to repair legislation to provide step-by-step repair instructions, diagnostic tools, and parts identification. Qira aims to streamline the repair process, reduce downtime, and improve the overall efficiency of workshops by harnessing the power of AI to assist technicians in their daily tasks.",
    technologies: ["NodeJS", "NestJS", "Typescript", "Angular", "Python", "Claude Code"],
    cardUrl: "/qira/qira-card.avif",
    cardBg: "dark",
    videoUrl: "https://youtu.be/oe7XgNASmIc",
    links: {
      official: "https://www.qira.net",
    },
    features: [],
    challenges: "",
    learnings: "",
    contribution: [
      "Sole owner of the AI-powered repair assistant chatbot — responsible for architecture, development, and delivery end-to-end",
      "Developed across a NestJS (TypeScript) backend and Angular frontend on a live production system",
      "Built API integrations connecting 3 platforms (Ruby on Rails, NestJS, HubSpot), syncing 30,000+ records",
      "Set up PostgreSQL event tracking in Docker, migrating data from a legacy Ruby application across 3 environments",
      "Built a Python data scraping pipeline, indexing content into Elasticsearch to power ML document retrieval",
      "Integrated Azure Blob Storage for image persistence across the AI pipeline",
      "Engineered LLM prompt architecture — query refinement, document selection, and context injection for accurate AI responses",
      "Build agent-first with Claude Code: Opus/Fable in plan mode for architecture decisions, Sonnet for implementation, Git worktrees for parallel tickets, and a CLAUDE.md defining conventions every agent instance follows",
      "Led DevOps modernization: containerized environments in Docker, evaluating Docker Swarm for blue-green deployments and Ansible for infrastructure automation",
      "Self-taught systems administration managing Google Workspace, MDM tools, and company access systems",
      "Researched and configured Tableau dashboards for product analytics",
    ],
    isSpotlight: true,
  },
    {
    id: 1,
    title: "Propoints",
    slug: "propoints",
    category: "Professional",
    focus: "backend",
    description: "The Loyalty Program for Workshops.",
    fullDescription: "Propoints is a loyalty program designed to serve the interests of workshops in the automotive aftermarket and is a product of AHEAD GmbH.It provides a platform for workshops to earn points based on their purchases and activities, which can then be redeemed for rewards and benefits. The program aims to foster stronger relationships between workshops and suppliers, while also incentivizing increased engagement and loyalty within the industry.",
    technologies: ["Ruby", "Rails", "PostgresSQL"],
    cardUrl: "/propoints/propoints-card.svg",
    imageUrl: "/propoints/propoints-image.png",
    links: {
      official: "https://www.propoints.com/de/en",
    },
    features: [],
    challenges: "",
    learnings: "",
    contribution: [
      "Built API integrations connecting 3 platforms (Ruby on Rails, NestJS, HubSpot), syncing 30,000+ records",
    ],
  },
  {
    id: 2,
    title: "ErgoGames",
    slug: "ergogames",
    category: "Professional",
    focus: "gamedev",
    description: "A series of Endless Runner games focused on health and fitness.",
    fullDescription: "ErgoGames is a collection of health-focused endless runner games designed to make physical therapy and fitness more engaging. Developed for Ergofox GmbH, these games use motion tracking to turn therapeutic exercises into gameplay mechanics.\n\nThe suite includes several themed runners, each targeting different muscle groups and movement patterns. As players perform their prescribed exercises, their movements control the game character, making therapy sessions more enjoyable and increasing adherence to treatment plans.",
    technologies: ["Node", "JavaScript", "ThreeJS", "React", "Motion Tracking API"],
    cardUrl: "/ergo-games/ergogames-card.svg",
    cardBg: "dark",
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
    contribution: [
      "Learned React and Three.js to build browser games integrated with a proprietary webcam body-tracking system",
      "Designed 5+ levels for an endless runner platformer, implementing UI and core gameplay mechanics",
      "Prototyped 2 additional game concepts from concept to playable demo",
    ],
  },
    {
    id: 3,
    title: "SpaceChef",
    slug: "spacechef",
    category: "Professional",
    focus: "gamedev",
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
    contribution: [
      "Contributed to the existing Unity C# codebase for Space Chef, navigating established systems to add features",
      "Extended the weapons system with 2 new weapon types matching the existing architecture",
      "Implemented 3 game levels (space bar, planetary environment, cinematics) and NPC dialogue systems",
    ],
  },
  // Hobby Projects
      {
    id: 4,
    title: "Cthulu",
    slug: "cthulu",
    category: "Hobby",
    focus: "gamedev",
    description: "Love thine Fishies!",
    fullDescription: "",
    technologies: ["Unreal Engine", "C++", "Blueprints", "2D", "GitHub CI/CD"],
    cardUrl: "/placeholder-project.svg",
    imageUrl: "",
    galleryImages: [],
    links: {
      github: "https://github.com/DznEggs4Keira/Cthulu",
    },
    features: [],
    challenges: "",
    learnings: "",
    contribution: [
      "Sole developer on this personal passion project, built alongside a friend — architecting the project from scratch while building hands-on depth in Unreal Engine and C++",
    ],
    devLogs: [
      {
        date: "10 April 2026",
        title: "#01 — Establishing the Foundations",
        text: "First session. Locked in the foundational architecture: a 2D fish-tank management game built as a locked-camera 3D scene in UE5.7/C++ (chosen over Paper2D for better tooling support). Settled on a data-first build order — UMG sidebar as a visual test canvas, then a C++ inventory system that broadcasts an OnInventoryChanged delegate (UI listens, never talks back), owned by the Player class, wired together through the HUD. Also decided the sidebar would use a collapsible accordion pattern. Next: scaffold the UInventoryWidget C++ base class.",
      },
      {
        date: "13 April 2026",
        title: "#02.1 — Surface Snapping via Line Trace",
        text: "Solved surface-snapping for the placement system: a downward line trace from the cursor hits the plane mesh directly and returns the impact point, so placed objects sit cleanly on the surface without clipping. This means no separate collision or height maps are needed from the artist — real mesh geometry with Simple Collision enabled is enough.",
      },
      {
        date: "13 April 2026",
        title: "#02.2 — Rethinking the World as Scene Clusters",
        text: "A pure architecture session — no code, and rightly so. The concept evolved significantly after a new art mockup: instead of flat UMG overlays, the game is now a persistent world of scene clusters connected by fast camera 'swoosh-and-settle' transitions, with a shadowbox parallax effect where depth layers subtly rotate around a pivot based on mouse position (background rotates least, foreground most). Locked in the core architecture spine: a PlayerController handling all raycasting, actors implementing an IInteractable interface to stay decoupled, and a camera transition system tying it together.",
      },
      {
        date: "8 March 2026",
        title: "#03 — First Environment & CRT Screens",
        text: "Starting from a completely empty map, learning Unreal from scratch. Got the base environment running (sky sphere, directional + sky light) and built the four in-world CRT monitor screens using SceneCapture2D actors feeding Render Targets, displayed via a shared master material. Iterated the CRT shader from a static scanline effect into a rolling scan-bar (Time → Frac scrolling a dark band vertically) after debugging a few disconnected node chains. Wrapped up by snapping the editor camera to the intended player viewpoint.",
      },
      {
        date: "25 May 2026",
        title: "#04 — CRT Monitor Material: Scan Band Effect",
        text: "Added a travelling static/noise band to the CRT monitor material. The first attempt pulsed the whole screen instead of showing a localized band — turned out the graph was missing a UV spatial mask (no TexCoord node), so the noise had no sense of screen position. Fixed by comparing TexCoord[0]'s V channel against a Frac(Time × Speed) band position, then shaping it with Abs → OneMinus → Saturate → Power for band tightness. Next: wire this up properly and consider driving speed via a Dynamic Material Parameter.",
      },
      {
        date: "8 June 2025",
        title: "#05 — Static Fix & Camera Architecture",
        text: "Fixed the digital static post-process effect for the CRT feeds — it needed to live in each cube's material directly (sampling the render target) rather than as a post-process on the SceneCapture2D, since that only affects the capture's internal framebuffer, not what the material actually samples. Then moved into camera-system architecture: a fixed first-person view where the player occupies discrete named positions (e.g. a desk with two poses, a cash register with one), transitioning via clicking interactables with constrained freelook per pose. Landed on a three-class split — ACameraAnchor (data-only, per-position transform + freelook cone), ACthuluCameraManager (owns transition/lerp logic), ACthuluPlayerController (thin, forwards clicks to the camera manager). ACameraAnchor is fully written; the camera manager is next.",
      },
    ],
    isSpotlight: true,
  },
    {
    id: 5,
    title: "Mascov",
    slug: "mascov",
    category: "Hobby",
    focus: "gamedev",
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
    contribution: [
      "Implemented core gameplay mechanic base classes in C++, enabling the designer to build game logic in Blueprints — bridging programming and design workflows",
    ],
    isSpotlight: true,
  },
    {
    id: 6,
    title: "Lose-it Dreaming",
    slug: "lose-it-dreaming",
    category: "Hobby",
    focus: "gamedev",
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
    contribution: [
      "Set up a CI/CD pipeline (GitHub Actions), taught Git workflow to 6 artists, implemented controller input systems",
    ],
  },
    {
    id: 7,
    title: "Hooded Hooligans",
    slug: "hooded-hooligans",
    category: "Hobby",
    focus: "gamedev",
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
    contribution: [
      "Managed version control for a 9-person team, implemented 3-player couch co-op controller setup",
    ],
  },
    {
    id: 8,
    title: "The Root of All Evil",
    slug: "the-root-of-all-evil",
    category: "Hobby",
    focus: "gamedev",
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
    contribution: [
      "Designed core combat mechanics, built the main menu and gameplay loop, integrated 8+ audio tracks and animations",
    ],
  },
  {
    id: 9,
    title: "Who is Grandma?",
    slug: "who-is-grandma",
    category: "Hobby",
    focus: "gamedev",
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
    contribution: [
      "Designed 5+ puzzle riddles, implemented full UI system, managed Git workflow for the team",
    ],
  }
];