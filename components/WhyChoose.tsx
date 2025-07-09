"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Mail, ArrowRight, X, Zap, Shield, Clock, Database, Bell, Cpu } from "lucide-react";

export default function WhyChoose() {
  const [selectedFeature, setSelectedFeature] = React.useState<string | null>(null);

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

  const closeModal = () => setSelectedFeature(null);

  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black"></div>
      <div className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-heading text-white mb-4">Why Choose Pingify?</h2>
          <p className="text-xl text-body text-gray-400">Here's why our customers love us</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group"
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
                  <h3 className="text-xl text-subheading text-white">{feature.title}</h3>
                  <p className="text-cyan-400 text-caption">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-body">{feature.description}</p>
              
              <button 
                onClick={() => setSelectedFeature(feature.id)}
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform transition-transform text-caption"
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
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-caption hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
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
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && selectedFeatureData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <selectedFeatureData.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedFeatureData.title}</h2>
                  <p className="text-cyan-400">{selectedFeatureData.subtitle}</p>
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
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedFeatureData.detailedContent.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedFeatureData.detailedContent.keyFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Benefits</h3>
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <ul className="space-y-4">
                    {selectedFeatureData.detailedContent.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="p-6 border-t border-gray-700 bg-gray-800/30">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}