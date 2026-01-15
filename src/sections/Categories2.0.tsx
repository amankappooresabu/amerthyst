import { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/Categories.scss'
import { categories } from '../constants/Categorydata';
import { cardData} from '../constants/CatData'
import ContactPage from './Contact';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { certificateData } from '../constants/Certificatedata';
import { rightSliderData } from '../constants/RightSliderData';



export default function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  
   const logoPositions = useMemo(() => {
    const positions: Record<number, Array<{top: number, left: number}>> = {};
    
    cardData.forEach(card => {
      const logoCount = card.logos.length;
      
      // Create a grid based on logo count
      const cols = Math.ceil(Math.sqrt(logoCount));
      const rows = Math.ceil(logoCount / cols);
      
      // Create grid cells
      const cells: Array<{top: number, left: number}> = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cells.push({
            top: (100 / rows) * row + (100 / rows) / 2,
            left: (100 / cols) * col + (100 / cols) / 2,
          });
        }
      }
      
      // Shuffle cells for randomness
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
      }
      
      // Assign positions with SMALLER random offset within cell
      const cardPositions = card.logos.map((_, idx) => {
        const cell = cells[idx];
        const cellWidth = 100 / cols;
        const cellHeight = 100 / rows;
        
        // Reduced from 0.6 to 0.3 (±15% of cell size instead of ±30%)
        const randomOffsetTop = (Math.random() - 0.5) * cellHeight * 0.3;
        const randomOffsetLeft = (Math.random() - 0.5) * cellWidth * 0.3;
        
        return {
          top: Math.max(15, Math.min(85, cell.top + randomOffsetTop)),
          left: Math.max(15, Math.min(85, cell.left + randomOffsetLeft)),
        };
      });
      
      positions[card.id] = cardPositions;
    });
    
    return positions;
  }, []);

 useEffect(() => {
  const element = sectionRef.current; // Store the ref value
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 } // Lower threshold
  );

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) {
      observer.unobserve(element);
    }
  };
}, []);
  useEffect(() => {
  if (swiperRef.current) {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 15,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 600,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 15
        }
      }
    });

    return () => swiper.destroy();
  }
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % rightSliderData.length);
  }, 10000); // Change slide every 3 seconds

  return () => clearInterval(interval);
}, []);

  return (
  <div ref={sectionRef} className="bg-black bg-black1 relative z-1 " >
    <div 
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{
        height: '100px',
        background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
        zIndex: 11
      }}
    />

    {/* Sticky wrapper for fixed elements */}
    <div className="categories-sticky-wrapper">
      {/* Left Image */}
      <div className="absolute bottom-0 left-0 w-54 h-54 z-10"
        style={{
          transform: isVisible ? 'translate(0, 0)' : 'translate(-100%, 100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1.2s ease-out'
        }}
      >
        <img
          src="/categorydim1.webp"
          alt="Category Left"
          className="w-full h-full object-cover rounded-tr-3xl shadow-2xl"
        />
      </div>

      {/* Right Image */}
      <div className="absolute bottom-0 right-0 w-54 h-54 z-10"
        style={{
          transform: isVisible ? 'translate(0, 0)' : 'translate(100%, 100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1.2s ease-out'
        }}
      >
        <img
          src="/categorydim2.webp"
          alt="Category Right"
          className="w-full h-full object-cover rounded-tl-3xl shadow-2xl"
        />
      </div>

      

      {/* Bottom gradient */}
      <div className="gradient-overlay" />
    </div>

    {/* Scrollable content wrapper */}
    <div className="categories-content-wrapper">
      {/* First section */}
      
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="categories-content">
          {/* All your existing content */}
          <div className='top-1/2 h-full ' style={{ display: 'flex', flexDirection: 'column', gap: '20px',  flexShrink: 0 }}>
            <div className="categories-text-box">
              <h2 className="categories-heading">
                Why Choose Our <br/> Products ?
              </h2>
              <p className="categories-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className="categories-bottom-box">
              {categories.map((category) => (
                <div key={category.id} className="category-item">
                  <img src={category.image} alt={category.name} className="category-item-image" />
                  <span className="category-item-name">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: '0 1 auto', gap: '15px', minHeight: 0, overflow: 'hidden' }}>
            <div className="categories-right-box">
              {rightSliderData.map((slide, index) => (
    <img 
      key={slide.id}
      src={slide.image} 
      alt={`Slide ${slide.id}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '15px',
        opacity: currentSlide === index ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    />
  ))}
              {/* <img 
                src="/greyglobe.png" 
                alt="" 
                className="categories-right-image"
              />
              <h3 className="categories-right-heading">
                Global Taste & Culinary Exports
              </h3>
              <p className="categories-right-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <button className="learn-more-button">
                Learn More
              </button> */}
            </div>

            <div className="categories-section">
  <h3 className="categories-section-heading">Categories</h3>
  <div ref={swiperRef} className="swiper categories-swiper">
    <div className="swiper-wrapper">
      {cardData.map((card) => (
        <div key={card.id} className="swiper-slide">
          <div className="category-card">
            <span 
              className="category-card-name" 
            >
              {card.title}
            </span>
            <div className='logos-container'>
            {card.logos.map((logo, idx) => (
    <img 
      key={idx}
      src={logo.src} 
      alt={`${card.title} logo ${idx + 1}`}
      className="product-logo"
      style={{
        top: `${logoPositions[card.id]?.[idx]?.top ?? 50}%`,
        left: `${logoPositions[card.id]?.[idx]?.left ?? 50}%`,
        width: logo.width,
        height: logo.height,
        transform: 'translate(-50%, -50%)',
      }}
    />
  ))}
  </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Second section - empty card */}
      <div className="categories-next-section">  
        <h1 className="certificate-title">
      Global-Standard Certifications via Our Trusted Manufacturing Partners
    </h1>
  <div className="certificate-next-card">
    
    <div className="certificates-grid">
      {certificateData.map((cert) => (
        <div key={cert.id} className="certificate-glass-card">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="certificate-image"
          />
          <h3 className="certificate-card-title">{cert.title}</h3>
        </div>
      ))}
    </div>
  </div>
</div>
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="categories-next-card">
          {/* Add your new content here */}
         <ContactPage/>
        </div>
      </div>
    </div>
  </div>
);
}