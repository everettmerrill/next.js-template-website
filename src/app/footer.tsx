export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-1000 text-white py-2 px-6 mt-2">
      <div className="max-w-2xl mx-auto">
        {/* Shortcuts */}
        <div className="mb-1">
          <h3 className="font-semibold text-center mb-1">Quick Links</h3>
          <nav className="flex gap-3 justify-center">
            <a href="/" className="hover:text-green-400">Home</a>
            <a href="/tutorials" className="hover:text-green-400">Tutorials</a>
            <a href="/projects" className="hover:text-green-400">Projects</a>
            <a href="/contact" className="hover:text-green-400">Contact</a>
            <a href="/snake" className="hover:text-green-400">Play Snake</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-grey-700 pt-1">
          <p className="text-sm text-white-500 text-center">
            &copy; {currentYear} Everett Merrill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}