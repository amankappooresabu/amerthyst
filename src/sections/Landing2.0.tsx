import { useEffect, useRef, useMemo } from 'react';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Landing.scss';
import { cardData } from '../constants/CardData';
import { useNavigate } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const handleLogoClick = (cardId: string) => {
  navigate(`${cardId}`);
};

  const logoPositions = useMemo(() => {
    const positions: Record<number, Array<{top: number, left: number}>> = {};
    
    cardData.forEach(card => {
      const logoCount = card.logos.length;
      const cols = Math.ceil(Math.sqrt(logoCount));
      const rows = Math.ceil(logoCount / cols);
      
      const cells: Array<{top: number, left: number}> = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cells.push({
            top: (100 / rows) * row + (100 / rows) / 2,
            left: (100 / cols) * col + (100 / cols) / 2,
          });
        }
      }
      
      for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
      }
      
      const cardPositions = card.logos.map((_, idx) => {
        const cell = cells[idx];
        const cellWidth = 100 / cols;
        const cellHeight = 100 / rows;
        
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
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Autoplay, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        },
        speed: 600,
      });

      return () => swiper.destroy();
    }
  }, []);

  // GSAP ScrollTrigger Animation
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="landing-container">
      <h1 className="brand-title">Purple Sky Trade</h1>
      
      <div className="carousel-wrapper">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {cardData.map((card) => (
              <div key={card.id} className="swiper-slide">
                <div className="glass-card">
                  <h3 className="card-title">{card.title}</h3>
                  <div className="logos-container">
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
                        onClick={() => handleLogoClick(card.nav)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="gradient-overlay" />
    </div>
  );
}