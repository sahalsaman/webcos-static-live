import React, { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 768); // Check if screen width is mobile size (<= 768px)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate height based on scroll and screen size
  const headerHeight = isScrolled ? '80px' : isMobileScreen ? '80px' : '140px';

  return (
    <header
      className={`header fixed top-0 left-0 w-full ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } transition-colors duration-300`}
      style={{ height: headerHeight }}
    >
      <div className="md:container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="/" className={`text-2xl md:text-3xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
          WEBCOS
        </a>

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 md:items-center">
          <a href="/" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Home
          </a>
          <a href="/services" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Services
          </a>
          <a
            href="/contact"
            className={`px-4 py-2 rounded ${
              isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-300'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${isScrolled ? 'text-black' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}>
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="/" className="text-gray-700 hover:text-black">Home</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-black">About</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-black">Services</a></li>
              <li><a href="/works" className="text-gray-700 hover:text-black">Works</a></li>
              <li><a href="/careers" className="text-gray-700 hover:text-black">Careers</a></li>
              <li>
                <a href="/contact" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
