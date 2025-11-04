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
            
            
        </div>
    )
}