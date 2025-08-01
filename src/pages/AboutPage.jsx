import React from 'react';

const AboutPage = () => (
    <div className="animate-fade-in">
        <div className="bg-blue-50 pt-32 pb-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800">About Luxbox</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We are pioneers in manufacturing high-quality electrical and plumbing solutions, committed to innovation, durability, and customer satisfaction.</p>
            </div>
        </div>

        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 leading-snug">Our Journey: Powering Progress Since 2019</h2>
                    <p className="mt-4 text-gray-600">Founded on the principle of delivering excellence, Luxbox began its journey with a small team of passionate engineers. Today, we have grown into a leading name in the industry, known for our unwavering commitment to quality and our extensive portfolio of products that cater to a modern, developing world.</p>
                    <p className="mt-4 text-gray-600"><strong>Luxbox</strong> is a proud brand of <strong>Miira Lights</strong>, purposefully established to meet the growing demand for specialized, high-performance lighting solutions. Drawing upon Miira’s decades of manufacturing excellence, we combine proven reliability with forward-thinking design in every product. Our core motive is to consistently serve our valued customers and extensive dealer network with superior lighting that inspires confidence. Every Luxbox item is therefore a testament to our unwavering commitment to quality, innovation, and exceptional service in the lighting industry.</p>
                    <p className="mt-4 text-gray-600">Our mission is to create products that are not only technologically advanced but also environmentally responsible. We believe in sustainable growth and are constantly innovating to reduce our carbon footprint and promote energy efficiency.</p>
                </div>
                <div>
                    <img src="/AboutUs/about-us.png" alt="Luxbox Factory" className="rounded-2xl shadow-xl w-full" />
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;