"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { GridBackground } from "@/components/ui/grid-background";

export default function FeatureTimeline() {
  const timelineData = [
    {
      title: "One Command Monitoring",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="/assets/cli.png"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-2 hover:border-cyan-400/50 rounded-lg"
                  alt="CLI monitoring demo"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  Start monitoring any API with a single CLI command. No setup required—just plug in the endpoint and go.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Instant setup</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Real-Time Notifications",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-pink-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="/assets/cli.png"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 hover:border-2 hover:border-pink-400/50 rounded-lg"
                  alt="Real-time notifications"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  Get instant alerts via Email or Discord when response times spike or failures occur.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Email notifications enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "JSON-Based Logging",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="/assets/ai/ai.png"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/30 hover:border-2 hover:border-orange-400/50 rounded-lg"
                  alt="JSON logging"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  All responses are logged to a structured JSON file, making it easy to audit, debug, or feed into dashboards.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Structured logging</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "AI-Powered Analysis",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="/assets/ai/ai.png"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-2 hover:border-purple-400/50 rounded-lg"
                  alt="AI analysis"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  Automatically analyze API failures and performance bottlenecks with built-in AI suggestions.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-400 text-sm">AI Analysis</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "High response time detected. Consider optimizing database queries."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Docker Support",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-2 hover:border-blue-400/50 rounded-lg"
                  alt="Docker support"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  Run Pingify anywhere with a zero-config Docker container. Ideal for CI/CD, production, or testing environments.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Zero-config deployment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Built with Go",
      content: (
        <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-6">
              <div className="h-64 w-full rounded-xl flex items-center justify-center p-6 relative">
                <Image
                  src="/assets/image.png"
                  width={300}
                  height={200}
                  className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 hover:border-2 hover:border-green-400/50 rounded-lg"
                  alt="Go programming language logo"
                />
              </div>
              <div>
                <p className="text-neutral-200 text-lg mb-6 leading-relaxed">
                  Built entirely with Go for high performance and concurrency. It's lightweight and production ready.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center">
                    <div className="text-green-400 font-bold text-lg">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center">
                    <div className="text-cyan-400 font-bold text-lg">&lt;10MB</div>
                    <div className="text-gray-400 text-sm">Memory</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <GridBackground />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl text-heading text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-body text-gray-400">Everything you need for comprehensive API monitoring</p>
        </div>
        <div className="relative z-10">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
