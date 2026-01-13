import { useState, useEffect } from 'react';
import SplashScreen from './sections/Splashscreen';
import Landing1 from './sections/Landing2.0';
import LogoNav from './sections/LogoNav';
import Navbar2 from './sections/Navbar2.0';
import Categories from './sections/Categories2.0';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detailspage1 from './pages/Details1/detailspage1'
import DetailsPage2 from './pages/Details2/detailspage2';
import Detailspage3 from './pages/Details3/detailspage3';
import Detailspage4 from './pages/Details4/detailspage4';
import Detailspage5 from './pages/Details5/detailspage5';
import Detailspage6 from './pages/Details6/detailspage6';
import Detailspage7 from './pages/Details7/detailspage7';
import Detailspage8 from './pages/Details8/detailspage8';


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
        <Route path="/global-taste-and-culinar-exports" element={<Detailspage1/>} />
        <Route path="/botanical-and-bioactive-ingredients" element={<DetailsPage2/>} />
        <Route path="/agro-and-plantation-commodities" element={<Detailspage3/>} />
        <Route path="/nutraceutical-and-functional-activities" element={<Detailspage4/>} />
        <Route path="/wellness-and-ayurveda" element={<Detailspage5/>} />
        <Route path="/marine-and-protein-supply" element={<Detailspage6/>} />
        <Route path="/beauty-spa-and-personal-care-inputs" element={<Detailspage7/>} />
        <Route path="/eco-and-sustainable-innovations" element={<Detailspage8/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;