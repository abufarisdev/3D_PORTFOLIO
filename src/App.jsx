import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Education,
} from './components';

const App = () => {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setDevice(mediaQuery.matches ? 'mobile' : 'desktop');

    const handleResize = (e) => {
      setDevice(e.matches ? 'mobile' : 'desktop');
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pt-20">
          <Hero device={device} /> {/* ✅ Pass device prop */}
        </div>

        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


