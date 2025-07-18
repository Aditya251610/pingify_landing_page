"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Mail, ArrowRight, X, Zap, Shield, Clock, Database, Bell, Cpu } from "lucide-react";

export default function WhyChoose() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features = [
    {
      id: "ai-monitoring",
      icon: Brain,
      title: "AI Monitoring",
      subtitle: "Smart API testing",
      description: "Our AI monitors your API testing, ensuring everything runs smoothly.",
      detailedContent: {
        overview: "Pingify's AI monitoring system uses advanced machine learning algorithms to continuously analyze your API performance patterns, predict potential issues, and provide intelligent insights.",
        keyFeatures: [
          { icon: Zap, title: "Predictive Analysis", description: "AI predicts potential failures before they happen by analyzing response patterns and historical data." },
          { icon: Brain, title: "Smart Anomaly Detection", description: "Automatically identifies unusual behavior patterns that might indicate performance issues or security threats." },
          { icon: Database, title: "Performance Optimization", description: "AI suggests specific optimizations based on your API usage patterns and performance bottlenecks." },
          { icon: Shield, title: "Intelligent Alerting", description: "Smart filtering reduces false positives by learning from your feedback and usage patterns." }
        ],
        benefits: [
          "Reduce downtime by up to 90% with predictive monitoring",
          "Automatically categorize and prioritize issues by severity",
          "Get actionable recommendations for performance improvements",
          "Learn from historical data to improve future predictions"
        ]
      }
    },
    {
      id: "email-notifications",
      icon: Mail,
      title: "Email Notifications",
      subtitle: "Stay updated",
      description: "Receive email notifications if anything goes down during testing.",
      detailedContent: {
        overview: "Stay informed with intelligent email notifications that deliver the right information at the right time, helping you respond quickly to critical issues.",
        keyFeatures: [
          { icon: Bell, title: "Instant Alerts", description: "Receive immediate notifications when issues are detected, with customizable severity levels." },
          { icon: Clock, title: "Scheduled Reports", description: "Get daily, weekly, or monthly summary reports of your API performance and health status." },
          { icon: Mail, title: "Rich Email Content", description: "Detailed emails include error logs, performance metrics, and suggested actions to resolve issues." },
          { icon: Cpu, title: "Smart Filtering", description: "Advanced filtering prevents notification spam while ensuring critical alerts always reach you." }
        ],
        benefits: [
          "Never miss critical API failures with instant notifications",
          "Customizable alert thresholds for different environments",
          "Rich HTML emails with charts and detailed error information",
          "Integration with popular email providers and SMTP servers"
        ]
      }
    },
  ];

  const openModal = (featureId: string) => {
    setSelectedFeature(featureId);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/40 via-gray-900/60 to-black"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-cyan-900/10 via-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
      <div className="relative z-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-heading text-white mb-4">Why Choose Pingify?</h2>
            <p className="text-lg sm:text-xl text-body text-gray-400">Here's why our customers love us</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl text-subheading text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm sm:text-base">{feature.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                
                <button 
                  onClick={() => openModal(feature.id)}
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform transition-transform text-sm sm:text-base"
                >
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
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm sm:text-base hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
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
              View All Features
            </button>
          </motion.div>
        </div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && selectedFeatureData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <selectedFeatureData.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedFeatureData.title}</h2>
                    <p className="text-cyan-400 text-sm sm:text-base">{selectedFeatureData.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Overview</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {selectedFeatureData.detailedContent.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {selectedFeatureData.detailedContent.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        className="bg-gray-800/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h4>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Benefits</h3>
                  <div className="bg-gray-800/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                    <ul className="space-y-4">
                      {selectedFeatureData.detailedContent.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 sm:space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-700 bg-gray-800/30">
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm sm:text-base"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}