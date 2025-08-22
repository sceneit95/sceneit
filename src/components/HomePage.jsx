import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Eye, 
  Camera, 
  MessageCircle, 
  Bookmark, 
  Search, 
  Smile,
  Play,
  Download,
  Apple,
  Smartphone,
  Twitter,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Import assets
import logo from '../assets/JustLogo.png'
import screenshot1 from '../assets/IMG_6449.jpg'
import screenshot2 from '../assets/IMG_6453.jpg'
import screenshot3 from '../assets/IMG_6455.jpg'
import screenshot4 from '../assets/IMG_6463.jpg'

export default function HomePage() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  
  const screenshots = [
    { src: screenshot1, caption: "Uncover the Magic in Every Scene", description: "Discover hidden meanings and symbolism in individual scenes" },
    { src: screenshot2, caption: "Analyze Scenes Like a Pro", description: "Professional scene analysis tools for specific moments" },
    { src: screenshot3, caption: "Save Favorite Scenes", description: "Build your personal scene collection" },
    { src: screenshot4, caption: "Find Any Scene", description: "Scene detective feature for specific moments" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="fade-in-up">
              <div className="flex items-center mb-6">
                <img src={logo} alt="SceneIt Logo" className="w-16 h-16 mr-4" />
                <h1 className="text-6xl lg:text-7xl font-bold">
                  Scene<span className="text-red-600">It</span>
                </h1>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Dive Deep Into Your 
                <span className="text-red-600"> Favorite <span className="underline decoration-red-600">Scenes</span></span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                SceneIt lets you explore the secrets, details, and magic behind every movie and TV <span className="text-red-600 font-semibold">scene</span>. 
                We don't analyze entire movies or shows - we focus on individual <span className="text-red-600 font-semibold">scenes</span> that matter to you.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="download-btn flex items-center gap-3 text-lg px-8 py-4">
                  <Apple className="w-6 h-6" />
                  App Store
                </Button>
                <Button className="download-btn flex items-center gap-3 text-lg px-8 py-4">
                  <Smartphone className="w-6 h-6" />
                  Google Play
                </Button>
              </div>
            </div>
            
            {/* Hero Mockup */}
            <div className="flex justify-center slide-in-right">
              <div className="phone-mockup glow-effect">
                <div className="phone-screen">
                  <img 
                    src={screenshots[currentScreenshot].src} 
                    alt="SceneIt App Screenshot" 
                    className="transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Powerful Features for 
              <span className="text-red-600"> <span className="underline decoration-red-600">Scene</span> Lovers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to explore and understand your favorite <span className="text-red-600 font-semibold">scenes</span> like never before. 
              We specialize in individual <span className="text-red-600 font-semibold">scene</span> analysis, not entire movies or shows.
            </p>
          </div>
          
          {/* Features Grid - New Design */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Feature 1 - Large Card */}
            <div className="feature-card-large slide-in-left">
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-large">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="feature-title-large">
                      <span className="underline decoration-red-600">Scene</span> Insights
                    </h3>
                    <p className="feature-subtitle">AI-Powered Analysis</p>
                  </div>
                </div>
                <p className="feature-description-large">
                  Uncover hidden secrets, symbolism, easter eggs, and cinematography details in any <span className="text-red-600 font-semibold">scene</span>. 
                  Our advanced AI reveals the magic behind individual moments that make movies unforgettable.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Behind-the-scenes secrets</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Symbolism & easter eggs</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Cinematography analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Large Card */}
            <div className="feature-card-large slide-in-right">
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-large">
                    <Smile className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="feature-title-large">Memes & Fun</h3>
                    <p className="feature-subtitle">Viral Content Creation</p>
                  </div>
                </div>
                <p className="feature-description-large">
                  Transform your favorite <span className="text-red-600 font-semibold">scenes</span> into shareable memes instantly. 
                  Create viral content from memorable movie moments and share them with the world.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Instant meme generation</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Custom text & effects</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Social media ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Large Card */}
            <div className="feature-card-large slide-in-left" style={{animationDelay: '0.2s'}}>
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-large">
                    <Bookmark className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="feature-title-large">
                      Save & Analyze <span className="underline decoration-red-600">Scenes</span>
                    </h3>
                    <p className="feature-subtitle">Personal Collection</p>
                  </div>
                </div>
                <p className="feature-description-large">
                  Build your personal <span className="text-red-600 font-semibold">scene</span> collection and track patterns in your preferences. 
                  Discover what makes certain moments special and analyze your viewing habits.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Personal scene library</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Pattern recognition</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Genre analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Large Card */}
            <div className="feature-card-large slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="feature-content">
                <div className="feature-header">
                  <div className="feature-icon-large">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="feature-title-large">
                      Interactive <span className="underline decoration-red-600">Scene</span> Chat
                    </h3>
                    <p className="feature-subtitle">AI Assistant</p>
                  </div>
                </div>
                <p className="feature-description-large">
                  Ask questions about any <span className="text-red-600 font-semibold">scene</span> and get instant AI answers. 
                  Explore deeper meanings, symbolism, and context for individual moments that intrigue you.
                </p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Instant AI responses</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Deep scene analysis</span>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>Context & symbolism</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See SceneIt in 
              <span className="text-red-600"> Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of <span className="text-red-600 font-semibold">scene</span> analysis with our intuitive interface. 
              Analyze individual <span className="text-red-600 font-semibold">scenes</span>, not entire movies or shows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="screenshot-card fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <img 
                  src={screenshot.src} 
                  alt={screenshot.caption}
                  className="w-full h-full object-cover"
                />
                <div className="screenshot-overlay">
                  <h3 className="text-xl font-bold mb-3">{screenshot.caption}</h3>
                  <p className="text-base text-gray-300">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="coming-soon-card fade-in-up">
              <CardContent className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Coming Soon
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 mb-8">
                  Community discussions, scene uploads, and more exciting features are on the way!
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span>Community Discussions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-6 h-6" />
                    <span>Scene Uploads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6" />
                    <span>Advanced Search</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Tagline */}
            <div className="fade-in-up">
              <div className="flex items-center mb-4">
                <img src={logo} alt="SceneIt Logo" className="w-12 h-12 mr-3" />
                <h3 className="text-2xl font-bold">
                  Scene<span className="text-red-600">It</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                For true movie lovers who want to dive deeper into their favorite <span className="text-red-600 font-semibold">scenes</span>. 
                We analyze individual <span className="text-red-600 font-semibold">scenes</span>, not entire movies.
              </p>
            </div>
            
            {/* Links */}
            <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
                <li><a href="mailto:sceneit95@gmail.com" className="hover:text-red-600 transition-colors">Contact Us</a></li>
                <li><a href="mailto:sceneit95@gmail.com" className="hover:text-red-600 transition-colors">Support</a></li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:sceneit95@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SceneIt. All rights reserved. Made with ❤️ for movie lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

