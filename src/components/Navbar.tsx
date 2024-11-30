import { Squirrel } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Squirrel className="h-8 w-8 text-cyan-400" />
            <span className="ml-2 text-white font-bold text-xl">META GAME</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['HOME', 'GAME', 'FINANCE', 'BENEFIT', 'RESOURCE', 'DOCS'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}