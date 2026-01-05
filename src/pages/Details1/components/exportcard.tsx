import './exportcard.scss';

interface ExportCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ExportCard({ title, description, image }: ExportCardProps) {
  return (
    <div className="export-card">
      <div className="export-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="export-card__content">
        <h3 className="export-card__title">
          {title}
        </h3>
        <p className="export-card__description">{description}</p>
      </div>
    </div>
  );
}