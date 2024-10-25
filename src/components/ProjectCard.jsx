import React, { useRef } from 'react';
import { FaGithub, FaBehance, FaFigma } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const ProjectCard = ({ title, description, figmaLink, behanceLink, githubLink, techLogos }) => {
  const { isDarkMode } = useTheme();
  
  // Motion values for tilting effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseY * 20); // Adjust the multiplier for tilt intensity
    y.set(mouseX * 20); // Adjust the multiplier for tilt intensity
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`border-l-8 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ${
        isDarkMode ? 'bg-gray-800 text-gray-100 border-blue-900' : 'bg-gradient-to-r from-white via-blue-50 to-blue-50 border-blue-300 text-gray-900'
      }`}
    >
      <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-blue-600' : ''}`}>{title}</h2>
      <p className="mb-4">{description}</p>

      <p className="mb-4 font-bold animate-pulse">Visit these links to see my project:</p>
      <div className="flex space-x-4 mb-4 animate-pulse">
        {figmaLink && (
          <a href={figmaLink} className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
            <FaFigma className="h-8 w-8" />
          </a>
        )}
        {behanceLink && (
          <a href={behanceLink} className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
            <FaBehance className="h-8 w-8" />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} className="text-gray-500 hover:text-gray-700" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8" />
          </a>
        )}
      </div>

      <p className="mb-2 font-bold">Used Technologies:</p>
      <div className="flex space-x-2 mb-4">
        {techLogos.map((Icon, index) => (
          <Icon key={index} className="h-6 w-6 text-gray-600" />
        ))}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  figmaLink: PropTypes.string,
  behanceLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  techLogos: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default ProjectCard;
