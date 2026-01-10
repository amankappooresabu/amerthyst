interface CallToActionProps {
  buttonGradient?: string;
  mainheading: string;
}

export default function CallToAction({ 
  buttonGradient = "from-yellow-600 via-yellow-500 to-yellow-600",
  mainheading,
}: CallToActionProps) {
  return (
    <div className="w-full px-4 py-22">
      <div className="max-w-6xl mx-auto bg-linear-to-r from-black via-gray-900 to-gray-800 rounded-2xl p-12 shadow-xl">
        <h2 className="text-white text-4xl md:text-5xl font-semibold text-center mb-8">
          {mainheading}
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="relative bg-white text-black font-semibold px-8 py-4 rounded-lg overflow-hidden min-w-[200px] group transition-all duration-300">
            <span className={`absolute -inset-full bg-linear-to-br ${buttonGradient} translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-in-out origin-top-left`}></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Talk Now
            </span>
          </button>
          
          <button className="relative bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg overflow-hidden min-w-[200px] group">
            <span className="absolute -inset-full bg-white translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-in-out origin-top-left"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Send us a message
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}