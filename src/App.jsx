import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense, lazy } from 'react'; // <-- 1. IMPORT Suspense and lazy
import { Routes, Route, useLocation } from 'react-router-dom';

// Component Imports (These are part of the main layout, so they are not lazy-loaded)
import Header from './components/Header';
import Footer from './components/Footer';

// 2. DYNAMICALLY IMPORT your page components
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CataloguePage = lazy(() => import('./pages/CataloguePage'));

// 3. CREATE a fallback component to show while pages load
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    <p>Loading...</p>
  </div>
);

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
      <SpeedInsights />
      <Header activePage={activePage} />
      <main>
        {/* 4. WRAP your Routes in the Suspense component */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category/:subcategory" element={<ProductPage />} />
            <Route path="/category/:name" element={<CategoryPage key={location.pathname} />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support/:subpage" element={<SupportPage key={location.pathname} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
