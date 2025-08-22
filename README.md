# SceneIt Landing Page

A modern, beautiful landing page for the SceneIt app with a dark/red Netflix-style theme.

## 🚀 Live Demo

**Production URL:** https://zxchlzth.manus.space

## ✨ Features

- **Dark/Red Netflix-style Theme**: Cinematic black background with red accents
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Scene-Focused Messaging**: Emphasizes individual scene analysis, not entire movies
- **Redesigned Large Feature Cards**: Professional 2x2 grid layout with enhanced visual hierarchy
- **Feature Highlights**: Each card includes bullet points with key benefits
- **App Screenshots Gallery**: Showcases app functionality with larger, prominent images
- **Legal Compliance**: Complete Terms & Conditions and Privacy Policy pages
- **Smooth Animations**: Fade/slide animations throughout the site
- **App Store Ready**: Compliant with App Store submission requirements

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing for Terms/Privacy pages

## 📋 Prerequisites

Before running this project locally, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 🚀 Local Development Setup

### 1. Clone or Download the Project

If you have the project files, navigate to the project directory:

```bash
cd sceneit-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sceneit-landing/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images (app screenshots, logo)
│   │   ├── IMG_6449.jpg   # App splash screen
│   │   ├── IMG_6453.jpg   # Main interface
│   │   ├── IMG_6455.jpg   # Scene detective
│   │   ├── IMG_6463.jpg   # Saved scenes
│   │   └── JustLogo.png   # SceneIt logo
│   ├── components/        # React components
│   │   ├── HomePage.jsx   # Main landing page
│   │   ├── TermsAndConditions.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx           # Main app with routing
│   ├── App.css           # Custom styles
│   └── main.jsx          # App entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Key Design Elements

### Color Scheme
- **Background**: Pure black (#000000)
- **Primary Red**: #e50914 (Netflix red)
- **Secondary Red**: #b91c1c
- **Text**: White (#ffffff)
- **Accent Text**: Light gray (#cccccc)

### Typography
- **Headings**: Bold, large typography for impact
- **Body Text**: Clean, readable with proper line spacing
- **Scene Emphasis**: Red highlighting for the word "scene" throughout

### Animations
- **Fade In Up**: Hero section elements
- **Slide In Left/Right**: Feature cards
- **Hover Effects**: Interactive elements with smooth transitions
- **Glow Effects**: Phone mockup and buttons

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔗 Navigation

- **Home**: `/` - Main landing page
- **Terms**: `/terms` - Terms and Conditions
- **Privacy**: `/privacy` - Privacy Policy

## 📧 Contact Information

- **Email**: sceneit95@gmail.com
- **Support**: Available through the same email

## 🏪 App Store Compliance

The landing page includes:
- ✅ Detailed Terms & Conditions (14 sections)
- ✅ Comprehensive Privacy Policy (13 sections)
- ✅ GDPR and CCPA compliance sections
- ✅ Clear subscription and payment terms
- ✅ App Store/Google Play refund policy references
- ✅ Children's privacy protection (13+ requirement)
- ✅ Data collection and usage transparency

## 🎯 Scene-Focused Messaging

The landing page emphasizes that SceneIt analyzes **individual scenes**, not entire movies or TV shows:

- Hero section clearly states the focus on scenes
- Feature descriptions highlight scene-specific analysis
- "Scene" is visually emphasized throughout with red highlighting
- Clear differentiation from movie/show analysis tools

## 🚀 Deployment

The project is configured for easy deployment to various platforms:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the built files in `dist/`
- **Any Static Host**: Upload the `dist/` folder contents

## 🔧 Customization

### Updating Content
- Edit `src/components/HomePage.jsx` for main content
- Modify `src/components/TermsAndConditions.jsx` for legal terms
- Update `src/components/PrivacyPolicy.jsx` for privacy policy

### Styling Changes
- Main styles are in `src/App.css`
- Tailwind classes can be modified directly in components
- Color scheme variables are defined in the CSS root

### Adding New Pages
1. Create a new component in `src/components/`
2. Add the route in `src/App.jsx`
3. Update navigation links as needed

## 📞 Support

For questions or issues with the landing page:
- Email: sceneit95@gmail.com
- The code is well-commented for easy understanding

## 📄 License

This project is created specifically for the SceneIt app. All rights reserved.

---

**Made with ❤️ for SceneIt - The ultimate scene analysis app**

