import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white flex items-center space-x-2"
            aria-label="Home"
          >
            <img src={logo} alt="Vyomnauts Logo" className="h-8 w-8" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Vyomnauts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to={'/join'}>
            <button 
              className="px-4 py-2 text-white hover:text-blue-400 transition-colors"
              aria-label="Join Us"
            >
              Join Us
            </button>
            </Link>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Sponsor Us"
            >
              Sponsor Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-6 space-y-4">
            <MobileNavLinks />
            <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
              <button 
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Join Us"
              >
                Join Us
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Sponsor Us"
              >
                Sponsor Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <ul className="flex items-center space-x-8">
    <NavItem to="/" text="Home" />
    <NavItem to="/projects" text="Projects" />
    <NavDropdown text="Timeline">
      <DropdownItem to="/blogs" text="Blogs" />
      <DropdownItem to="/events" text="Our Events" />
    </NavDropdown>
    <NavItem to="/about" text="About Us" />
  </ul>
);

const MobileNavLinks = () => (
  <ul className="flex flex-col space-y-4">
    <MobileNavItem to="/" text="Home" />
    <MobileNavItem to="/projects" text="Projects" />
    <MobileDropdown text="Timeline">
      <MobileDropdownItem to="/blogs" text="Blogs" />
      <MobileDropdownItem to="/events" text="Our Events" />
    </MobileDropdown>
    <MobileNavItem to="/about" text="About Us" />
  </ul>
);

const NavItem = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="text-white hover:text-blue-400 transition-colors relative group py-2"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  </li>
);

const NavDropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative group">
      <button
        className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{text}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <div
        className={`absolute top-full left-0 w-48 py-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        role="menu"
      >
        {children}
      </div>
    </li>
  );
};

const DropdownItem = ({ to, text }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-white hover:bg-blue-600/50 transition-colors"
    role="menuitem"
  >
    {text}
  </Link>
);

const MobileNavItem = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="block text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
    >
      {text}
    </Link>
  </li>
);

const MobileDropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="w-full flex items-center justify-between text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{text}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div
        className={`pl-4 space-y-2 transition-all duration-200 ${
          isOpen ? 'max-h-screen opacity-100 visible mt-2' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        {children}
      </div>
    </li>
  );
};

const MobileDropdownItem = ({ to, text }) => (
  <Link
    to={to}
    className="block text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
  >
    {text}
  </Link>
);

export default Navbar;