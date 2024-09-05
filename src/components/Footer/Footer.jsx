import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/netflix_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white py-6 mt-5 select-none">
      <div className="select-none container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          <a href="/" className="text-white hover:text-gray-400">
            <img src={logo} alt="netflix logo" className="w-16" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full md:flex-row md:w-fit mb-4 md:mb-0 text-center">
          <a href="/" className="px-4 py-2 hover:text-gray-400">
            Home
          </a>
          <a href="#Popular" className="px-4 py-2 hover:text-gray-400">
            Popular
          </a>
          <a href="/services" className="px-4 py-2 hover:text-gray-400">
            Top Rated
          </a>
          <a href="/contact" className="px-4 py-2 hover:text-gray-400">
            Playing Now
          </a>
          <a href="/contact" className="px-4 py-2 hover:text-gray-400">
            Coming Soon
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/yehia-ahmed-687177260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yehia-ahmed-687177260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yehia-ahmed-687177260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yehia-ahmed-687177260/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 mt-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Yahia Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
