import { useState, useEffect } from 'react';
import { logos } from '../../../constants/logos';
import './mobilenav.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Categories', 'Contact'];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
       <div className="mobile-menu__logo-text">
      PURPLE SKY TRADE
    </div>
      {/* Hamburger Button */}
      <button
        className="mobile-menu__button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <div className="mobile-menu__hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-menu__overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal */}
      <div className={`mobile-menu__modal ${isOpen ? 'mobile-menu__modal--open' : ''}`}>
        {/* Close Button */}
        <button
          className="mobile-menu__close"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Nav Items */}
        <nav className="mobile-menu__nav">
          {navItems.map((item) => (
            <div key={item} className="mobile-menu__nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </a>
              <div className="mobile-menu__nav-line"></div>
            </div>
          ))}
        </nav>

        {/* Logos */}
        <div className="mobile-menu__logos">
          {logos.map((logo) => (
            <div key={logo.id} className="mobile-menu__logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;