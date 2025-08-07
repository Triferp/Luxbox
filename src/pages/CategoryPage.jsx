import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { name } = useParams();

  const categoryData = {
    lights: {
      title: "Our Lighting Collection",
      description: "Illuminate your space with our wide range of innovative and energy-efficient lighting solutions.",
      bgColor: "bg-orange-100",
    },
    pipes: {
      title: "Pipes and Fittings",
      description: "Discover durable and reliable pipes for all your plumbing and industrial needs.",
      bgColor: "bg-orange-100",
    },
    wires: {
      title: "Electrical Wires & Cables",
      description: "Safe, reliable, and high-performance wires for residential, commercial, and industrial applications.",
      bgColor: "bg-orange-100",
    },
    'switches-and-gears': {
      title: "Switches and Gears",
      description: "Reliable and high-performance switches and gears for all your electrical control needs.",
      bgColor: "bg-orange-100",
    },
  };

  const subcategories = {
    lights: [
      { id: 1, name: "LED Panel Lights", slug: "led-panel-lights", image: "/CategoryPage/light-pc-1.png" },
      { id: 2, name: "Outdoor Lights", slug: "outdoor-lights", image: "/CategoryPage/light-pc-4.png" },
      { id: 3, name: "Profile Lights", slug: "profile-lights", image: "/CategoryPage/light-pc-3.png" },
      { id: 4, name: "COB Downlights", slug: "cob-downlights", image: "/CategoryPage/light-pc-2.png" },
      { id: 5, name: "Strip Light and Drivers", slug: "strip-light-drivers", image: "/CategoryPage/light-pc-5.png" }
    ],
    pipes: [],
    wires: [
      { id: 6, name: "HRFR PVC Insulated Cables", slug: "hrfr-pvc-cables", image: "/CategoryPage/wires-pc-1.png" },
    ],
    'switches-and-gears': [
      { id: 7, name: "Modular Switches Accessories", slug: "modular-switches-accessories", image: "/CategoryPage/switch-pc-1.png" },
      { id: 8, name: "Switch Gears", slug: "switch-gears", image: "/CategoryPage/switch-pc-2.png" },
    ]
  };

  const currentCategoryData = categoryData[name];
  const currentSubcategories = subcategories[name] || [];

  if (!currentCategoryData) return <div className="py-40 text-center">Category not found.</div>;

  const IconClock = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="animate-fade-in">
      <div className={`${currentCategoryData.bgColor} pt-32 pb-16 transition-colors duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">{currentCategoryData.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{currentCategoryData.description}</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {name === 'pipes' ? (
            <div className="text-center py-10 border-2 border-gray-300 rounded-lg">
              <IconClock className="w-12 h-12 mx-auto text-gray-400" />
              <h2 className="mt-4 text-2xl font-bold text-gray-600">Coming Soon</h2>
              <p className="mt-2 text-gray-500">Our new collection of Pipes & Fittings is under development.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSubcategories.map(sub => (
                // --- CARD CODE STARTS HERE ---
                <Link
                  key={sub.id}
                  to={`/category/${name}/${sub.slug}`}
                  className="group relative block h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  {/* 1. The background image (no longer has opacity) */}
                  <img
                    alt={sub.name}
                    src={sub.image}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* 2. NEW: The dark overlay to make text readable */}
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* 3. The text container, now centered */}
                  <div className="relative flex h-full flex-col items-center justify-center text-center px-6 py-6 pb-2 pt-10">
                    <h3 className="text-2xl font-bold text-white transform transition-transform duration-300 group-hover:scale-105">
                      {sub.name}
                    </h3>
                    
                    <div className="mt-4 opacity-0 transform transition-all duration-300 group-hover:opacity-100">
                      <p className="text-lg text-white font-semibold">View Products &rarr;</p>
                    </div>
                  </div>
                </Link>
                // --- CARD CODE ENDS HERE ---
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;