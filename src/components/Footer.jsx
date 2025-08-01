import React from 'react';
import { Link } from 'react-router-dom';
import { IconMapPin, IconMail, IconPhone } from './Icons'; // Assuming these are your local icon components

const Footer = () => (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Luxbox */}
                <div className="md:col-span-1">
                    <img src="/Luxbox/luxboxlogo.png" alt="Luxbox Logo" className="h-12 w-auto mb-4" />
                    <p className="text-gray-400">Your trusted partner for high-quality lights, pipes, fittings, and wires since 2005.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                        <li><Link to="/support/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-200">Products</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/category/lights" className="text-gray-400 hover:text-white transition-colors">Lights</Link></li>
                        <li><Link to="/category/pipes" className="text-gray-400 hover:text-white transition-colors">Pipes & Fittings</Link></li>
                        <li><Link to="/category/wires" className="text-gray-400 hover:text-white transition-colors">Wires</Link></li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-200">Get in Touch</h4>
                    <ul className="mt-4 space-y-3">
                        {/* Map Link */}
                        <li>
                            <a
                                href="https://maps.app.goo.gl/5NGirLqFQsZDVKKZA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <IconMapPin className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                                <span>Plot No. 7, 7a, 7b Naya Gher, Jeoni Mandi, Agra, India</span>
                            </a>
                        </li>
                        {/* Email Link */}
                        <li>
                            <a
                                href="mailto:support@luxbox.in"
                                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <IconMail className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                                <span>support@luxbox.in</span>
                            </a>
                        </li>
                        {/* Phone Link */}
                        <li>
                            <a
                                href="tel:+918710017100"
                                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <IconPhone className="w-5 h-5 mt-1 text-orange-400 flex-shrink-0" />
                                <span>+91 87100 17100</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Luxbox.in. All Rights Reserved.</p>
                <p className="font-bold">A Miira Company</p>
            </div>
        </div>
    </footer>
);

export default Footer;