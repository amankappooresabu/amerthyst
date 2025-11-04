import { logos } from '../constants/logos'; // Adjust path as needed

export default function LogoNav() {
  return (
    <nav className="fixed bottom-5 right-10  z-100">
      <div className="flex flex-col gap-1 items-center">
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className="w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-lg p-2  backdrop-blur-md hover:scale-110 hover:bg-white/20"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-full h-full object-contain  hover:brightness-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </nav>
  );
}