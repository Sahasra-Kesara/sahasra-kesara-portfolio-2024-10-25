import React, { useState } from 'react';
import { useTheme } from './ThemeContext'; // Adjust the import path as necessary

const Education = () => {
  const { isDarkMode } = useTheme(); // Access theme state
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track expanded education item

  const educationData = [
    {
      institution: "Cardiff Metropolitan University",
      image: "https://th.bing.com/th/id/R.474ab08f22852d9f6d749a6b35aff031?rik=0Zq5BCMxaxHyyQ&pid=ImgRaw&r=0",
      degree: "Undergraduate, Computer Software Engineering",
      date: "Dec 2022",
      keySubjects: [
        "Fundamentals of Programming (C++)", "Computer Architecture", "Business Information System", 
        "System Analysis & Design", "Object Oriented Programming (Java)", "Computer Networks", 
        "Database Design & Development (SQL Server Management Studio)", "Professional Practice", 
        "Effective Communication", "Web Application Development", "Data Structures and Algorithms", 
        "Mobile Application Development", "Project Management", "Service Oriented Computing", 
        "Business Analytics", "Computing Project", "Advanced Programming", 
        "Professional and Ethical Issues in IT", "Analytics and Business Intelligence", 
        "Computational Intelligence", "Software Engineering Dissertation Project"
      ]
    },
    {
      institution: "University of Moratuwa",
      image: "https://uom.lk/sites/default/files/cites/images/MicrosoftTeams-image.png",
      degree: "Certifications, Trainee - Full Stack Development",
      date: "Jul 2023",
      keyTopics: [
        "Server-Side Web Development", "Front-End Development", "Programming in Python", 
        "Professional Practice in Software Development", "Soft Skills", "Technical Skills", 
        "Analytical Skills", "Software Architecture and Design", "Software Security", 
        "Software Quality Assurance"
      ]
    },
    {
      institution: "University of Colombo",
      image: "https://cmb.ac.lk/wp-content/uploads/logo-color.png",
      degree: "Certifications, Certificate Course in Computer Applications",
      date: "Aug 2022 - Mar 2023",
      keySubjects: [
        "Fundamentals of IT", "Introduction to Computer Hardware", "Introduction to Computer Software", 
        "Understanding & Working with Windows", "Working with Word, Excel, Powerpoint, Access", 
        "Introduction to Web Designing", "Working with Adobe Dream Viewer", 
        "Introduction to Graphic Designing", "Basics of Adobe Photoshop, Illustrator", 
        "Introduction to Computer Networks", "Introduction to the Internet", "Mathematics for ICT"
      ]
    },
    {
      institution: "Prince of Wales College, Moratuwa",
      image: "https://th.bing.com/th/id/R.e8b0ca168b1f90b7339e8400fe57f3a0?rik=%2frWV1x7URns4AA&riu=http%3a%2f%2fwww.pwcoba.lk%2fimages%2flogo.png&ehk=UCl94hEscVFG5K2vyETB6ZQTcMcBSVb%2f%2f%2fPshZvL1m8%3d&risl=&pid=ImgRaw&r=0",
      degree: "Physical Sciences",
      date: "Jan 2007 - Mar 2021",
      keySubjects: ["Combined Maths", "Physics", "Chemistry", "English"]
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={`p-6 ${isDarkMode ? ' text-white' : 'text-black'}`}>
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className={` rounded-lg p-4 transition-transform transition-shadow duration-300 ease-in-out ${isDarkMode ? '' : 'text-black'} hover:scale-105 `}
          >
            <img src={edu.image} alt={`${edu.institution} Logo`} className="h-16 w-auto mb-2" />
            <h3 className="font-semibold">{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.date}</p>
            <h4 className="font-medium mt-2">Key {edu.keyTopics ? "Topics" : "Subjects"}:</h4>
            <ul className="list-disc list-inside">
              {(edu.keySubjects || edu.keyTopics).slice(0, expandedIndex === index ? undefined : 3).map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
            {edu.keySubjects && edu.keySubjects.length > 3 && (
              <button 
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => handleToggle(index)}
              >
                {expandedIndex === index ? 'See Less' : 'See More'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
