import { useState, useEffect } from 'react';
import SplashScreen from './sections/Splashscreen';
import Landing1 from './sections/Landing2.0';
import LogoNav from './sections/LogoNav';
import Navbar2 from './sections/Navbar2.0';
import Categories from './sections/Categories2.0';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailspage1 from './pages/Details1/detailspage1'


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
    <BrowserRouter>
      <Navbar2/>
      <LogoNav/>
       <Routes>
     <Route path="/" element={
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Landing1/>
            <Categories/>
          </div>
        } />
        <Route path="/detail1" element={<Detailspage1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;