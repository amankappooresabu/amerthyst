export default function SplashScreen() {
  return (
    <div 
      className="relative w-full h-screen overflow-hidden flex justify-center items-center"
      style={{
        backgroundImage: 'url(/bg6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <video
        autoPlay
        loop={false}  
        muted
        playsInline
        className="relative top-0 left-0  md:w-[70%] md:h-[70%]  object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/video2.webm" type="video/webm" />
      </video>
    </div>
  );
}