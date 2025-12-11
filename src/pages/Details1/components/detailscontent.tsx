import { useState } from 'react'
import './detailscontent.scss'

const productsData = [
  {
    id: 1,
    category: 'Spices (Whole)',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80',
    products: ['Turmeric Fingers', 'Black Pepper', 'Cumin Seeds', 'Coriander Seeds', 'Fennel Seeds', 'Cardamom (Green/Black)', 'Cloves', 'Cinnamon', 'Star Anise', 'Mustard Seeds', 'Fenugreek Seeds', 'Nutmeg', 'Mace', 'Bay Leaf']
  },
  {
    id: 2,
    category: 'Spices (Powders)',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80',
    products: ['Turmeric Powder', 'Red Chili Powder', 'Coriander Powder', 'Cumin Powder', 'Pepper Powder', 'Kashmiri Chili', 'Sambar Powder', 'Rasam Powder']
  },
  {
    id: 3,
    category: 'Blends / Masalas',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80',
    products: ['Garam Masala', 'Chicken Masala', 'Fish Masala', 'Biriyani Masala', 'Curry Powder', 'Tandoori Masala', 'Chaat Masala']
  },
  {
    id: 4,
    category: 'Dehydrated & Powdered Foods',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=80',
    products: ['Onion Powder', 'Onion Flakes', 'Garlic Powder', 'Garlic Granules', 'Tomato Powder', 'Ginger Powder', 'Lemon Powder', 'Mango Powder (Amchur)']
  },
  {
    id: 5,
    category: 'Processed Foods',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    products: ['Ready Mixes (Dosa, Idli, Vada)', 'Instant Curries', 'Instant Gravies', 'Pickles', 'Sauces', 'Pastes (Ginger-Garlic Paste)']
  },
  {
    id: 6,
    category: 'Staples & Grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
    products: ['Basmati Rice', 'Non-Basmati Rice', 'Idli Rice', 'Wheat Flour', 'Maida', 'Chickpeas', 'Lentils (Toor, Moong, Masoor)', 'Red Kidney Beans (Rajma)']
  },
  {
    id: 7,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
    products: ['Tea (CTC & Orthodox)', 'Coffee (Robusta/Arabica)', 'Instant Coffee', 'Fruit Syrups', 'Concentrates', 'Energy Drinks (OEM/Private Label)']
  },
  {
    id: 8,
    category: 'Snacks & Confectionery',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&q=80',
    products: ['Namkeen', 'Sev', 'Fryums', 'Biscuits', 'Cookies', 'Cakes', 'Chocolates']
  },
  {
    id: 9,
    category: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80',
    products: ['Mango', 'Banana', 'Tomato', 'Onion', 'Pomegranate', 'Grapes', 'Ginger', 'Drumstick']
  }
]

export default function Details1Content() {
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
                    <div className="products-preview">
                      {item.products.slice(0, 4).map((product, idx) => (
                        <span key={idx} className="product-tag">{product}</span>
                      ))}
                    </div>
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