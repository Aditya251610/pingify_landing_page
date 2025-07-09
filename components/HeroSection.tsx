"use client";
import React from "react";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/grid-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection() {
  const sloganWords = "Monitor • Notify • Modify";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-0">
      <BackgroundBeams />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-hero text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pingify
          </span>
        </motion.h1>
        
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-subheading text-gray-300 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your ultimate solution for API testing
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-lg text-body text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pingify is a Go-based package designed for API testing. It uses AI to monitor API testing and sends notifications via email if anything goes down.
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center min-h-[150px] sm:min-h-[200px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-md px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl border border-gray-600/50 shadow-2xl inline-block">
              <TextGenerateEffect words={sloganWords} />
            </div>
            <p className="text-gray-400 text-base sm:text-lg text-body px-4">
              The complete solution for modern API management
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}