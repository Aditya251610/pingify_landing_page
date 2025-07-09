"use client";
import React from "react";
import { motion } from "framer-motion";
import { Monitor, Activity, Shield } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-cyan-500 rounded w-3/4"></div>
                  <div className="h-2 bg-blue-500 rounded w-1/2"></div>
                  <div className="h-2 bg-purple-500 rounded w-2/3"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-white text-subheading mb-2">API Dashboard</h3>
                <p className="text-gray-400 text-sm text-caption">Monitor all your APIs in one place</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}