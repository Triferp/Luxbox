import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage'; // <-- 1. IMPORT the new page
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import BlogPage from './pages/BlogPage';
import CataloguePage from './pages/CataloguePage';

function App() {
  const location = useLocation();
  const activePage = location.pathname.split('/')[1] || 'home';

  // This effect to scroll to top is great, leave it as is.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white">
      <Analytics />
      <Header activePage={activePage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* --- ROUTING CHANGES --- */}
          {/* 2. ADD the new, more specific route for the product pages. */}
          {/* This will handle URLs like /category/lights/cob-downlights */}
          <Route path="/category/:category/:subcategory" element={<ProductPage />} />

          {/* This existing route will continue to handle the main category pages */}
          <Route path="/category/:name" element={<CategoryPage key={location.pathname} />} />
          {/* --- END OF CHANGES --- */}
          
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support/:subpage" element={<SupportPage key={location.pathname} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;