import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, category, to }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Link to={to} className="block group">
      <div
        ref={ref}
        className={`bg-white rounded-2xl shadow-md overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl scroll-animate ${
          inView ? 'scroll-animate-end' : 'scroll-animate-start'
        }`}
      >
        <div className="relative overflow-hidden">
          <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="p-4 bg-white">
          <p className="text-sm text-orange-500 font-semibold">{category}</p>
          <h4 className="text-lg font-bold text-gray-800 mt-1">{name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;