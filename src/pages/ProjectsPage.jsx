import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaPhp, FaHtml5, FaCss3, FaJs, FaAngular, FaFlask, FaAndroid, FaPython, FaCode } from 'react-icons/fa';
import SlideInCard from '../components/SlideInCard';
import { useTheme } from '../components/ThemeContext';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme(); // Use the theme context

  return (
    <div className={`p-12  ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Front-End Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Expense Tracker Mobile Application"
          description="React Native (Full-Stack Engineer)"
          githubLink="https://github.com/Sahasra-Kesara/expense-tracker-mobile-app"
          techLogos={[FaReact, FaNodeJs, FaAws, FaDatabase]}
        />
        <ProjectCard
          title="E-commerce Site for Clothing Brand"
          description="MERN Stack (Front-end Engineer) 2FA, Auth"
          behanceLink="https://www.behance.net/gallery/210638967/E-commerce-app-front-end"
          figmaLink="https://www.figma.com/design/y31ObJbmohYl7W4ksHAvX4"
          githubLink="https://github.com/Sahasra-Kesara/demo-e-commerce-application"
          techLogos={[FaReact, FaNodeJs, FaAws, FaDatabase]}
        />
        <ProjectCard
          title="Website for Solar Care International"
          description="Full Stack (React, TailwindCSS)"
          behanceLink="https://www.behance.net/gallery/210636817/Solar-Care-International-web"
          githubLink="https://github.com/Sahasra-Kesara/solar-care-international-web"
          techLogos={[FaReact, FaDatabase, FaAws]}
        />
        <ProjectCard
          title="Restaurant Website"
          description="UI/UX (React + Vite)"
          behanceLink="https://www.behance.net/gallery/210675871/Restaurant-Demo-Project"
          githubLink="https://github.com/Sahasra-Kesara/Restaurant-Demo"
          techLogos={[FaReact]}
        />
        <ProjectCard
          title="Savoy Film Booking System"
          description="PHP, HTML, CSS (University Project)"
          behanceLink="https://www.behance.net/gallery/210667569/Savoy-film-hall-Film-and-Seat-booking-System"
          githubLink="https://github.com/Sahasra-Kesara/SAVOY-booking"
          techLogos={[FaPhp, FaHtml5, FaCss3]}
        />
        <ProjectCard
          title="Rotaract Club of Moratuwa Official Website"
          description="HTML, CSS, Bootstrap, JavaScript"
          behanceLink="https://www.behance.net/gallery/210668939/Rotaract-Club-of-Moratuwa-Official-Web-Site"
          githubLink="https://github.com/Sahasra-Kesara/Rotaract_Club_of_Moratuwa"
          techLogos={[FaHtml5, FaCss3, FaJs]}
        />
        <ProjectCard
          title="Kanban App using Angular"
          description="Drag and Drop functions, HTML, CSS, Typescript, Angular practice app"
          githubLink="https://github.com/Sahasra-Kesara/kanban-app-angular-practice"
          techLogos={[FaAngular]}
        />
        <ProjectCard
          title="Movie Rating App using Angular"
          description="HTML, CSS, Typescript, Angular"
          githubLink="https://github.com/Sahasra-Kesara/movie-rating-app"
          techLogos={[FaAngular]}
        />
      </div>
      <h1 className={`text-4xl font-bold mb-6 mt-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full-Stack Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Home Electrical Device Management app"
          description="ASP.NET Core, SSMS"
          githubLink="https://github.com/Sahasra-Kesara/home-elecrical-device-management-app"
          techLogos={[FaCode, FaDatabase]}
        />
        <ProjectCard
          title="Education Institute Management System"
          description="ASP.NET Core MVC Architecture, Entity Frameworks, SQL Server, C#"
          githubLink="https://github.com/Sahasra-Kesara/education-institute"
          techLogos={[FaCode, FaDatabase]}
        />
        <ProjectCard
          title="News Summarise system"
          description="This is a NLP project, The News Summarizer Web App is a simple web application built using Flask, HTML, CSS, and JavaScript. It allows users to add news articles with titles and content. Upon submission, the content of the news article is automatically summarized using the Transformers library and displayed on the web page."
          githubLink="https://github.com/Sahasra-Kesara/news-summarizer-FullStack"
          techLogos={[FaFlask, FaDatabase]}
        />
        <ProjectCard
          title="Restaurant management App -Desktop"
          description="SQL Server, C#"
          githubLink="https://github.com/Sahasra-Kesara/Restaurant_management_App-Desktop"
          techLogos={[FaDatabase, FaCode]}
        />
        <ProjectCard
          title="The Cupcake Factory"
          description="Android Studio App | CRUD Operations | Java | API 21 Lollipop; Android 5.0 | Kotlin DSL build.gradle.kts | pixel 7a , API 32 , Android 11.0 R | x86 AVD | Used SQlite database"
          githubLink="https://github.com/Sahasra-Kesara/the-cupcake-factory"
          techLogos={[FaAndroid]}
        />
        <ProjectCard
          title="Cafe Management System - Desktop"
          description=".Net framework and SQL Server. C#, windows application."
          githubLink="https://github.com/Sahasra-Kesara/cafe-management-desktop"
          techLogos={[FaCode, FaDatabase]}
        />
      </div>
      <h1 className={`text-4xl font-bold mb-6 mt-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AI/ML Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="News-Summarization-Application"
          description="This project demonstrates a complete workflow for summarizing news articles using the Hugging Face transformers library, storing them in a SQLite database using Flask and SQLAlchemy, and displaying the summarized articles within a Jupyter Notebook."
          githubLink="https://github.com/Sahasra-Kesara/News-Summarization-Application"
          techLogos={[FaPython]}
        />
        <ProjectCard
          title="Volume and mouse point control by hand"
          description="flask, opencv-python, mediapipe, pyautogui, pycaw, comtypes, numpy"
          githubLink="https://github.com/Sahasra-Kesara/volume-and-mouse-point-control-by-hand"
          techLogos={[FaPython]}
        />
        <ProjectCard
          title="Image to text Converter"
          description="Flask App, Using tesseract-ocr"
          githubLink="https://github.com/Sahasra-Kesara/image-to-text-converter"
          techLogos={[FaPython]}
        />
        <ProjectCard
          title="Cartoon Effect"
          description="machine learning project using OpenCV"
          githubLink="https://github.com/Sahasra-Kesara/cartoon-effect"
          techLogos={[FaPython]}
        />
      </div>
      <SlideInCard />
    </div>
  );
};

export default ProjectsPage;
