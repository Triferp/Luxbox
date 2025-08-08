import React from 'react';

const IconX = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fade-in-fast p-4" onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-11/12 max-w-3xl p-8 transform transition-all animate-slide-up max-h-[90vh] overflow-y-auto"        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition"
        >
          <IconX className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} loading="lazy" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.spec}</p>

            {/* --- REPLACED FEATURES LIST WITH SPECIFICATIONS TABLE --- */}
            {/* Check if specifications exist before trying to render the table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                <table className="w-full text-sm text-left">
                  <tbody>
                    {/* Map over the specifications array to create a row for each item */}
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-2 pr-4 font-medium text-gray-700">{spec.label}</td>
                        <td className="py-2 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {/* --- END OF TABLE --- */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;