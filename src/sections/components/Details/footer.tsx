interface CertificationProps {
  name: string;
  image: string;
}

interface Certification extends CertificationProps {
  id: number;
}

interface FooterSection {
  id: number;
  title: string;
  type: 'certifications' | 'stat' | 'info';
  data: string | number | CertificationsData | StatData | InfoData; 
}

interface CertificationsData {
  items: Certification[];
}

interface StatData {
  value?: string | number;
  suffix?: string;
  label: string;
}

interface InfoData {
  primaryText?: string;
  secondaryText?: string;
  additionalText?: string;
}

interface FooterProps {
  sections: FooterSection[];
  backgroundGradient?: string;
}


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
      <p className="text-white font-semibold text-sm text-center">{name}</p>
    </div>
  );
}

export default function Footer({ 
  sections,
  backgroundGradient = "from-yellow-600 via-yellow-500 to-yellow-600" 
}: FooterProps) {
  const renderSection = (section: FooterSection) => {
    switch (section.type) {
      case 'certifications':
        { const certData = section.data as CertificationsData;
        return (
          <div className="grid grid-cols-2 gap-3">
            {certData.items.map((cert) => (
              <CertificationCard 
                key={cert.id}
                name={cert.name}
                image={cert.image}
              />
            ))}
          </div>
        ); }
      
      case 'stat':
        { const statData = section.data as StatData;
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-white text-4xl font-bold mb-2">
              {statData.value}{statData.suffix}
            </p>
            <p className="text-white text-lg">{statData.label}</p>
          </div>
        ); }
      
      case 'info':
        { const infoData = section.data as InfoData;
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-white text-xl font-semibold mb-2">{infoData.primaryText}</p>
            <p className="text-white text-sm">{infoData.secondaryText}</p>
            {infoData.additionalText && (
              <div className="mt-3 pt-3 border-t border-white/30">
                <p className="text-white text-sm">{infoData.additionalText}</p>
              </div>
            )}
          </div>
        ); }
      
      default:
        return null;
    }
  };

  return (
    <footer className={`w-full bg-linear-to-r ${backgroundGradient} py-12 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col">
              <h3 className="text-white text-2xl font-bold mb-4">{section.title}</h3>
              {renderSection(section)}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}