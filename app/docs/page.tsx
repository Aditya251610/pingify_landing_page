"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, ChevronDown, ChevronRight, Book, Download, Play, Settings, Mail, Brain, FileText, Dock as Docker, GitBranch, Shield } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    id: "installation",
    title: "Installation",
    icon: <Download className="h-4 w-4" />
  },
  {
    id: "quick-start",
    title: "Quick Start",
    icon: <Play className="h-4 w-4" />
  },
  {
    id: "commands",
    title: "Commands",
    icon: <Terminal className="h-4 w-4" />,
    children: [
      { id: "monitor", title: "monitor", icon: <Settings className="h-4 w-4" /> },
      { id: "ai", title: "ai", icon: <Brain className="h-4 w-4" /> },
      { id: "logs", title: "logs", icon: <FileText className="h-4 w-4" /> },
      { id: "notify", title: "notify", icon: <Mail className="h-4 w-4" /> }
    ]
  },
  {
    id: "docker",
    title: "Docker Usage",
    icon: <Docker className="h-4 w-4" />
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: <Settings className="h-4 w-4" />
  },
  {
    id: "contributing",
    title: "Contributing",
    icon: <GitBranch className="h-4 w-4" />
  },
  {
    id: "license",
    title: "License",
    icon: <Shield className="h-4 w-4" />
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("installation");
  const [expandedItems, setExpandedItems] = useState<string[]>(["commands"]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.flatMap(item => 
        item.children ? [item, ...item.children] : [item]
      );
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CodeBlock = ({ code, language = "bash", id }: { code: string; language?: string; id: string }) => (
    <div className="relative bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm text-gray-400 font-mono">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          {copiedCode === id ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="text-sm">{copiedCode === id ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );

  const NavItemComponent = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeSection === item.id;
    
    return (
      <div>
        <a
          href={`#${item.id}`}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
            isActive 
              ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400" 
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
          style={{ paddingLeft: `${12 + level * 16}px` }}
          onClick={(e) => {
            if (item.children) {
              e.preventDefault();
              toggleExpanded(item.id);
            }
          }}
        >
          {item.children && (
            <button onClick={(e) => { e.preventDefault(); toggleExpanded(item.id); }}>
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
          {item.icon}
          <span className="font-medium">{item.title}</span>
        </a>
        {item.children && isExpanded && (
          <div className="mt-1">
            {item.children.map((child) => (
              <NavItemComponent key={child.id} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
              <Terminal className="h-8 w-8 text-cyan-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Pingify</h1>
                <p className="text-sm text-gray-400">Documentation</p>
              </div>
            </a>
            <div className="flex items-center space-x-4">
              <Book className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-400">v1.0.0</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900/30 backdrop-blur-sm border-r border-gray-800 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <NavItemComponent key={item.id} item={item} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-8 py-8 relative">
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          <div className="relative z-10">
          {/* Installation */}
          <section id="installation" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Download className="h-8 w-8 text-cyan-400 mr-3" />
                Installation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Using Go Install</h3>
                  <CodeBlock 
                    code="go install github.com/Aditya251610/pingify@latest" 
                    id="go-install"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Using Git Clone</h3>
                  <CodeBlock 
                    code={`git clone https://github.com/Aditya251610/pingify.git
cd pingify
go build -o pingify`}
                    id="git-clone"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Using Docker</h3>
                  <CodeBlock 
                    code="docker pull aditya251610/pingify:latest" 
                    id="docker-install"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Quick Start */}
          <section id="quick-start" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Play className="h-8 w-8 text-cyan-400 mr-3" />
                Quick Start
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get started with Pingify in seconds. Monitor any API endpoint with real-time alerts and AI-powered analysis.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Basic Monitoring</h3>
                  <CodeBlock 
                    code="pingify monitor https://api.example.com/health --interval 30s --threshold 500ms" 
                    id="basic-monitor"
                  />
                  <p className="text-gray-400 mt-2">
                    This command monitors the API every 30 seconds and alerts if response time exceeds 500ms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">With Email Notifications</h3>
                  <CodeBlock 
                    code="pingify monitor https://api.example.com/health --notify email --email your@email.com" 
                    id="email-monitor"
                  />
                  <p className="text-gray-400 mt-2">
                    Enable email notifications to get instant alerts when issues are detected.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Commands */}
          <section id="commands" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Terminal className="h-8 w-8 text-cyan-400 mr-3" />
                Commands
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Pingify provides a comprehensive set of commands for API monitoring, analysis, and notification management.
              </p>
            </motion.div>
          </section>

          {/* Monitor Command */}
          <section id="monitor" className="mb-16 ml-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="h-6 w-6 text-cyan-400 mr-3" />
                monitor
              </h3>
              
              <p className="text-gray-300 mb-6">
                The core command for monitoring API endpoints with customizable intervals and thresholds.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Basic Usage</h4>
                  <CodeBlock 
                    code="pingify monitor <URL> [flags]" 
                    id="monitor-basic"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Available Flags</h4>
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <code className="text-cyan-400 font-mono">--interval</code>
                        <div>
                          <p className="text-white">Monitoring interval (default: 60s)</p>
                          <p className="text-gray-400 text-sm">Examples: 30s, 1m, 5m</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <code className="text-cyan-400 font-mono">--threshold</code>
                        <div>
                          <p className="text-white">Response time threshold (default: 1s)</p>
                          <p className="text-gray-400 text-sm">Examples: 500ms, 2s, 5s</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <code className="text-cyan-400 font-mono">--timeout</code>
                        <div>
                          <p className="text-white">Request timeout (default: 30s)</p>
                          <p className="text-gray-400 text-sm">Maximum time to wait for response</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <code className="text-cyan-400 font-mono">--notify</code>
                        <div>
                          <p className="text-white">Notification method</p>
                          <p className="text-gray-400 text-sm">Options: email, discord, slack</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">Monitor with custom interval and threshold:</p>
                      <CodeBlock 
                        code="pingify monitor https://api.example.com/status --interval 15s --threshold 200ms" 
                        id="monitor-custom"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Monitor with email notifications:</p>
                      <CodeBlock 
                        code="pingify monitor https://api.example.com/health --notify email --email admin@company.com" 
                        id="monitor-email"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Monitor with custom headers:</p>
                      <CodeBlock 
                        code='pingify monitor https://api.example.com/private --header "Authorization: Bearer token123"' 
                        id="monitor-headers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* AI Command */}
          <section id="ai" className="mb-16 ml-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="h-6 w-6 text-cyan-400 mr-3" />
                ai
              </h3>
              
              <p className="text-gray-300 mb-6">
                Get AI-powered analysis and suggestions for your API monitoring data using OpenAI.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Basic Usage</h4>
                  <CodeBlock 
                    code="pingify ai [command] [flags]" 
                    id="ai-basic"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Subcommands</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">Analyze recent monitoring data:</p>
                      <CodeBlock 
                        code="pingify ai analyze --logs pingify_logs.json" 
                        id="ai-analyze"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Get suggestions for performance issues:</p>
                      <CodeBlock 
                        code="pingify ai suggest --url https://api.example.com --issue slow-response" 
                        id="ai-suggest"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Explain monitoring results:</p>
                      <CodeBlock 
                        code="pingify ai explain --logs pingify_logs.json --last 24h" 
                        id="ai-explain"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>Note:</strong> AI features require an OpenAI API key. Set the <code>OPENAI_API_KEY</code> environment variable.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Logs Command */}
          <section id="logs" className="mb-16 ml-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="h-6 w-6 text-cyan-400 mr-3" />
                logs
              </h3>
              
              <p className="text-gray-300 mb-6">
                View and analyze structured JSON logs generated by Pingify monitoring.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Basic Usage</h4>
                  <CodeBlock 
                    code="pingify logs [flags]" 
                    id="logs-basic"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">View recent logs:</p>
                      <CodeBlock 
                        code="pingify logs --tail 50" 
                        id="logs-tail"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Filter logs by status:</p>
                      <CodeBlock 
                        code="pingify logs --status error --last 1h" 
                        id="logs-filter"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Export logs to file:</p>
                      <CodeBlock 
                        code="pingify logs --export csv --output monitoring_report.csv" 
                        id="logs-export"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Log Structure</h4>
                  <CodeBlock 
                    code={`{
  "timestamp": "2025-01-27T10:30:00Z",
  "url": "https://api.example.com/health",
  "status_code": 200,
  "response_time": "245ms",
  "success": true,
  "error": null,
  "headers": {
    "content-type": "application/json"
  }
}`}
                    language="json"
                    id="log-structure"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Notify Command */}
          <section id="notify" className="mb-16 ml-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="h-6 w-6 text-cyan-400 mr-3" />
                notify
              </h3>
              
              <p className="text-gray-300 mb-6">
                Configure notification settings for email, Discord, and Slack alerts.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Email Configuration</h4>
                  <CodeBlock 
                    code="pingify notify email --smtp-host smtp.gmail.com --smtp-port 587 --email your@email.com" 
                    id="notify-email"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Discord Webhook</h4>
                  <CodeBlock 
                    code="pingify notify discord --webhook https://discord.com/api/webhooks/..." 
                    id="notify-discord"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Slack Integration</h4>
                  <CodeBlock 
                    code="pingify notify slack --webhook https://hooks.slack.com/services/..." 
                    id="notify-slack"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Test Notifications</h4>
                  <CodeBlock 
                    code="pingify notify test --method email" 
                    id="notify-test"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Docker Usage */}
          <section id="docker" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Docker className="h-8 w-8 text-cyan-400 mr-3" />
                Docker Usage
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Run Pingify in a containerized environment for easy deployment and scaling.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Basic Docker Run</h3>
                  <CodeBlock 
                    code="docker run -d --name pingify-monitor aditya251610/pingify:latest monitor https://api.example.com/health" 
                    id="docker-run"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">With Environment Variables</h3>
                  <CodeBlock 
                    code={`docker run -d \\
  --name pingify-monitor \\
  -e OPENAI_API_KEY=your_openai_key \\
  -e SMTP_HOST=smtp.gmail.com \\
  -e SMTP_PORT=587 \\
  -e EMAIL_USER=your@email.com \\
  -e EMAIL_PASS=your_password \\
  aditya251610/pingify:latest monitor https://api.example.com/health --notify email`}
                    id="docker-env"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Docker Compose</h3>
                  <CodeBlock 
                    code={`version: '3.8'
services:
  pingify:
    image: aditya251610/pingify:latest
    container_name: pingify-monitor
    environment:
      - OPENAI_API_KEY=your_openai_key
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=587
      - EMAIL_USER=your@email.com
      - EMAIL_PASS=your_password
    command: monitor https://api.example.com/health --notify email --interval 30s
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs`}
                    language="yaml"
                    id="docker-compose"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Configuration */}
          <section id="configuration" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="h-8 w-8 text-cyan-400 mr-3" />
                Configuration
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Configure Pingify using environment variables or configuration files.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Environment Variables</h3>
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <code className="text-cyan-400 font-mono">OPENAI_API_KEY</code>
                          <p className="text-gray-400 text-sm">OpenAI API key for AI features</p>
                        </div>
                        <div>
                          <code className="text-cyan-400 font-mono">SMTP_HOST</code>
                          <p className="text-gray-400 text-sm">SMTP server hostname</p>
                        </div>
                        <div>
                          <code className="text-cyan-400 font-mono">SMTP_PORT</code>
                          <p className="text-gray-400 text-sm">SMTP server port (default: 587)</p>
                        </div>
                        <div>
                          <code className="text-cyan-400 font-mono">EMAIL_USER</code>
                          <p className="text-gray-400 text-sm">Email username for authentication</p>
                        </div>
                        <div>
                          <code className="text-cyan-400 font-mono">EMAIL_PASS</code>
                          <p className="text-gray-400 text-sm">Email password or app password</p>
                        </div>
                        <div>
                          <code className="text-cyan-400 font-mono">LOG_LEVEL</code>
                          <p className="text-gray-400 text-sm">Logging level (debug, info, warn, error)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Configuration File</h3>
                  <p className="text-gray-300 mb-4">Create a <code>pingify.yaml</code> file in your project directory:</p>
                  <CodeBlock 
                    code={`# Pingify Configuration
monitoring:
  default_interval: "60s"
  default_threshold: "1s"
  default_timeout: "30s"

notifications:
  email:
    smtp_host: "smtp.gmail.com"
    smtp_port: 587
    from: "alerts@yourcompany.com"
    to: ["admin@yourcompany.com"]
  
  discord:
    webhook_url: "https://discord.com/api/webhooks/..."
  
  slack:
    webhook_url: "https://hooks.slack.com/services/..."

ai:
  openai_api_key: "your_openai_key"
  model: "gpt-3.5-turbo"

logging:
  level: "info"
  file: "pingify_logs.json"
  max_size: "100MB"
  max_backups: 5`}
                    language="yaml"
                    id="config-file"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Contributing */}
          <section id="contributing" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <GitBranch className="h-8 w-8 text-cyan-400 mr-3" />
                Contributing
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We welcome contributions from the community! Here's how you can help improve Pingify.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
                  <CodeBlock 
                    code={`# Fork the repository and clone it
git clone https://github.com/yourusername/pingify.git
cd pingify

# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Install dependencies
go mod tidy

# Run tests
go test ./...`}
                    id="contributing-start"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Development Guidelines</h3>
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Follow Go best practices and conventions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Write comprehensive tests for new features</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Update documentation for any API changes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ensure backward compatibility when possible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Submitting Changes</h3>
                  <CodeBlock 
                    code={`# Commit your changes
git add .
git commit -m "feat: add new monitoring feature"

# Push to your fork
git push origin feature/your-feature-name

# Create a pull request on GitHub`}
                    id="contributing-submit"
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* License */}
          <section id="license" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="h-8 w-8 text-cyan-400 mr-3" />
                License
              </h2>
              
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Pingify is released under the MIT License. This means you can:
                </p>
                
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Use it commercially</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Modify and distribute</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Use it privately</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Include in larger works</span>
                  </li>
                </ul>

                <p className="text-gray-400 text-sm">
                  The full license text is available in the{" "}
                  <a 
                    href="https://github.com/Aditya251610/pingify_landing_page/blob/main/LICENSE" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LICENSE
                  </a>{" "}
                  file in the repository.
                </p>
              </div>
            </motion.div>
          </section>
          </div>
        </main>
      </div>
    </div>
  );
}