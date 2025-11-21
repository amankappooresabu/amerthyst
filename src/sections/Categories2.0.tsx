import { useEffect, useRef, useState } from 'react';
import '../styles/Categories.scss'
import { categories } from '../constants/Categorydata';
import { catData} from '../constants/CatData'
import ContactPage from './Contact';


export default function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
  <div ref={sectionRef} className="bg-black relative" >
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
          src="/categorydim1.png"
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
          src="/categorydim2.png"
          alt="Category Right"
          className="w-full h-full object-cover rounded-tl-3xl shadow-2xl"
        />
      </div>

      {/* Background */}
      <div className="categories-bg-fixed" 
        style={{
          backgroundImage: 'url("/category_bg.png")',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

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
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '15px' }}>
            <div className="categories-right-box">
              <img 
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
              </button>
            </div>

            <div className="categories-section">
              <h3 className="categories-section-heading">Categories</h3>
              <div className="categories-cards-container">
                {catData.map((card) => (
                  <div key={card.id} className="category-card" >
                    <img src={card.image} alt={card.name} className="category-card-image" style={{ 
                      marginTop: card.imageMarginTop,
                      marginBottom: card.imageMarginBottom
                    }} />
                    <span className="category-card-name" style={{ 
                      marginTop: card.textMarginTop,
                      marginBottom: card.textMarginBottom
                    }}>{card.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second section - empty card */}
      <div className="categories-next-section">
        <div className="categories-next-card">
          {/* Empty for now */}
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="categories-next-card1">
          {/* Add your new content here */}
         <ContactPage/>
        </div>
      </div>
    </div>
  </div>
);
}