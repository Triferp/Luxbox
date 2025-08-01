import React from 'react';
import { IconChevronsRight } from './Icons';

// We are adding a new 'onReadMore' prop
const BlogPostCard = ({ image, title, excerpt, date, onReadMore }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{excerpt}</p>
            {/* This is now a button that triggers the onReadMore function */}
            <button onClick={onReadMore} className="inline-block mt-4 font-semibold text-orange-500 hover:text-orange-600 transition-colors">
              Read More <IconChevronsRight className="inline w-4 h-4" />
            </button>
        </div>
    </div>
);

export default BlogPostCard;