import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-white">
              We are a news aggregator providing the latest and most relevant news articles from around the world.
              Our mission is to keep you informed and up-to-date with the most important events and stories.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <ul>
              <li className="text-white mb-1">
                <strong>Email:</strong> support@newsfeed.com
              </li>
              <li className="text-white mb-1">
                <strong>Phone:</strong> +91 8015773495
              </li>
              <li className="text-white mb-1">
                <strong>Address:</strong>  Erode City, Tamil Nadu
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-2">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} NewsFeed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
