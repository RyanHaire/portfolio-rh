import { Link } from "react-router-dom";
import logo from '../assets/icon.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-4">
          {/* Logo Placeholder */}
          <img className="w-auto h-20" src={logo}/>
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300 transition duration-300">
              Ryan Haire's Coding Tutorials
            </Link>
          </h1>
        </div>
    
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tutorials"
                className="hover:text-gray-300 transition duration-300 font-medium"
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition duration-300 font-medium"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
};

export default Header;
