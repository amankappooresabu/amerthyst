interface CertificationProps {
  name: string;
  image: string;
}

const certifications = [
  { id: 1, name: "FSSAI", image: "/certificates/cert14.png" },
  { id: 2, name: "APEDA", image: "/certificates/cert2.png" },
  { id: 3, name: "ISO", image: "/certificates/cert8.png" },
  { id: 4, name: "HACCP", image: "/certificates/cert12.png" }
];


// Reusable Certification Card Component
function CertificationCard({ name, image }: CertificationProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center min-w-[120px]">
      <div className="w-16 h-16 mb-2 flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
      <p className="text-gray-800 font-semibold text-sm text-center">{name}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Certifications Section */}
          <div className="flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">Certifications</h3>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <CertificationCard 
                  key={cert.id}
                  name={cert.name}
                  image={cert.image}
                />
              ))}
            </div>
          </div>

          {/* Shipping Section */}
          <div className="flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">Shipping</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-white text-4xl font-bold mb-2">45+</p>
              <p className="text-white text-lg">Countries Worldwide</p>
            </div>
          </div>

          {/* MOQ Section */}
          <div className="flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">MOQ</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-white text-xl font-semibold mb-2">100 kg</p>
              <p className="text-white text-sm">Minimum Order</p>
              <div className="mt-3 pt-3 border-t border-white/30">
                <p className="text-white text-sm">Full Container Loads Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}