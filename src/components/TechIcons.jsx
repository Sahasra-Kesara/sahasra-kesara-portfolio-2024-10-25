import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'; // Import the icons you want to use
import './style.css'; // Adjust the path according to your structure

const TechIcons = () => {
    const icons = [
        <FaHtml5 className="text-4xl text-orange-500" />,
        <FaCss3Alt className="text-4xl text-blue-500" />,
        <FaJs className="text-4xl text-yellow-500" />,
        <FaReact className="text-4xl text-cyan-500" />,
        <FaNodeJs className="text-4xl text-green-500" />,
        <FaDatabase className="text-4xl text-blue-800" />,
    ];

    return (
        <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {icons.map((icon, index) => (
                    <div key={index} className="mx-4">
                        {icon}
                    </div>
                ))}
                {/* Repeat icons for continuous effect */}
                {icons.map((icon, index) => (
                    <div key={`repeat-${index}`} className="mx-4">
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechIcons;
