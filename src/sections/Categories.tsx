import { useState, useEffect, useRef } from 'react';
import CategoryCard from './components/Categorycard/Categorycard';
import { categories } from '../constants/Categorydata';

export default function Categories() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Split categories into rows
  const rows = [
    categories.slice(0, 3),  // Row 1: 3 cards
    categories.slice(3, 6),  // Row 2: 3 cards
    categories.slice(6, 8)   // Row 3: 2 cards
  ];

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
    <div 
      ref={sectionRef}
      className="bg-black text-amber-50 py-20 px-8 relative"
      style={{ minHeight: '100vh' }}
    >
      {/* Spotlight/Flashlight Effect - Dark overlay with circular light */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0, 0, 0, 0.82) 100%)`,
          zIndex: 10
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 5 }}>
        {/* Heading */}
        <div className="text-center mb-16">
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
          {rows.map((rowCards, rowIndex) => {
            const [hoveredInRow, setHoveredInRow] = useState<number | null>(null);
            
            return (
              <div key={rowIndex} className="flex justify-center mb-8 gap-25">
                {rowCards.map((category, cardIndex) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => setHoveredInRow(cardIndex)}
                    onMouseLeave={() => setHoveredInRow(null)}
                    style={{
                      transform: getCardTransform(rowCards, hoveredInRow),
                      transition: 'transform 0.4s ease',
                      marginRight: cardIndex < rowCards.length - 1 && rowCards.length > 2 ? '-70px' : '0',
                      marginLeft: cardIndex > 0 && rowCards.length <= 2 ? '72px' : '0'
                    }}
                  >
                    <CategoryCard category={category} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}