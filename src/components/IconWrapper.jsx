import React from 'react';

const IconWrapper = ({ icon: Icon, className }) => (
    <div className={`inline-flex items-center justify-center p-3 bg-orange-100 text-orange-500 rounded-full ${className}`}>
        <Icon className="w-6 h-6" />
    </div>
);

export default IconWrapper;