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
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              {/* Option 1: For local video file (once you add it to public folder) */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  poster="/assets/video-thumbnail.jpg" // Optional: Add a thumbnail image (remove this line if you don't have a thumbnail)
                >
                  <source src="/assets/your-video-name.mp4" type="video/mp4" />
                  <source src="/assets/your-video-name.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play button overlay (optional) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              {/* 
              Option 2: For YouTube embed (replace VIDEO_ID with your actual YouTube video ID)
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
                  title="Pingify Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              */}
              
              {/* 
              Option 3: For Vimeo embed (replace VIDEO_ID with your Vimeo video ID)
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&muted=1&loop=1"
                  title="Pingify Demo"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              */}
              
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