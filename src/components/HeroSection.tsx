import { Squirrel } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                ICO
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-white">
              JOIN THE METASQUID REVOLUTION
            </h2>
            <p className="text-gray-400 text-lg">
              Join the crypto revolution with a groundbreaking platform that combines gaming, DeFi, and digital collectibles into a seamless experience.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
              EXPLORE MORE
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Squirrel className="w-32 h-32 text-cyan-400 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'JOIN THE METASQUID GAMES',
              description: 'Immerse yourself in our revolutionary gaming ecosystem.',
              buttonText: 'SIGN NOW'
            },
            {
              title: 'WIN LUXURY REWARDS',
              description: 'Earn exclusive rewards and digital collectibles.',
              buttonText: 'LEARN MORE'
            },
            {
              title: 'WIN LUXURY REWARDS',
              description: 'Participate in our unique reward system.',
              buttonText: 'CLAIM NOW'
            }
          ].map((card, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 mb-6">{card.description}</p>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}