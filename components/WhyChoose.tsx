"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Mail, ArrowRight } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Brain,
      title: "AI Monitoring",
      subtitle: "Smart API testing",
      description: "Our AI monitors your API testing, ensuring everything runs smoothly.",
    },
    {
      icon: Mail,
      title: "Email Notifications",
      subtitle: "Stay updated",
      description: "Receive email notifications if anything goes down during testing.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Pingify?</h2>
          <p className="text-xl text-gray-400">Here's why our customers love us</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-cyan-400">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
              
              <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform transition-transform">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button 
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              // Small delay to ensure DOM is ready
              setTimeout(() => {
                const featuresSection = document.getElementById('features');
                console.log('Scrolling to features section:', featuresSection); // Debug log
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
            View All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}