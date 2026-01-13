import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SegmentedToggle from './components/SegmentedToggle/toggle';
import MobileMenu from './components/MobileNav/mobilenav';
import '../styles/Navbar.scss'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    gsap.fromTo('#contact-button',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 0.6,
      }
    );
  });

  return (
    <>
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 bg-linear-to-b from-black/70 to-transparent  py-6  ">
          {/* Left side */}
          <div className="flex items-center ">
            {/* PURPLE SKY TRADE Logo */}
            <div 
    className="text-lg font-light tracking-wider text-white px-6 py-2.5 rounded-xl"
    style={{ 
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
    }}
  >
    PURPLE SKY TRADE
  </div>

            {/* Segmented Toggle */}
             <div className="absolute left-1/2 transform -translate-x-1/2">
          <SegmentedToggle 
            defaultValue="menu"
            onValueChange={(value) => console.log('Selected:', value)}
          />
        </div>
          </div>

          {/* Right side - Contact Button */}
          <button
            id="contact-button"
            className="contact-button"
          >
            Contact Us
          </button>
        </div>
      )}
      
      {isMobile && <MobileMenu />}
    </>
  );
};

export default Navbar;