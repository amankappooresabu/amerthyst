import { useState, useEffect } from 'react';
import Navbar from "./sections/Navbar"
import SplashScreen from './sections/Splashscreen';
import Categories from './sections/Categories';
import Contact from './sections/Contact';
import Landing1 from './sections/Landing2.0';
import LogoNav from './sections/LogoNav';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar/>
      <LogoNav/>
      <Landing1/>
      <Categories/>
      <Contact/>
    </>
  );
}



export default App;