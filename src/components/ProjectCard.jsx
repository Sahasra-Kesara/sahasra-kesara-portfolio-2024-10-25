import React from 'react';
import { FaGithub, FaBehance, FaFigma } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';

const ProjectCard = ({ title, description, figmaLink, behanceLink, githubLink, techLogos }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`border-l-8 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ${
        isDarkMode ? 'bg-gray-800 text-gray-100 border-blue-900' : 'bg-gradient-to-r from-white via-blue-50 to-blue-50 border-blue-300 text-gray-900'
      }`}
    >
      <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-blue-600' : ''}`}>{title}</h2>
      <p className="mb-4">{description}</p>

      <p className="mb-4 font-bold">Visit these links to see my project:</p>
      <div className="flex space-x-4 mb-4">
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
    </div>
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
