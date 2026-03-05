export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-pink-200 dark:bg-gray-900 text-gray-800 dark:text-white py-6 px-6 mt-2 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Three Column Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-4 text-center">
          {/* Column 1 */}
          <div>
            <h3 className="font-extrabold mb-2 text-blue-800 dark:text-green-400">Navigate</h3>
            <nav className="flex flex-col gap-2">
              <a href="/" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Home</a>
              <a href="/snake" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Resume</a>
              <a href="/projects" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Projects</a>
            </nav>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-extrabold mb-2 text-blue-800 dark:text-green-400">Resources</h3>
            <nav className="flex flex-col gap-2">
              <a href="/tutorials" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Tutorials</a>
              
              <a href="/mars" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Visit Mars</a>
              <a href="/snake" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Play Games</a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-extrabold mb-2 text-blue-800 dark:text-green-400">Contact</h3>
            <nav className="flex flex-col gap-2">
              <a href="https://github.com/everettmerrill" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">GitHub</a>
              <a href="https://www.linkedin.com/in/everett-merrill/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">LinkedIn</a>
              <a href="mailto:email@example.com" className="text-blue-800 hover:text-blue-400 dark:text-gray-200 dark:hover:text-green-400">Email</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
          <p className="text-sm text-blue-500 dark:text-gray-400 text-center">
            &copy; {currentYear} Everett Merrill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}