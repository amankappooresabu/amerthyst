import { useState, useEffect } from 'react';
import SplashScreen from './sections/Splashscreen';
import Categories from './sections/Categories';
import Contact from './sections/Contact';
import Landing1 from './sections/Landing2.0';
import LogoNav from './sections/LogoNav';
import Navbar2 from './sections/Navbar2.0';

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
      <Navbar2/>
      <LogoNav/>
      <Landing1/>
      <Categories/>
      <Contact/>
    </>
  );
}



export default App;