import { useState, useEffect, useRef } from 'react';
import CategoryCard from './components/Categorycard/Categorycard';
import { categories } from '../constants/Categorydata';

export default function Categories() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track mouse position relative to the section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Split categories into rows
   const getCardsPerRow = () => {
    if (windowWidth < 600) return 1;
    if (windowWidth < 900) return 2;
    return 3;
  };

  const cardsPerRow = getCardsPerRow();

  // Split categories into rows based on screen size
  const getRows = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += cardsPerRow) {
      rows.push(categories.slice(i, i + cardsPerRow));
    }
    return rows;
  };

  const rows = getRows();
  const [hoveredCards, setHoveredCards] = useState<{[key: number]: number | null}>({});

// Add these handler functions:
const handleCardHover = (rowIndex: number, cardIndex: number) => {
  setHoveredCards(prev => ({ ...prev, [rowIndex]: cardIndex }));
};

const handleCardLeave = (rowIndex: number) => {
  setHoveredCards(prev => ({ ...prev, [rowIndex]: null }));
};
  // Calculate transform for each card based on hover
  const getCardTransform = (rowCards: any[], hoveredInRow: number | null) => {
    // If row has 2 or fewer cards, no push effect
    if (rowCards.length <= 2) return 'translateX(0)';
    
    if (hoveredInRow === null) return 'translateX(0)';
    
    const pushAmount = 80; // pixels to push
    
    // Left card hovered (position 0)
    if (hoveredInRow === 0) {
      return `translateX(${pushAmount}px)`;
    }
    
    // Right card hovered (position 2)
    if (hoveredInRow === 2) {
      return `translateX(-${pushAmount}px)`;
    }
    
    // Middle card - no push
    return 'translateX(0)';
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .card-fade-in {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
      
 
      <div 
      id="categories"
      ref={sectionRef}
      className=" text-amber-50 py-20  relative"
      style={{ minHeight: '100vh',
        backgroundImage: 'url("/categorybg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Optional: parallax effect
  }}
>
   <div 
  className="absolute top-0 left-0 w-full pointer-events-none"
  style={{
    height: '170px',
    background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
    zIndex: 11
  }}
/>
  {/* Black overlay for brightness control */}
  <div 
    className="absolute inset-0" 
    style={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust 0.7 for brightness (0 = bright, 1 = dark)
      zIndex: 1 
    }}
  />
    
      {/* Spotlight/Flashlight Effect - Dark overlay with circular light */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, ${windowWidth >= 600 ? 'transparent 0%, rgba(0, 0, 0, 0.80) 180%' : ''})`,
          zIndex: 10
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 5 }}>
        {/* Heading */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 
            className="text-5xl font-light tracking-wider text-white mb-4"
            style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
          >
            Categories
          </h2>
          <p 
            className="text-lg text-gray-400 font-light tracking-wide"
            style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
          >
            Choose one of our organic products
          </p>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden">
          {rows.map((rowCards, rowIndex) => (
  <div key={rowIndex} className="flex justify-center mb-8 lg:gap-25 md:gap-25 gap-10">
    {rowCards.map((category, cardIndex) => (
      <div
        key={category.id}
        onMouseEnter={() => handleCardHover(rowIndex, cardIndex)}  // ← Changed
        onMouseLeave={() => handleCardLeave(rowIndex)}              // ← Changed
        className={isVisible ? 'card-fade-in' : ''}
        style={{
          transform: `${getCardTransform(rowCards, hoveredCards[rowIndex])} ${isVisible ? 'translateY(0)' : 'translateY(40px)'}`,  // ← Changed
          transition: 'transform 0.4s ease, opacity 0.6s ease',
          marginRight: cardIndex < rowCards.length - 1 && rowCards.length > 2 ? '-90px' : '0',
          marginLeft: cardIndex > 0 && rowCards.length <= 2 && windowWidth >= 768 ? '92px' : '0',
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${(rowIndex * cardsPerRow + cardIndex) * 0.1}s`  // ← Also update this
        }}
      >
        <CategoryCard category={category} />
      </div>
    ))}
  </div>
))}
         
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: '170px', // Adjust height for gradient spread
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)',
          zIndex: 4
        }}
      />
    </div>
    </>
  );
}