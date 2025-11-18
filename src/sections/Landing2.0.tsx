import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import '../styles/Landing.scss';
import { cardData } from '../constants/CardData';

export default function Landing() {
  const swiperRef = useRef(null);

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

  return (
    <div className="landing-container">
      <h1 className="brand-title">Purple Sky Trade</h1>
      
      <div className="carousel-wrapper">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {cardData.map((card, index) => (
              <div key={index} className="swiper-slide">
                <div className="glass-card">
                  <h3 className="card-title">{card.title}</h3>
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