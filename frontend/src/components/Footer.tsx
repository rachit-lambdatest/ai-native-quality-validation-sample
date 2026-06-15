import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            <Link to="/become-host" className="hover:text-airbnb-red">Become a Host</Link>
            <a href="#" className="hover:text-airbnb-red">Help Center</a>
            <a href="#" className="hover:text-airbnb-red">Privacy</a>
            <a href="#" className="hover:text-airbnb-red">Terms</a>
          </div>

          <div className="flex space-x-4 text-gray-500 text-lg mt-6 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-airbnb-red"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-airbnb-red"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-airbnb-red"><FaInstagram /></a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Demo Github App · All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
