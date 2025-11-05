import '../styles/Landing.scss';
import { cardData } from '../constants/CardData';



export default function Landing1() {
    return (
        <div className="landing-container">
            <div className="background-image-wrapper">
                <img src="/bg2.png" alt="Background" />
            </div>
            
            <h1 className="brand-title">Purple Sky Trade</h1>
            
            <div className="glass-cards-container">
                {cardData.map((card, index) => {
                    return (
                        <div key={index} className="glass-card">
                            <div className="card-badge">{card.badge}</div>
                            <div className="card-icon"style={{
        backgroundImage: `url(${card.img})`
      }}/>
                                
                            <h3 className="card-title">{card.title}</h3>
                        </div>
                    );
                })}
            </div>
            
            <div className="gradient-overlay" />
        </div>
    )
}