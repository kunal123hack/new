import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-xl font-semibold text-blue-900 dark:text-blue-300">
            <span className="font-bold">24SOLAR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/featured" active={location.pathname === '/featured'} onClick={closeMenu}>Featured</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} onClick={closeMenu}>Contact</NavLink>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/featured" active={location.pathname === '/featured'} onClick={closeMenu}>Featured</NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, onClick, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`font-medium transition-colors ${
        active 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;