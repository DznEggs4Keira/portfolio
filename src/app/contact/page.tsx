export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                  your.email@example.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium">GitHub</h3>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/yourusername
                </a>
              </div>
              {/* Add other social profiles as needed */}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="mb-4">
            Download my resume to learn more about my experience and skills.
          </p>
          <a 
            href="/your-resume.pdf" 
            download
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors inline-flex items-center"
          >
            Download CV
          </a>
        </div>
      </div>
    );
  }
  