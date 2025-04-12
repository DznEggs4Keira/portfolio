import Link from "next/link";

export default function Home() {

  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="py-12 flex flex-col items-center">
        
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            An aspiring game developer, an avid video game player and
            a perennial student of the programming arts.
          </h2>
          
          <div className="space-y-4 mt-8">
            <p>
              I am currently working at <a href="https://ahead.group/en" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">AHEAD Automotive GmbH</a> as a Software Developer, where I am part of a team that is developing a AI Powered Repair Assistant for the automotive industry. My role involves working with various technologies and programming languages to create efficient and reliable software solutions.
            </p>
            
            <p>
              In my spare time, I am passionate about game development and have been working on various projects to enhance my skills. I enjoy creating immersive experiences and exploring new technologies in the gaming industry. I recently participated in the Global Game Jam 2025 which you can checkout here.
            </p>
            
            <p>
              Furthermore, I am always looking for any opportunity to work alongside teams at game studios. Please don&apos;t hesitate to reach out for any possible collaborations, freelance, remote or on-site. <Link href="/contact" className="text-blue-600 hover:underline">Let&apos;s connect</Link> and get to know each other.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
              href="/about" 
              className="btn btn-md btn-primary"
          >
            Learn More About Me
          </Link>
          <Link
            href="/projects"
            className="btn btn-md btn-primary"
          >
            My Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
