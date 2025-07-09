# Pingify - Ultimate API Monitoring & Testing Solution

**Monitor • Notify • Modify** - Your APIs with intelligent monitoring, real-time alerts, and AI-powered insights.

Pingify is a powerful Go-based CLI tool designed for comprehensive API monitoring and testing. Built for developers who need reliable, intelligent monitoring with minimal setup and maximum insight.

## 🚀 Why Pingify?

### ⚡ **One Command Setup**
```bash
pingify monitor https://api.example.com/health --interval 30s --notify email
```
That's it! No complex configuration, no lengthy setup processes. Just point Pingify at your API and start monitoring immediately.

### 🧠 **AI-Powered Intelligence**
- **Predictive Analysis**: AI predicts potential failures before they happen
- **Smart Anomaly Detection**: Automatically identifies unusual behavior patterns
- **Performance Optimization**: Get AI-suggested improvements for your APIs
- **Intelligent Alerting**: Reduce false positives with smart filtering

### 📧 **Instant Notifications**
- **Email Alerts**: Immediate notifications when issues are detected
- **Rich Content**: Detailed emails with error logs and performance metrics
- **Custom Thresholds**: Set different alert levels for different environments
- **Multiple Channels**: Support for Discord, Slack, and custom webhooks

### 📊 **Comprehensive Monitoring**
- **Real-time Tracking**: Monitor response times, status codes, and availability
- **JSON Logging**: Structured logs for easy integration with dashboards
- **Historical Analysis**: Track performance trends over time
- **Custom Headers**: Support for authenticated endpoints

## 🛠️ Installation

### Quick Install (Recommended)
```bash
go install github.com/Aditya251610/pingify@latest
```

### Docker
```bash
docker pull aditya251610/pingify:latest
docker run -d aditya251610/pingify:latest monitor https://api.example.com/health
```

### From Source
```bash
git clone https://github.com/Aditya251610/pingify.git
cd pingify
go build -o pingify
```

## 🎯 Quick Start

### Basic Monitoring
```bash
# Monitor an API every 60 seconds
pingify monitor https://api.example.com/health

# Custom interval and threshold
pingify monitor https://api.example.com/status --interval 15s --threshold 200ms

# With email notifications
pingify monitor https://api.example.com/health --notify email --email admin@company.com
```

### AI Analysis
```bash
# Analyze recent monitoring data
pingify ai analyze --logs pingify_logs.json

# Get performance suggestions
pingify ai suggest --url https://api.example.com --issue slow-response
```

### View Logs
```bash
# View recent logs
pingify logs --tail 50

# Filter by status
pingify logs --status error --last 1h

# Export to CSV
pingify logs --export csv --output report.csv
```

## 🌟 Key Features

### 🔍 **Intelligent Monitoring**
- **Response Time Tracking**: Monitor API response times with customizable thresholds
- **Status Code Monitoring**: Track HTTP status codes and detect failures
- **Uptime Monitoring**: Calculate and track API availability percentages
- **Custom Headers**: Support for authentication and custom request headers

### 🤖 **AI-Powered Analysis**
- **OpenAI Integration**: Leverage GPT models for intelligent analysis
- **Performance Insights**: Get actionable recommendations for optimization
- **Anomaly Detection**: Automatically identify unusual patterns
- **Predictive Monitoring**: Anticipate issues before they become critical

### 📱 **Multi-Channel Notifications**
- **Email**: Rich HTML emails with detailed error information
- **Discord**: Real-time alerts in your Discord channels
- **Slack**: Integrate with your team's Slack workspace
- **Webhooks**: Custom webhook support for any service

### 📈 **Data & Analytics**
- **JSON Logging**: Structured logs for easy parsing and analysis
- **Historical Data**: Track performance trends over time
- **Export Options**: CSV, JSON export for reporting
- **Dashboard Integration**: Easy integration with monitoring dashboards

## 🐳 Docker Usage

### Basic Docker Run
```bash
docker run -d --name pingify-monitor \
  aditya251610/pingify:latest \
  monitor https://api.example.com/health --interval 30s
```

### With Environment Variables
```bash
docker run -d --name pingify-monitor \
  -e OPENAI_API_KEY=your_openai_key \
  -e SMTP_HOST=smtp.gmail.com \
  -e EMAIL_USER=your@email.com \
  aditya251610/pingify:latest \
  monitor https://api.example.com/health --notify email
```

### Docker Compose
```yaml
version: '3.8'
services:
  pingify:
    image: aditya251610/pingify:latest
    container_name: pingify-monitor
    environment:
      - OPENAI_API_KEY=your_openai_key
      - SMTP_HOST=smtp.gmail.com
      - EMAIL_USER=your@email.com
    command: monitor https://api.example.com/health --notify email --interval 30s
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
```

## ⚙️ Configuration

### Environment Variables
```bash
export OPENAI_API_KEY="your_openai_key"        # For AI features
export SMTP_HOST="smtp.gmail.com"             # Email server
export SMTP_PORT="587"                         # Email port
export EMAIL_USER="your@email.com"            # Email username
export EMAIL_PASS="your_password"             # Email password
export LOG_LEVEL="info"                        # Logging level
```

### Configuration File (pingify.yaml)
```yaml
monitoring:
  default_interval: "60s"
  default_threshold: "1s"
  default_timeout: "30s"

notifications:
  email:
    smtp_host: "smtp.gmail.com"
    smtp_port: 587
    from: "alerts@yourcompany.com"
  
ai:
  openai_api_key: "your_openai_key"
  model: "gpt-3.5-turbo"

logging:
  level: "info"
  file: "pingify_logs.json"
```

## 📚 Use Cases

### **Development Teams**
- Monitor staging and production APIs
- Get instant alerts for deployment issues
- Track performance regressions

### **DevOps Engineers**
- Integrate with CI/CD pipelines
- Monitor microservices health
- Set up comprehensive alerting

### **Site Reliability Engineers**
- Track SLA compliance
- Monitor critical business APIs
- Analyze performance trends

### **API Providers**
- Monitor public API endpoints
- Track usage patterns
- Ensure service reliability

## 🏆 Why Choose Pingify Over Alternatives?

| Feature | Pingify | Traditional Tools |
|---------|---------|-------------------|
| **Setup Time** | < 1 minute | Hours/Days |
| **AI Analysis** | ✅ Built-in | ❌ Requires integration |
| **Cost** | 🆓 Free & Open Source | 💰 Expensive subscriptions |
| **Deployment** | 🐳 Single binary/container | 🔧 Complex infrastructure |
| **Customization** | 🛠️ Fully customizable | 🔒 Limited options |

## 🌍 Community & Support

### 🔗 **Links**
- **GitHub**: [Pingify Repository](https://github.com/Aditya251610/pingify)
- **Documentation**: [Complete Docs](https://pingify-docs.com)
- **Issues**: [Report Bugs](https://github.com/Aditya251610/pingify/issues)
- **Discussions**: [Community Forum](https://github.com/Aditya251610/pingify/discussions)

### 👥 **Connect**
- **LinkedIn**: [Aditya Sharma](https://www.linkedin.com/in/aditya-sharma-aa0638236/)
- **Twitter**: [@devharsh25](https://x.com/devharsh25)
- **Email**: [Contact Us](mailto:contact@pingify.dev)

## 📄 License

Pingify is released under the **MIT License** - completely free for personal and commercial use.

## 🤝 Contributing

We welcome contributions from the community! This project includes:

### 🌐 **Landing Page Development**
The Pingify landing page is built with modern web technologies to showcase the product's capabilities:

- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions
- **Documentation**: Interactive docs with code examples

#### **Landing Page Structure**
```
├── app/
│   ├── docs/                 # Interactive documentation
│   ├── page.tsx             # Product showcase homepage
│   └── layout.tsx           # Root layout
├── components/
│   ├── HeroSection.tsx      # Product introduction
│   ├── FeatureTimeline.tsx  # Feature demonstrations
│   ├── WhyChoose.tsx        # Feature comparisons
│   └── OpenSource.tsx       # Community engagement
└── public/assets/           # Product demos and assets
```

#### **Contributing to the Landing Page**
1. Fork the [landing page repository](https://github.com/Aditya251610/pingify_landing_page)
2. Set up the development environment:
   ```bash
   npm install
   npm run dev
   ```
3. Make your improvements (UI/UX, content, features)
4. Test responsive design and accessibility
5. Submit a pull request

### 🔧 **Core Product Development**
1. Fork the [main repository](https://github.com/Aditya251610/pingify)
2. Create a feature branch
3. Follow Go best practices
4. Add comprehensive tests
5. Update documentation
6. Submit a pull request

---

**Built with ❤️ for the developer community**

*Start monitoring your APIs today - because downtime is not an option.*