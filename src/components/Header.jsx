import React from 'react';
import { Link } from 'react-router-dom';
// --- CHANGE 1: Added a new IconCog for the new category ---
import { IconChevronDown, IconMenu, IconX, IconSun, IconPipe, IconZap, IconCog, IconMail, IconUsers } from './Icons';

const Header = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isSupportOpen, setIsSupportOpen] = React.useState(false);
  
  const navLinkClasses = (page) => `py-2 px-3 rounded-lg text-base font-medium transition-colors duration-200 ${activePage.startsWith(page) ? 'bg-rose-50 text-black' : 'text-black hover:bg-slate-100'}`;
  const mobileNavLinkClasses = (page) => `block py-2 px-4 text-base font-medium rounded-lg transition-colors ${activePage.startsWith(page) ? 'bg-rose-50 text-black' : 'text-black hover:bg-slate-100'}`;

  return (
    <header className="bg-white backdrop-blur-lg shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0"><img src="/Luxbox/luxboxlogo.png" alt="Luxbox Logo" className="h-10 w-auto" /></Link>
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className={navLinkClasses('home')}>Home</Link>
            <div className="relative" onMouseEnter={() => setIsCategoryOpen(true)} onMouseLeave={() => setIsCategoryOpen(false)}>
              <span className={`${navLinkClasses('category')} flex items-center cursor-pointer`}>Category <IconChevronDown className="w-4 h-4 ml-1" /></span>
              {isCategoryOpen && (
                <div className="absolute top-full w-56 bg-gray-50 rounded-lg shadow-xl p-2 animate-fade-in-fast">
                  <Link to="/category/lights" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconSun className="w-5 h-5 mr-3 text-gray-500" />Lights</Link>
                  <Link to="/category/switches-and-gears" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconCog className="w-5 h-5 mr-3 text-gray-500" />Switches & Gears</Link>
                  <Link to="/category/wires" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconZap className="w-5 h-5 mr-3 text-gray-500" />Wires</Link>
                  <Link to="/category/pipes" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconPipe className="w-5 h-5 mr-3 text-gray-500" />Pipes and Fittings</Link>
                </div>
              )}
            </div>
            <Link to="/catalogue" className={navLinkClasses('catalogue')}>Catalogue</Link>
            <Link to="/blog" className={navLinkClasses('blog')}>Blog</Link>
            <Link to="/about" className={navLinkClasses('about')}>About Us</Link>
            <div className="relative" onMouseEnter={() => setIsSupportOpen(true)} onMouseLeave={() => setIsSupportOpen(false)}>
              <span className={`${navLinkClasses('support')} flex items-center cursor-pointer`}>Support <IconChevronDown className="w-4 h-4 ml-1" /></span>
              {isSupportOpen && (
                <div className="absolute top-full w-40 bg-gray-50 rounded-lg shadow-xl p-2 animate-fade-in-fast">
                  <Link to="/support/contact" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconMail className="w-5 h-5 mr-3 text-gray-500" />Contact Us</Link>
                  <Link to="/support/dealership" className="flex items-center w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-pink-100 transition-colors duration-150"><IconUsers className="w-5 h-5 mr-3 text-gray-500" />Dealership</Link>
                </div>
              )}
            </div>
          </nav>
          <div className="md:hidden"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">{isMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}</button></div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in-down overflow-visible">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('home')}>Home</Link>
            <div>
              <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className={`${mobileNavLinkClasses('category')} w-full text-left flex justify-between items-center`}>Category <IconChevronDown className={`w-5 h-5 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} /></button>
              {isCategoryOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link to="/category/lights" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('category/lights')}>Lights</Link>
                  <Link to="/category/switches-and-gears" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('category/switches-and-gears')}>Switches and Gears</Link>
                  <Link to="/category/wires" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('category/wires')}>Wires</Link>
                   {/* --- CHANGE 3: Added new link for Mobile view --- */}
                  <Link to="/category/pipes" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('category/pipes')}>Pipes & Fittings</Link>
                </div>
              )}
            </div>
            <Link to="/catalogue" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('catalogue')}>Catalogue</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('blog')}>Blog</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('about')}>About Us</Link>
            <div>
              <button onClick={() => setIsSupportOpen(!isSupportOpen)} className={`${mobileNavLinkClasses('support')} w-full text-left flex justify-between items-center`}>Support <IconChevronDown className={`w-5 h-5 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} /></button>
              {isSupportOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link to="/support/contact" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('support/contact')}>Contact Us</Link>
                  <Link to="/support/dealership" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('support/dealership')}>Dealership</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;