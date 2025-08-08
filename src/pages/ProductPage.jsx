import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductModal from '../components/ProductModal';
import { allProducts } from '../data/products'; // Import the data from our new central file

const ProductPage = () => {
  const { category, subcategory } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const acronyms = ['HRFR', 'PVC', 'LED', 'COB'];
  const title = subcategory
    .split('-')
    .map(word =>
      acronyms.includes(word.toUpperCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');

  const pageTitle = `Buy ${title} Online | Luxbox India`;
  const pageDescription = `Explore the best ${title.toLowerCase()} from Luxbox. Find high-quality, reliable solutions for all your residential and commercial needs in India.`;

  // Filter the 'allProducts' list to find the ones for the current page
  const products = allProducts.filter(p => p.category === category && p.subcategory === subcategory);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-40">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-12">Browse our collection of {title}.</p>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="text-left bg-white rounded-lg shadow-lg p-6 border transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.spec}</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500 py-10">Products for this category are coming soon!</p>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductPage;