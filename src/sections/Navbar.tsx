import { useState, useEffect } from 'react';
import { logos } from '../constants/logos';
import MobileMenu from './components/MobileNav/mobilenav';

// Logo navbar component (right side)
const LogoNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(0);
  
  
  useEffect(() => {
    // Reveal items one by one
    const timers = logos.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(index + 1);
      }, 300 + (index * 200)) // Each item appears 200ms apart
    );
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="fixed top-5 right-8 z-50">
      <div
        className="px-8 transition-all duration-300 ease-out h-10"
        style={{
          background: visibleItems > 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: visibleItems > 0 ? 'blur(24px) saturate(200%)' : 'none',
          border: 'none',
          boxShadow: visibleItems > 0 ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : 'none',
          borderRadius: '10px',
          width: 'fit-content',
        }}
      >
        <div className="flex items-center gap-8 py-1.5">
          {logos.slice(0, visibleItems).map((logo, index) => (
            <div
              key={logo.id}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideInRight 0.3s ease-out both`
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 w-auto object-contain transition-all duration-300 cursor-pointer"
                style={{
                  filter: hoveredIndex === index 
                    ? 'brightness(1.2) drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' 
                    : 'brightness(1)',
                }}
              />
              
              {/* Purple glow effect on hover */}
              {hoveredIndex === index && (
                <div
                  className="absolute -inset-3 rounded-lg opacity-40 blur-md transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)',
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Navbar component (left side)
const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const navItems = ['Home', 'Categories', 'Contact'];
  
  useEffect(() => {
    // Reveal items one by one
    const timers = navItems.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(index + 1);
      }, 300 + (index * 200)) // Each item appears 200ms apart
    );
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <>
      {/* Left Navbar */}
      {!isMobile && ( <> <div className="fixed top-5 left-8 z-50 flex items-center gap-12">
        {/* PURPLE SKY TRADE Logo */}
        <div 
          className="text-lg font-light tracking-wider text-white"
          style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
        >
          PURPLE SKY TRADE
        </div>

        {/* Navbar - Expands as items appear */}
        <div
          className="px-8 transition-all duration-300 ease-out h-10"
          style={{
            background: visibleItems > 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            backdropFilter: visibleItems > 0 ? 'blur(24px) saturate(200%)' : 'none',
            border: 'none',
            boxShadow: visibleItems > 0 ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : 'none',
            borderRadius: '10px',
            width: 'fit-content',
          }}
        >
          <div className="flex items-center gap-12 py-1.5">
            {navItems.slice(0, visibleItems).map((item, index) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animation: `slideIn 0.3s ease-out both`
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-light tracking-wide text-md transition-colors duration-300 whitespace-nowrap ${
                    index === 0 ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
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
                
                {/* Purple underline on hover or active */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-purple-500 to-violet-500 transition-all duration-300"
                  style={{
                    width: hoveredIndex === index || index === 0 ? '100%' : '0%',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Logo Navbar */}
      <LogoNav /> </>)}
      {isMobile && <MobileMenu />}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;