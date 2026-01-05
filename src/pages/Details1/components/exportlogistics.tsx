// components/ExportLogistics.tsx
import ExportCard from './exportcard';
import { exportCapabilities } from '../constants/export';
import './exportlogistics.scss';

export default function ExportLogistics() {
  return (
    <section className="export-logistics">
      <h2 className="section-title">Export Capabilities</h2>
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