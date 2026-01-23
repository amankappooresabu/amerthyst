import ExportCard from './exportcard';
import './exportlogistics.scss';

export interface ExportCapability {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ExportLogisticsProps {
  exportCapabilities: ExportCapability[];
  headingColor?: string;
}

export default function ExportLogistics({ exportCapabilities, headingColor='text-[2c2c2c]' }: ExportLogisticsProps) {
  return (
    <section className="export-logistics">
      <h2 className={`section-title ${headingColor}`}>Export Capabilities</h2>
      <div className="export-logistics__grid">
        {exportCapabilities.map((capability) => (
          <ExportCard
            key={capability.id}
            title={capability.title}
            description={capability.description}
            image={capability.image}
          />
        ))}
      </div>
    </section>
  );
}