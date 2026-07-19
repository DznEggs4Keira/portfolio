const RESUME_URL = "https://cv.gameweaver.dev";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section with Title */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4 md:mb-0 text-ink">My Resume</h1>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-wide text-accent hover:underline"
        >
          Open Resume in New Tab ↗
        </a>
      </div>

      {/* Embedded CV Section */}
      <div className="project-card p-8 rounded-lg">
        <iframe
          src={RESUME_URL}
          className="w-full"
          style={{ height: '85vh' }} // Adjust this value as needed
        ></iframe>
      </div>
    </div>
  );
}
