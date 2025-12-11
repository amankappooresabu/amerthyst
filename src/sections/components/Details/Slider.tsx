'use client';

import { useState, useEffect } from 'react';


export default function Section1Slider({slides}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full h-full min-h-screen relative overflow-hidden ">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Text Content - Lower Left */}
      <div className="absolute bottom-5 left-0 p-8 z-1 flex flex-col gap-1 2xl:gap-2 w-[80%] lg:w-[50%]">
      <span className='bg-white/20 backdrop-blur-lg text-white/80 text-lg 2xl:text-2xl  py-2.5 rounded-full w-35 2xl:w-45 text-center'>
      {slides[currentSlide].Tag}
</span>
        <h2 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-normal 2xl:mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-white/80  text-[18px] xl:text-[20px] 2xl:text-[22px] mb-6 leading-6 xl:leading-none">
          {slides[currentSlide].excerpt}
        </p>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-white/50 transition-all duration-300 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-transparent hover:bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}