import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-400">24SOLAR</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Leading the way in solar energy solutions for homes and businesses. Clean energy for a brighter future.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} label="Twitter" />
              <SocialIcon icon={<Instagram size={18} />} label="Instagram" />
              <SocialIcon icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/featured">Featured</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Residential Solar</FooterLink>
              <FooterLink to="/">Commercial Solar</FooterLink>
              <FooterLink to="/">Solar Maintenance</FooterLink>
              <FooterLink to="/">Energy Storage</FooterLink>
              <FooterLink to="/">Solar Consulting</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Solar Way, Sunshine City, SC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">info@24solar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} 24SOLAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, label }) => {
  return (
    <a 
      href="#" 
      aria-label={label}
      className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;