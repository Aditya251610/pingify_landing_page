"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Terminal className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Pingify</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <button 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                  const featuresSection = document.getElementById('features');
                  console.log('Features section found:', featuresSection); // Debug log
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  } else {
                    console.log('Features section not found');
                  }
                }, 100);
              }}
            >
              Features
            </button>
            <a href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Docs
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}