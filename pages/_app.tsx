import '../styles/globals.css';
import React, { useState } from 'react';
import Navbar from '../containers/navbar/navbar';
import MobileMenu from '../components/navbar/mobileMenu';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background">
      <Navbar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        )}
      </AnimatePresence>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
