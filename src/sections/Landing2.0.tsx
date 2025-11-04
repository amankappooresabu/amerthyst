import Spline from '@splinetool/react-spline';
import '../styles/Landing.scss';

export default function Landing1() {
    return (
        <div className="landing-container">
            <div className="spline-background">
                <Spline
                    scene="https://prod.spline.design/OlHtpmgzF5nZzi52/scene.splinecode" 
                />
                <div className="watermark-cover"></div>
            </div>
            <div className="brand-section">
  <h1 className="brand-title-text">Purple Sky Trade</h1>
  <p className="brand-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <button className="learn-more-btn">Learn More</button>
</div>
            
        </div>
    )
}