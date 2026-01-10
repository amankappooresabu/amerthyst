import { useState } from 'react'
import './detailscontent.scss'

// Define the type for product data
export interface ProductData {
  id: number
  category: string
  description: string
  image: string
  products: string[]
}

interface DetailsContentProps {
  productsData: ProductData[]
}

export default function DetailsContent({ productsData }: DetailsContentProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const handleExplore = (cardId: number) => {
    setFlippedCards(prev => new Set(prev).add(cardId))

    setTimeout(() => {
      setFlippedCards(prev => {
        const newSet = new Set(prev)
        newSet.delete(cardId)
        return newSet
      })
    }, 3000)
  }

  return (
    <div className="details1-content">
      <div className="content-wrapper">
        <h2 className="section-title">Our Products</h2>

        <div className="products-grid">
          {productsData.map((item) => (
            <div key={item.id} className={`product-card ${flippedCards.has(item.id) ? 'flipped' : ''}`}>
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img src={item.image} alt={item.category} className="card-bg-image" />
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3 className="category-title">{item.category}</h3>
                    <p className="category-description">{item.description}</p>
                    <button
                      className="explore-btn"
                      onClick={() => handleExplore(item.id)}
                    >
                      Explore
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <img src={item.image} alt={item.category} className="card-bg-image" />
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3 className="category-title">{item.category}</h3>
                    <div className="products-full">
                      {item.products.map((product, idx) => (
                        <span key={idx} className="product-tag">{product}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}