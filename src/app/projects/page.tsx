export default function Projects() {
    // This data would ideally come from a CMS or data file
    const projects = [
      {
        id: 1,
        title: "SpaceChef",
        category: "Professional",
        description: "An upcoming game with BlueGoo Games where players...",
        technologies: ["Unity", "C#", "3D Modeling"],
        imageUrl: "/placeholder-project.svg",
        link: "/projects/spacechef",
      },
      {
        id: 2,
        title: "Project Two",
        category: "Independent",
        description: "A personal project focused on...",
        technologies: ["Unreal Engine", "Blueprints", "3D Animation"],
        imageUrl: "/placeholder-project.svg",
        link: "/projects/project-two",
      },
      // Add more projects from your backup
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Independent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => project.category === "Independent")
              .map(project => (
                <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={project.link}
                      className="text-blue-600 hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Student Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => project.category === "Student")
              .map(project => (
                <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
                  {/* Same structure as above */}
                  {/* Copy the structure from the Independent projects section */}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  