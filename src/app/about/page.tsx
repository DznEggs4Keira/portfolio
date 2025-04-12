export default function About() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="mb-4">
            [Your background story and journey into game development]
          </p>
          <p className="mb-4">
            [Your education, training, and professional development]
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Game Development</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unity 3D & C#</li>
                <li>Unreal Engine & Blueprints</li>
                <li>Game Design Principles</li>
                <li>3D Modeling Fundamentals</li>
                <li>[Other relevant skills]</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Programming</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>C# / .NET</li>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>[Other languages/frameworks]</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Game Developer at BlueGoo Games</h3>
              <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
              <p className="mt-2">
                Working on SpaceChef, an upcoming game. [Add more details about your role and contributions]
              </p>
            </div>
            {/* Add more experiences as needed */}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
          <p className="mb-4">
            Beyond game development, I&apos;m passionate about [your hobbies, interests, gaming preferences, etc.]
          </p>
        </div>
      </div>
    );
  }
  