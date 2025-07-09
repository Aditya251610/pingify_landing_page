"use client";
import React from "react";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/grid-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection() {
  const sloganWords = "Monitor • Notify • Modify";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <BackgroundBeams />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
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
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your ultimate solution for API testing
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pingify is a Go-based package designed for API testing. It uses AI to monitor API testing and sends notifications via email if anything goes down.
        </motion.p>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TextGenerateEffect words={sloganWords} />
          </div>
          <p className="text-gray-400 text-lg">
            The complete solution for modern API management
          </p>
        </motion.div>
      </div>
    </section>
  );
}