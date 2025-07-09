"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2025 Pingify. Built with ❤️ for developers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}