"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
            <span className="text-lg sm:text-xl text-subheading text-white">Pingify</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">
              Home
            </a>
            <button 
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base"
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
            >
              Features
            </button>
            <a href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm lg:text-base">
              Docs
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#home" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <button 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 w-full text-left"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  setTimeout(() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                      });
                    }
                  }, 100);
                }}
              >
                Features
              </button>
              <a 
                href="/docs" 
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Docs
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}