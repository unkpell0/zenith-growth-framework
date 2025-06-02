
import React from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  // const pricingSectionLink = "#pricing"; // Kept if nav links still point to it

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#tentang', label: 'Titik Balik Anda?' },
    { href: '#pricing', label: 'Kunci Pertumbuhan' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontak', label: 'Kontak Kami' },
  ];

  return (
    <header id="home" className="sticky top-0 z-50 bg-brand-bg-navbar/95 backdrop-blur-xl border-b border-brand-border-navbar shadow-lg"> {}
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl lg:text-3xl font-bold text-brand-text-light transition-opacity hover:opacity-80">
          Zenith<span className="text-brand-primary">Growth</span> {}
        </a>
        <nav className="hidden md:flex flex-grow justify-center space-x-5 lg:space-x-7 items-center">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-brand-text-medium hover:text-brand-text-link transition-colors duration-300 text-sm lg:text-base font-medium"> {}
              {link.label}
            </a>
          ))}
        </nav>
        {}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-text-medium hover:text-brand-text-link focus:outline-none p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-bg-navbar/95 backdrop-blur-md shadow-lg pb-5 pt-1 border-b border-brand-border-navbar">
          <nav className="flex flex-col items-center space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-brand-text-medium hover:text-brand-text-link transition-colors duration-300 text-base py-1.5 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;