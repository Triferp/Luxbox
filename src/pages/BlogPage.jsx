import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { IconX } from '../components/Icons';

// --- Modal Component (No changes needed here) ---
const PostModal = ({ post, onClose }) => {
  // This stops the modal from closing when you click inside the content area
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in-fast"
    >
      <div
        onClick={handleContentClick}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-down"
      >
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-2xl" />
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
              <IconX className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          {/* The 'prose' class from TailwindCSS automatically styles the inner HTML tags */}
          <div className="prose max-w-none text-gray-700">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- MAIN BLOG PAGE ---
const BlogPage = () => {
  // --- UPDATED: Blog post data with new, structured content ---
  const posts = [
    {
      title: "5 Tips for Energy-Efficient Lighting in Your Home",
      excerpt: "Learn how to save money and reduce your carbon footprint with these simple lighting tips...",
      image: "/Blog/blog-light.png",
      date: "July 23, 2025",
      content: (
        <>
          <p>With electricity costs on the rise, making smart choices about your home's lighting can lead to significant savings. Energy-efficient lighting not only reduces your monthly bills but also lowers your carbon footprint. Here are five practical tips to illuminate your home smartly and sustainably.</p>

          <div className="h-4"></div> 
          <h3 className="font-bold">1. Make the Switch to LED</h3>
          <p>This is the single most effective change you can make. Modern LED bulbs use up to 85% less energy than traditional incandescent bulbs and can last 15-25 times longer. While the initial cost may be slightly higher, their long lifespan and energy savings make them a brilliant long-term investment.</p>

          <div className="h-4"></div> 
          <h3 className="font-bold">2. Embrace Smart Dimmers and Controls</h3>
          <p>Not every task requires full brightness. Installing dimmer switches allows you to adjust the light intensity to suit the mood and function, saving energy in the process. Smart lighting systems can even be programmed to dim automatically or be controlled from your phone.</p>

          <div className="h-4"></div> 
          <h3 className="font-bold">3. Use Motion Sensors for Automation</h3>
          <p>For areas where lights are often left on by mistake—like hallways, bathrooms, or outdoor security lights—motion sensors are a game-changer. They ensure light is only used when someone is present, eliminating wasted energy effortlessly.</p>

          <div className="h-4"></div> 
          <h3 className="font-bold">4. Maximize Natural Light</h3>
          <p>The cheapest light is free! Arrange your home to take full advantage of daylight. Use sheer curtains instead of heavy drapes, position mirrors to reflect light into darker corners, and choose lighter paint colors for your walls to create a brighter, more open space.</p>

          <div className="h-4"></div> 
          <h3 className="font-bold">5. Choose the Right Bulb for the Right Room</h3>
          <p>Think about how you use each space. A kitchen requires bright, clear light for tasks, while a bedroom benefits from softer, warmer light. Check the "lumens" (brightness) and "Kelvin" (color temperature) on the packaging to match the bulb to the room's purpose.</p>
        </>
      )
    },
    {
      title: "Choosing the Right Pipes for Your Plumbing Project",
      excerpt: "From PVC to Copper, we break down the pros and cons of different piping materials to help you make an informed decision.",
      image: "/Blog/blog-pipe.png",
      date: "June 7, 2025",
      content: (
        <>
            <p>When it comes to any plumbing project, the pipes you choose are the unsung heroes. The right piping system ensures a reliable, leak-free supply of water for years, while the wrong choice can lead to costly repairs. Understanding the materials is key.</p>

            <div className="h-4"></div>
            <p>The most common materials you'll encounter are PVC, CPVC, and Copper. Making the right choice involves balancing cost, durability, and the specific application within your home.</p>
            
            <div className="h-4"></div>
            <h3 className="font-extrabold">A Guide to Common Piping Materials:</h3>

            <div className="h-4"></div>
            <h4 className="font-bold">PVC (Polyvinyl Chloride)</h4>
            <p>A versatile and affordable option, PVC is primarily used for drainage, waste, and vent lines. It's lightweight and resistant to corrosion. However, standard PVC is not suitable for hot water lines as high temperatures can cause it to warp.</p>

            <div className="h-4"></div>
            <h4 className="font-bold">CPVC (Chlorinated Polyvinyl Chloride)</h4>
            <p>Think of CPVC as PVC's more robust sibling. It undergoes a chlorination process that allows it to withstand higher temperatures, making it an excellent choice for both hot and cold water supply lines inside the home. Its durability and resistance to chemical corrosion make it a popular all-around option.</p>

            <div className="h-4"></div>
            <h4 className="font-bold">Copper</h4>
            <p>For decades, copper has been the gold standard for residential plumbing due to its exceptional durability. It is naturally corrosion-resistant and can handle extreme temperatures. While it is a more premium option, its long lifespan often makes it a worthwhile investment.</p>

            <div className="h-4"></div>
            <h3 className="font-extrabold">Our Recommendation</h3>
            <p>For most modern homes, a combination of piping is often the most practical solution. Using PVC for drainage and CPVC for internal hot and cold water supply offers a perfect blend of performance and value. For expert advice tailored to your project, always consult with a trusted plumbing professional.</p>
        </>
      )
    },
    {
      title: "The Importance of High-Quality Electrical Wiring",
      excerpt: "Don't compromise on safety. Understand why investing in quality wiring is crucial for your home and business.",
      image: "/Blog/blog-wire.png",
      date: "May 18, 2025",
      content: (
        <>
            <p>Think of your home's electrical wiring as its central nervous system. It operates silently in the background, but its health is absolutely critical for the safety and functionality of your entire property. While it might be tempting to cut costs on things you can't see, compromising on wiring quality is a risk not worth taking.</p>

            <div className="h-4"></div>
            <h3 className="font-extrabold">Why Quality Matters:</h3>

            <div className="h-4"></div>
            <ul>
                <li><strong>Fire Safety:</strong> This is the most critical reason. Poor-quality or undersized wires can overheat under load, melting the insulation and creating a severe fire hazard. High-quality wires with proper insulation are your first line of defense against electrical fires.</li>
                <div className="h-4"></div>
                <li><strong>Appliance Protection:</strong> Inconsistent power delivery from faulty wiring can damage sensitive and expensive electronics like computers, TVs, and modern kitchen appliances over time.</li>
                <div className="h-4"></div>
                <li><strong>Future-Proofing:</strong> As we use more and more electronic devices, the demand on our home's electrical systems increases. Installing high-quality wiring with the appropriate gauge ensures your home can handle future electrical needs without requiring a major overhaul.</li>
            </ul>

            <div className="h-4"></div>
            <p>Always ensure your wiring is installed by a certified electrician and meets all local safety standards. It's not just an expense; it's a fundamental investment in the safety and security of your property and everyone in it.</p>
        </>
      )
    },
  ];

  // --- State to manage the selected post for the modal ---
  const [selectedPost, setSelectedPost] = React.useState(null);

  return (
    <div className="animate-fade-in">
      <div className="bg-orange-50 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Luxbox Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Insights, tips, and news from the world of electrical and plumbing solutions.</p>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogPostCard
                key={post.title}
                {...post}
                onReadMore={() => setSelectedPost(post)} // Pass the function to open the modal
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- Conditionally render the modal --- */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default BlogPage;
