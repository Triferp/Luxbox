import React from 'react';

// Note we've added bgColor as a prop, with a default value of 'bg-white'
const FeaturedProductCard = ({ product, navigate, bgColor = 'bg-white' }) => (
  <div
    onClick={() => navigate(product.link)}
    // The bgColor prop is now used here dynamically
    className={`group/card relative h-80 w-64 cursor-pointer overflow-hidden rounded-lg shadow-xl ${bgColor}`}
  >
    {/* The Image zooms slightly on hover */}
    <img
      src={product.image}
      alt={product.name}
      className="h-full w-full object-contain transition-transform duration-300 ease-in-out group-hover/card:scale-110"
    />

    {/* This is the container for the text that slides up */}
    <div
      className="absolute bottom-0 left-0 right-0 translate-y-full transform bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-500 ease-in-out group-hover/card:translate-y-0"
    >
      <h3 className="text-xl font-bold text-white">
        {product.name}
      </h3>
    </div>
  </div>
);

export default FeaturedProductCard;