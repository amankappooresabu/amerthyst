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
        <div className="fixed top-5 left-0 right-0 z-50 flex items-center justify-between px-8">
          {/* Left side */}
          <div className="flex items-center ">
            {/* PURPLE SKY TRADE Logo */}
            <div 
              className="text-lg font-light tracking-wider text-white"
              style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
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