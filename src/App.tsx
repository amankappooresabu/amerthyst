import { useState, useEffect } from 'react';
import Landing from "./sections/Landing"
import Navbar from "./sections/Navbar"
import SplashScreen from './sections/Splashscreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 5 seconds - adjust based on your video length

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar/>
      <Landing/>
    </>
  );
}



export default App;