
import { Link } from 'react-router-dom'
import logo from '../assets/icon.png'

export const Header = () => {
    return(

        <>
        <header className="sticky bg-gray-50 top-0 py-4 shadow-lg z-50">
        <div className="text-[#AF5C5B] container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <img src={logo} alt="Ryan Haire logo" className="mr-4 w-32" />
          </div>
          <nav>
            <ul className="flex space-x-8">
                <li><Link to="/" className="hover:text-[#AF5C5B] transition">Home</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#AF5C5B] transition">Portfolio</Link></li>
                <li><Link to="https://codingtutorials.ryanhaire.ca" className="hover:text-[#AF5C5B] transition">Coding Tutorials</Link></li>
            </ul>
          </nav>
        </div>
      </header>
        </>
    )
}