import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';

/**
 * A reusable component to animate a number from 0 to a target value.
 * @param {object} props - The component's props.
 * @param {number} props.to - The target number to count up to.
 */
const AnimatedCounter = ({ to }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    
    // Animate from 0 to the target number
    const controls = animate(0, to, {
      duration: 2, // Animation duration in seconds
      ease: "easeOut", // Makes the animation slow down at the end
      onUpdate(value) {
        // On each animation frame, update the text content
        node.textContent = Math.round(value).toLocaleString();
      }
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => controls.stop();
  }, [to]); // Rerun the effect if the target number changes

  return <span ref={nodeRef}>0</span>;
};


/**
 * The main section component that displays key company statistics.
 * It uses Intersection Observer to trigger the animations only when visible.
 */
const StatsSection = () => {
  // The useInView hook tells us when the component is visible on the screen.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: 200,
      suffix: '+',
      label: 'Dealers Nationwide',
    },
    {
      number: 10000,
      suffix: '+',
      label: 'Happy Customers',
    },
    {
      number: new Date().getFullYear() - 2019,
      suffix: '+',
      label: 'Years of Experience',
    },
  ];

  return (
    // UPDATED: Changed padding to pt-20 pb-28 for more bottom space
    // and updated background and text colors for a dark theme.
    <div ref={ref} className="py-10 mb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-5xl font-bold text-pink-500">
                {inView ? <AnimatedCounter to={stat.number} /> : '0'}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-lg text-pink-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
