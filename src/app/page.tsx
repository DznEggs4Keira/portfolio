import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-3xl">
        <h1 className="text-4xl font-bold text-center sm:text-left">GameInventureDen</h1>
        
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            An aspiring game developer, an avid video game player and
            a perennial student of the programming arts.
          </h2>
          
          <h3 className="text-xl font-medium mb-6">Zainab Ali</h3>
          
          <div className="space-y-4">
            <p>
              I am currently providing my services as a Game Developer to BlueGoo Games on their amazing upcoming game, SpaceChef!
            </p>
            
            <p>
              I am also currently partaking in a training course as well, on tools used and development in the Unity3D engine for building fun and interactive video games. The course is offered by Jason Weiman and you can join his awesome community on discord here.
            </p>
            
            <p>
              I am also looking to explore any new opportunities to work alongside teams at the numerous games studios. Please don&apos;t hesitate to reach out for any possible opportunities, freelance, remote or on-site. Don&apos;t hesitate to contact me and reach out so that we may get to know each other.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/about"
          >
            Learn more About me
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/projects"
          >
            View My Projects
          </Link>
        </div>
        
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-6">Independent Projects</h2>
          <p className="mb-4">
            I have worked on some projects, outside of my education to further hone my skills and to experience the development process and the efforts which go into making a videogame. Have a look through the gallery below and click on any of the projects to learn further about them.
          </p>
          <Link
            className="inline-block text-blue-600 hover:underline"
            href="/projects"
          >
            Learn More
          </Link>
        </div>
        
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-bold mb-6">Student Projects</h2>
          <p className="mb-4">
            I have worked on some projects during my education to test my skills and to experience the development process. Have a look through the gallery below and click on any of the projects to learn further about them.
          </p>
          <Link
            className="inline-block text-blue-600 hover:underline"
            href="/projects"
          >
            Learn More
          </Link>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          Let&apos;s Work Together
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
