import './CategoryCard.scss';

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div 
      className="category-card"
      style={{
        backgroundImage: `url(${category.image})`
      }}
    >
      <div className="category-card__content">
        <h3 className="category-card__name">{category.name}</h3>
        <button className="category-card__button">Learn More</button>
      </div>
    </div>
  );
}