import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import { IconSun, IconWrench, IconZap } from '../components/Icons';
import FeaturedProductCard from '../components/FeaturedProductCard.jsx';
import StatsSection from '../components/StatsSection';

const featuredProducts = [
  { id: 1, name: 'Don Track Light', image: '/HomePage/FeaturedProducts/Don Track.png', link: '/category/lights/orion-floodlight' },
  { id: 2, name: 'Sharp COB Downlight', image: '/HomePage/FeaturedProducts/Sharp.png', link: '/category/wires/everlast-shielded' },
  { id: 3, name: 'Venus Street Light', image: '/HomePage/FeaturedProducts/Street.png', link: '/category/fittings/nova-pro' },
  { id: 4, name: 'Strip Rope Light', image: '/HomePage/FeaturedProducts/Rope Light.png', link: '/category/pipes/flexicore-pvc' },
  { id: 5, name: 'Grace COB Downlight', image: '/HomePage/FeaturedProducts/grace COB.png', link: '/category/lights/orion-floodlight' },
  { id: 6, name: 'Lexa Plate', image: '/HomePage/FeaturedProducts/Lexa Plate.png', link: '/category/lights/aura-pendant' }
];

const HomePage = ({ navigate }) => {
  // --- START: ROBUST SCROLLING LOGIC ---
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth);
    }
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector(':scope > div > div:first-child');
      if (firstCard) {
        const scrollAmount = firstCard.offsetWidth;
        scrollContainerRef.current.scrollBy({
          left: direction === 'right' ? scrollAmount : -scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };
  
  // Check scrollability on mount and on resize
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    checkScrollability(); // Check initially
    scrollContainer.addEventListener('scroll', checkScrollability); // Check when scrolling
    window.addEventListener('resize', checkScrollability); // Check when resizing window

    return () => {
      scrollContainer.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);
  // --- END: ROBUST SCROLLING LOGIC ---

  // Hero Slideshow logic remains unchanged
  const slides = [
    { image: '/HomePage/HeroSlideshow/hero-lights.png', headline: 'Lighting Up Your World with Quality', subtext: 'Where innovative design meets illumination.' },
    { image: '/HomePage/HeroSlideshow/hero-pipes.jpg', headline: 'Engineered for Unmatched Durability', subtext: 'The foundation of a reliable home and industry.' },
    { image: '/HomePage/HeroSlideshow/hero-wires.png', headline: 'The Future is Connected & Safe', subtext: 'Powering your world with absolute peace of mind.' },
    { image: '/HomePage/HeroSlideshow/hero-switches1.png', headline: 'Precision Control and Elegant Design', subtext: 'The perfect switch for every space.' },
  ];
  const [heroCurrentIndex, setHeroCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="animate-fade-in">
      <section className="relative h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">
        {slides.map((slide, index) => (
          <div key={slide.image} className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[2000ms] ${index === heroCurrentIndex ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${slide.image})` }} />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute w-full left-0 transition-opacity duration-1000 ${index === heroCurrentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{slide.headline}</h1>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wider opacity-90">{slide.subtext}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (<button key={index} onClick={() => setHeroCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === heroCurrentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}`} />))}
        </div>
      </section>      

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/catalogue" className="w-full sm:w-auto bg-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">Explore All Products</Link>
            <Link to="/support/contact" className="w-full sm:w-auto bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-300">Contact Us</Link>
          </div>

          <StatsSection />
          
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Core Categories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">From illuminating spaces to ensuring seamless connections, our products are engineered for excellence.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard image="/HomePage/CoreCategory/category-light.png" name="Modern Lighting Solutions" category="Lights" to="/category/lights" />
            <ProductCard image="/HomePage/CoreCategory/category-wires.png" name="Wiring for Modern Homes" category="Wires" to="/category/wires" />
            <ProductCard image="/HomePage/CoreCategory/category-switches.png" name="High Quality Switches and Gears" category="Switches and Gears" to="/category/switches-and-gears" />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-pink-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left text-gray-800 mb-12">Featured Products</h2>
        </div>
        
        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          
          <div ref={scrollContainerRef} className="overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex w-max px-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="px-3 w-72 md:w-80 flex-shrink-0">
                  <FeaturedProductCard product={product} navigate={navigate} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Luxbox?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={IconSun} title="Innovative Technology" description="We utilize the latest technology to create energy-efficient and long-lasting lighting solutions." />
            <FeatureCard icon={IconWrench} title="Unmatched Durability" description="Our pipes, fittings, and wires are manufactured to withstand the toughest conditions, ensuring reliability." />
            <FeatureCard icon={IconZap} title="Safety First" description="All our products meet rigorous safety standards, giving you peace of mind for every installation." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;