import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects"; // Ensure you have access to your projects data

export default function Home() {
  // Filter or select the latest or spotlight projects
  const spotlightProjects = projects
    .filter((project) => project.isSpotlight) // Add a flag in your data for spotlight projects
    .slice(0, 3); // Adjust the number of spotlight projects as needed

  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="py-12 flex flex-col items-center">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            An aspiring game developer, an avid video game player and a
            perennial student of the programming arts.
          </h2>

          <div className="space-y-4 mt-8">
            <p>
              I am currently working at{" "}
              <a
                href="https://ahead.group/en"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AHEAD Automotive GmbH
              </a>{" "}
              as a Software Developer, where I am part of a team that is
              developing a AI Powered Repair Assistant for the automotive
              industry. My role involves working with various technologies and
              programming languages to create efficient and reliable software
              solutions.
            </p>

            <p>
              In my spare time, I am passionate about game development and have
              been working on various projects to enhance my skills. I enjoy
              creating immersive experiences and exploring new technologies in
              the gaming industry. I recently participated in the Global Game
              Jam 2026 which you can checkout{" "}
              <Link
                href="/projects/5"
                className="text-blue-600 hover:underline"
              >
                here
              </Link>
              .
            </p>

            <p>
              Furthermore, I am always looking for any opportunity to work
              alongside teams at game studios. You can checkout{" "}
              <Link href="/resume" className="text-blue-600 hover:underline">
                My Resume
              </Link>{" "}
              and let&apos;s find the right opportunity for both of us.
            </p>
          </div>
        </div>
      </section>
      {/* Spotlight Projects Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Current Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlightProjects.map((project) => (
            <div
              key={project.id}
              className="project-card text-white p-4 rounded-lg shadow-lg"
            >
              <div className="relative w-full h-48 p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={project.cardUrl}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-600 hover:underline mt-2 block"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 flex flex-col items-center">
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link href="/about" className="btn btn-md btn-primary">
            Learn More About Me
          </Link>
          <Link href="/projects" className="btn btn-md btn-primary">
            My Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
