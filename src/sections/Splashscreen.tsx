export default function SplashScreen() {
  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/bg6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <video
        autoPlay
        loop={false}  // Don't loop - play once
        muted
        playsInline
        className="absolute top-0 left-0 ml-52 mt-20 w-[70%] h-[70%] object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/video2.webm" type="video/webm" />
      </video>
    </div>
  );
}