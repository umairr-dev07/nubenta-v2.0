import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import BookDemo from './pages/BookDemo';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-950 text-white min-h-screen selection:bg-purple-500/30 selection:text-purple-200">
        <CursorTrail />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/book-demo" element={<BookDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;