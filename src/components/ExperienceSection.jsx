import React from 'react';
import { useTheme } from '../components/ThemeContext';

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  const ExperienceItem = ({ title, period, details }) => (
    <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition hover:z-[1] hover:shadow-2xl ${isDarkMode ? 'hover:shadow-gray-600/10' : 'hover:shadow-gray-300/10'}`}>
      <div className="relative space-y-8 py-12 p-8">
        <h5 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} transition group-hover:text-secondary`}>{title}</h5>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{period}</p>
        <ul className={`list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
  <>
    <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
      <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
      <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
    </div>
    <div className={` ${isDarkMode ? 'text-white bg-gray-800' : 'text-gray-800 bg-white'} p-8 md:p-12`}>
      <div className="md:w-2/3 lg:w-1/2 mb-8">
        <h2 className={`text-2xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'} md:text-4xl`}>Work Experience</h2>
      </div>
      <div className={`grid gap-6 p-6 md:p-8 divide-x divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'} overflow-hidden rounded-3xl border ${isDarkMode ? 'text-gray-100 border-gray-700' : 'text-gray-700 border-gray-300'} sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}>
        <ExperienceItem
          title="StackNet (Pvt) Ltd (Freelance Job)"
          period="Aug 2024 - Present"
          details={[
            "Founder and CEO",
            "Lead a dynamic team of skilled professionals in software development.",
            "Delivering customized software applications across various industries.",
            "Developing web and mobile applications, AI-driven software, e-commerce platforms, and UI/UX design."
          ]}
        />
        <ExperienceItem
          title="Solar Care International"
          period="June 2024 - Present"
          details={[
            "Software Engineering Team Lead",
            "Raffle Draw and Home Electrical Device management software.",
            "Develop and maintain the front-end using React.js and Material-UI.",
            "Implement back-end services using Node.js and Express.js."
          ]}
        />
        <ExperienceItem
          title="BlueTech Cloud Solutions"
          period="Apr 2023 – Jul 2023"
          details={[
            "Junior .Net Developer",
            "Worked on Point Of Sale Systems for Restaurants, Bars, Supermarkets."
          ]}
        />
        <ExperienceItem
          title="Medium"
          period="Jun 2023 - Aug 2024"
          details={[
            "Blog Writer",
            "Wrote articles on database administration, cloud technologies, and IT trends."
          ]}
        />
      </div>
    </div>
  </>
);
};

export default ExperienceSection;
