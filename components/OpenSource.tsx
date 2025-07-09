"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function OpenSource() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black"></div>
      <div className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <Github className="h-12 w-12 sm:h-16 sm:w-16 text-white mr-3 sm:mr-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-hero text-white">100% Open Source</h2>
            </div>
            
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl text-body text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Pingify is completely free and open source, built by developers for developers. 
                We believe in transparency, community-driven development, and giving back to the ecosystem that powers our industry. 
                Every line of code is available on GitHub, and we welcome contributions from developers worldwide.
              </p>
              <p className="text-base sm:text-lg text-body text-gray-400 leading-relaxed">
                Join our growing community of contributors and help shape the future of API monitoring. 
                Whether you're fixing bugs, adding features, or improving documentation—every contribution matters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl text-subheading text-white mb-2">Star on GitHub</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">Show your support and stay updated with the latest releases</p>
              </motion.div>
              
              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <GitFork className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl text-subheading text-white mb-2">Fork & Contribute</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">Help us build the best API monitoring tool together</p>
              </motion.div>
              
              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl text-subheading text-white mb-2">Join Community</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">Connect with other developers and share your experience</p>
              </motion.div>
            </div>
            
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://github.com/Aditya251610/pingify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-sm sm:text-base hover:from-gray-700 hover:to-gray-800 transition-all flex items-center space-x-2 border border-gray-700 hover:border-gray-600"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
            </motion.div>
            
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-xs sm:text-sm">
                Licensed under MIT • Free forever • No hidden costs
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
