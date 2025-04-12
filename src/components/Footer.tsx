export default function Footer() {
  return (
    <footer className="row-start-3 flex-wrap items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Zainab Ali</h2>
            <p className="text-gray-400">Weaving Games since 2018</p>
          </div>

          <div className="flex space-x-6">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/DznEggs4Keira"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.linkedin.com/in/zainab-ali-a15077181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GameWeaver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
