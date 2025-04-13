export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section with Title and CV Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">
          Let&apos;s Work Together
        </h1>
        <a href="/Zainab CV.pdf" download className="btn btn-primary btn-md">
          Download CV
        </a>
      </div>

      {/* Contact Form Section */}
      <div className="project-card p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Contact Form
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary btn-md">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
