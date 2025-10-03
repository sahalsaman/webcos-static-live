import React, { useEffect, useState } from 'react';
import logo from '../../src/assets/images/logo.png'
import logoBlack from '../../src/assets/images/logo black.png'

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

  if (isMenuOpen) {
    return (
      <nav className={`fixed  w-full h-full bg-white shadow-md md:hidden`} style={{ height: '100vh', zIndex: 999, overflowY: 'hidden' }}>
        <div className="px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className={`text-2xl md:text-3xl font-bold flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <img src={logoBlack} className="inline h-8 md:h-10 ml-2 -mt-1" alt="Logo" />
            WEBCOS
          </a>
          <button onClick={toggleMenu} className='text-black' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"   // <-- makes stroke black
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
        <div className="flex flex-col items-center gap-10 p-4 text-2xl text-center">
          <a href="/" className="text-gray-700 hover:text-black border-b w-full pb-4">Home</a>
          <a href="/about" className="text-gray-700 hover:text-black border-b w-full pb-4">About</a>
          <a href="/services" className="text-gray-700 hover:text-black border-b w-full pb-4">Services</a>
          <a href="/works" className="text-gray-700 hover:text-black w-full border-b pb-4">Works</a>
          <a href="/careers" className="text-gray-700 hover:text-black border-b w-full pb-4">Careers</a>

          <a href="/contact" className="px-4 py-2 bg-black text-white rounded text-md w-full hover:bg-gray-800">
            Contact
          </a>
        </div>
      </nav>
    )
  }

  return (
    <header
      className={`header fixed top-0 left-0 w-full ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } transition-colors duration-300`}
      style={{ height: headerHeight }}
    >
      <div className="md:container mx-auto px-4 sm:px-6   h-full flex justify-between items-center">
        {/* Logo */}
        <a href="/" className={`text-2xl md:text-3xl font-bold flex items-center gap-4 ${isScrolled ? 'text-black' : 'text-white'}`}>
          {isScrolled ?
            <img src={logoBlack} className="inline h-8 md:h-10 ml-2 -mt-1" alt="Logo" /> :
            <img src={logo} className="inline h-8 md:h-10 ml-2 -mt-1" alt="Logo" />}
          WEBCOS
        </a>
        <nav className="hidden md:flex space-x-6 lg:space-x-10 md:items-center">
          <a href="/" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Home
          </a>
          <a href="/about" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            About
          </a>
          <a href="/services" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Services
          </a>
          <a href="/works" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Works
          </a>
          <a href="/careers" className={`${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white'}`}>
            Careers
          </a>
          {/* <a
            href="/contact"
            className={`px-4 py-2 rounded-full ${
              isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-300'
            }`}
          >
            Contact
          </a> */}
        </nav>


        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${isScrolled ? 'text-black' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>


      </div>
    </header>
  );
}

export default Header;
