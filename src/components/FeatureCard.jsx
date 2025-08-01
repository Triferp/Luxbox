import React from 'react';
import IconWrapper from './IconWrapper';
import { useInView } from 'react-intersection-observer'; // Import the hook

const FeatureCard = ({ icon, title, description }) => {
  // Set up the observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only happen once
    threshold: 0.1,    // Trigger when 10% of the card is visible
  });

  return (
    // Add the ref and conditional classes
    <div 
      ref={ref} 
      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 scroll-animate ${
        inView ? 'scroll-animate-end' : 'scroll-animate-start'
      }`}
    >
      <IconWrapper icon={icon} className="mb-4" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;