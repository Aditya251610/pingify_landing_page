"use client";
import React from "react";
import { motion } from "framer-motion";
import { Monitor, Activity, Shield } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-heading text-white mb-6">Our Solution</h2>
            <p className="text-xl text-body text-gray-400 mb-8">How Pingify can help you</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Monitor className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-subheading mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-400 text-body">Monitor your APIs 24/7 with instant alerts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-subheading mb-2">Performance Analytics</h3>
                  <p className="text-gray-400 text-body">Get detailed insights into your API performance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-subheading mb-2">Secure & Reliable</h3>
                  <p className="text-gray-400 text-body">Built with security and reliability in mind</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: VIDEO DEMO */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls // Optional: remove this line if you want it to autoplay silently without UI
                >
                  <source src="/assets/2025-07-09 08-51-11.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-center">
                <h3 className="text-white text-subheading mb-2">Pingify in Action</h3>
                <p className="text-gray-400 text-sm text-caption">See how easy it is to monitor your APIs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
