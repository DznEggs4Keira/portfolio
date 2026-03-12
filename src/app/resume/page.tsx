export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section with Title */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">My Resume</h1>
      </div>

      {/* Embedded CV Section */}
      <div className="project-card p-8 rounded-lg">
        <iframe
          src="https://dzneggs4keira.claw.clawy.io/cv/"
          className="w-full"
          style={{ height: '85vh' }} // Adjust this value as needed
        ></iframe>
      </div>
    </div>
  );
}
