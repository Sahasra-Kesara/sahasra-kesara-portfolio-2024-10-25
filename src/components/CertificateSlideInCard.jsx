import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const CertificateSlideInCard = () => {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState("animate-slideIn");

  const handleClose = () => {
    setAnimate("animate-fadeOut");
    setTimeout(() => setVisible(false), 500);
  };

  useEffect(() => {
    if (!visible) {
      setAnimate("animate-fadeOut");
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`fixed top-16 right-0 flex items-center justify-center py-4 z-50 mx-4 ${animate}`}>
      <div className="container">
        <div className={`flex flex-wrap items-center justify-between rounded-lg border ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"} p-4 shadow-lg`}>
          <div className="w-full md:w-7/12 lg:w-2/3 flex items-center px-2">
            <span className={`text-indigo-500 mr-4 ${isDarkMode ? "animate-pulse" : ""}`}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </span>
            <div className="mb-6 md:mb-0">
              <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Hi! Dude</h3>
              <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Go to my Linkedin account and see my Certificates and Licenses
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-1/3 flex items-center justify-between">
            <a
              href="https://www.linkedin.com/in/kesare-cooray-544424256/"
              className={`inline-block ${isDarkMode ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"} text-white font-medium rounded-lg text-sm px-4 py-2 text-center`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My LinkedIn
            </a>
            <button onClick={handleClose} className="ml-2 text-gray-500 hover:text-gray-800" aria-label="Close card">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSlideInCard;
