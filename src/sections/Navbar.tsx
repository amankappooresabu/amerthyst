import { useState } from 'react';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = ['About', 'Services', 'Portfolio', 'Team', 'Contact'];

  return (
    <nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-9xl z-50 px-8 py-4 rounded-2xl"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <div 
          className="text-2xl font-light tracking-wider text-white cursor-pointer"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
        >
          AMETHYST
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-[120px] ">
          {navItems.map((item, index) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white/80  font-light tracking-wide text-lg transition-colors duration-300 hover:text-white"
                style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
              >
                {item}
              </a>
              
              {/* Purple glow effect on hover */}
              {hoveredIndex === index && (
                <div
                  className="absolute -inset-2 rounded-lg opacity-40 blur-md transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
                    zIndex: -1,
                  }}
                />
              )}
              
              {/* Purple underline on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-linear-to-r from-purple-500 to-violet-500 transition-all duration-300"
                style={{
                  width: hoveredIndex === index ? '100%' : '0%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;