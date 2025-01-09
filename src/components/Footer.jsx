import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-20">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            MAG Coaching Center is your go-to platform for skill development, offering a
            wide range of courses to help you succeed in your career. Learn, grow,
            and excel with us!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-white transition duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/ask_"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex flex-col">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >@Instagram
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="GitHub"
            >@GitHub
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >@LinkedIn
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Telegram"
            >@Telegram
              <i className="fab fa-telegram text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >@Twitter
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MAG Center. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
