import { useEffect, useRef, useState } from 'react';
import '../styles/Categories.scss'
import { categories } from '../constants/Categorydata';
import { catData} from '../constants/CatData'


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
    <div ref={sectionRef} className="bg-black min-h-screen relative overflow-hidden">
       <div 
  className="absolute top-0 left-0 w-full pointer-events-none"
  style={{
    height: '100px',
    background: 'linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
    zIndex: 11
  }}
/>
      {/* Left Image - slides in from bottom left */}
      <div
        className={`absolute bottom-0 left-0 w-54 h-54 transition-all duration-1200 ease-out ${
          isVisible ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-full translate-y-full opacity-0'
        }`}
      >
        <img
          src="/categorydim1.png"
          alt="Category Left"
          className="w-full h-full object-cover rounded-tr-3xl shadow-2xl"
        />
      </div>

      {/* Right Image - slides in from bottom right */}
      <div
        className={`absolute bottom-0 right-0 w-54 h-54 transition-all duration-1200 ease-out ${
          isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-full translate-y-full opacity-0'
        }`}
      >
        <img
          src="/categorydim2.png"
          alt="Category Right"
          className="w-full h-full object-cover rounded-tl-3xl shadow-2xl"
        />
      </div>

      {/* Center content area - you can add your content here */}
<div className="flex items-center justify-center min-h-screen px-8 " style={{
    backgroundImage: 'url("/category_bg.png")',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
  <div className="categories-content">
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
<div className="gradient-overlay" />
    </div>
  );
}