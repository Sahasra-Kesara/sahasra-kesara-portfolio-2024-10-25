// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaStackOverflow, FaHackerrank, FaMedium, FaUniversity } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="bg-gray-800 py-4 text-gray-400">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 my-4 w-full xl:w-1/5">
            <p className="text-justify">Hire me!</p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Pages</h2>
            </div>
            <ul className="leading-8">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="about" className="hover:text-blue-400">About</a></li>
              <li><a href="projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="certifications" className="hover:text-blue-400">Certifications</a></li>
              <li><a href="contact" className="hover:text-blue-400">Contact Me</a></li>
            </ul>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Documents</h2>
              <li>
                  <a href="/resume/Sahasra_Kesara_Profile_2024_10_21.pdf" download className="hover:text-blue-400">Download Resume</a>
              </li>

            </div>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Me</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaGithub className="text-gray-400 hover:text-blue-400" />
                  <a href="https://github.com/Sahasra-Kesara?tab=repositories" className="hover:text-blue-400">GitHub</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLinkedin className="text-gray-400 hover:text-blue-400" />
                  <a href="https://www.linkedin.com/in/kesare-cooray-544424256/" className="hover:text-blue-400">LinkedIn</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaFacebook className="text-gray-400 hover:text-blue-400" />
                  <a href="https://www.facebook.com/share/ruzo72ndNcdkmwD1/?mibextid=qi2Omg" className="hover:text-blue-400">Facebook</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaStackOverflow className="text-gray-400 hover:text-blue-400" />
                  <a href="https://stackoverflow.com/users/21266933/sahasra-kesara" className="hover:text-blue-400">StackOverflow</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHackerrank className="text-gray-400 hover:text-blue-400" />
                  <a href="https://www.hackerrank.com/profile/sahasrakesara" className="hover:text-blue-400">HackerRank</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMedium className="text-gray-400 hover:text-blue-400" />
                  <a href="https://medium.com/me/stories/public" className="hover:text-blue-400">Medium</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaUniversity className="text-gray-400 hover:text-blue-400" />
                  <a href="https://open.uom.lk/lms/user/profile.php?id=7845" className="hover:text-blue-400">University of Moratuwa</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm text-gray-400">© 2024 Sahasra Kesara. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
