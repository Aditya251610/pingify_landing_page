# Pingify Landing Page

A modern, responsive landing page for Pingify - the ultimate API monitoring and testing solution built with Go. This project showcases Pingify's features through an elegant, interactive web interface.

## 🚀 Features

- **Modern Design**: Beautiful, production-ready UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Engaging user experience with hover effects and transitions
- **Documentation**: Complete documentation section with code examples
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Typography**: Inter font family for modern readability

## 📁 Project Structure

```
├── app/
│   ├── docs/                 # Documentation page
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   ├── FeatureTimeline.tsx  # Interactive feature showcase
│   ├── Footer.tsx           # Site footer
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Landing hero section
│   ├── OpenSource.tsx       # Open source promotion
│   ├── Solution.tsx         # Solution overview with video
│   └── WhyChoose.tsx        # Feature highlights with modals
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── assets/              # Static assets (images, videos)
```

## 🎨 Design System

### Typography
- **Hero Text**: Large, bold headings with tight letter spacing
- **Headings**: Structured hierarchy with consistent spacing
- **Body Text**: Optimized for readability with proper line height
- **Captions**: Smaller text for metadata and labels

### Color Palette
- **Primary**: Cyan (400-600) for CTAs and highlights
- **Secondary**: Blue (500-700) for gradients and accents
- **Neutral**: Gray scale (100-900) for text and backgrounds
- **Accent Colors**: Purple, Green, Orange for feature differentiation

### Components
- **Cards**: Glass morphism effect with subtle borders
- **Buttons**: Gradient backgrounds with hover animations
- **Modals**: Backdrop blur with smooth transitions
- **Timeline**: Interactive feature showcase

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya251610/pingify_landing_page.git
   cd pingify_landing_page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Home Page (`/`)
- **Hero Section**: Animated introduction with text generation effect
- **Why Choose**: Feature highlights with interactive modals
- **Solution**: Video demonstration and key benefits
- **Feature Timeline**: Interactive showcase of Pingify capabilities
- **Open Source**: Community engagement and GitHub promotion

### Documentation (`/docs`)
- **Installation Guide**: Multiple installation methods
- **Quick Start**: Getting started examples
- **Commands Reference**: Complete CLI documentation
- **Configuration**: Environment variables and config files
- **Contributing**: Development guidelines
- **License**: MIT license information

## 🎯 Key Features

### Interactive Elements
- **Feature Modals**: Detailed feature explanations with blur backdrop
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Hover Effects**: Subtle animations on interactive elements
- **Video Integration**: Embedded demo videos

### Performance
- **Static Export**: Optimized for static hosting
- **Image Optimization**: Next.js image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Optimized**: Meta tags and structured data

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels
- **Color Contrast**: WCAG compliant color ratios
- **Focus Management**: Clear focus indicators

## 🔧 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Component styles use Tailwind utility classes

### Content
- Update component files in `components/` directory
- Modify documentation in `app/docs/page.tsx`
- Replace assets in `public/assets/`

### Configuration
- `next.config.js`: Next.js configuration
- `components.json`: shadcn/ui configuration
- `tsconfig.json`: TypeScript configuration

## 📦 Dependencies

### Core
- **next**: React framework
- **react**: UI library
- **typescript**: Type safety

### UI & Styling
- **tailwindcss**: Utility-first CSS
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **@radix-ui/***: Headless UI components

### Development
- **eslint**: Code linting
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing

## 🚀 Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Drag and drop or Git integration
- **GitHub Pages**: Static site hosting
- **AWS S3**: Static website hosting

### Build Command
```bash
npm run build
```

### Output
Static files are generated in the `out/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add TypeScript types for new components
- Test responsive design on multiple devices
- Ensure accessibility standards are met

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Pingify Landing Page](https://your-domain.com)
- **Pingify CLI**: [GitHub Repository](https://github.com/Aditya251610/pingify)
- **Documentation**: [Full Docs](https://your-domain.com/docs)

## 👨‍💻 Author

**Aditya Sharma**
- GitHub: [@Aditya251610](https://github.com/Aditya251610)
- LinkedIn: [Aditya Sharma](https://www.linkedin.com/in/aditya-sharma-aa0638236/)
- Twitter: [@devharsh25](https://x.com/devharsh25)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon library

---

Built with ❤️ for the developer community