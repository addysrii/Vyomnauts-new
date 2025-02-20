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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      bg-transparent`
    }>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-yellow-400 flex items-center space-x-2"
            aria-label="Home"
          >
            <img src={logo} alt="Vyomnauts Logo" className="h-8 w-8" />
            <span className="text-amber-500">
              PSIT Vyomnauts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/join">
              <button 
                className="px-4 py-2 text-amber-400 hover:text-yellow-300 transition-colors"
                aria-label="Join Us"
              >
                Join Us
              </button>
            </Link>
            <button 
              className="px-4 py-2 bg-amber-400 text-black rounded-lg hover:bg-yellow-300 transition-colors"
              aria-label="Sponsor Us"
            >
              Sponsor Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-amber-400 focus:outline-none"
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
        <div className={`lg:hidden bg-black transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-6 space-y-4">
            <MobileNavLinks />
            <div className="flex flex-col space-y-4 pt-4 border-t border-yellow-400/20">
              <Link to={'/join'}>
              <button 
                className="px-4 py-2 text-amber-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
                aria-label="Join Us"
              >
                Join Us
              </button>
              </Link>
              <button 
                className="px-4 py-2 bg-amber-400 text-black rounded-lg hover:bg-yellow-300 transition-colors"
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
      className="text-amber-400 hover:text-yellow-300 transition-colors relative group py-2"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  </li>
);

const NavDropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative group">
      <button
        className="text-amber-400 hover:text-yellow-300 transition-colors flex items-center space-x-1 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{text}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <div
        className={`absolute top-full left-0 w-48 py-2 bg-black border border-yellow-400/20 backdrop-blur-lg rounded-lg shadow-xl transition-all duration-200 ${
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
    className="block px-4 py-2 text-amber-400 hover:bg-yellow-400/10 transition-colors"
    role="menuitem"
  >
    {text}
  </Link>
);

const MobileNavItem = ({ to, text }) => (
  <li>
    <Link
      to={to}
      className="block text-amber-400 hover:bg-yellow-400/10 px-4 py-2 rounded-lg transition-colors"
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
        className="w-full flex items-center justify-between text-amber-400 hover:bg-yellow-400/10 px-4 py-2 rounded-lg transition-colors"
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
    className="block text-amber-400 hover:bg-yellow-400/10 px-4 py-2 rounded-lg transition-colors"
  >
    {text}
  </Link>
);

export default Navbar;