import { useState, useEffect } from 'react';
import Navbar from "./sections/Navbar"
import SplashScreen from './sections/Splashscreen';
import Landing from './sections/Landing';
import Categories from './sections/Categories';
import Contact from './sections/Contact';

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
      <Landing/>
      <Categories/>
      <Contact/>
    </>
  );
}



export default App;