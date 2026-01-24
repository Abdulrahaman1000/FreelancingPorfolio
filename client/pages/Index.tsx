import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Code, Palette, Zap, Users, Mail, Phone, CheckCircle, Star, Play, PlayCircle, ArrowDownToLine, Monitor, Search, FileSearch, ExternalLink, Eye, Building, Clock, Check, ChevronRight  } from 'lucide-react';
import { Server, Smartphone, Megaphone} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  
  const steps = [
    { title: 'Inquiry', icon: <FileSearch size={24} />, description: 'You reach out with your project idea, and I take time to understand your vision.' },
    { title: 'Planning', icon: <Users size={24} />, description: 'We schedule a call to discuss your project in detail and plan the workflow.' },
    { title: 'Proposal', icon: <Mail size={24} />, description: 'I send a clear proposal outlining scope, timelines, and an invoice.' },
    { title: 'Execution', icon: <Code size={24} />, description: 'I start working on your project immediately using industry best practices.' },
    { title: 'Review', icon: <CheckCircle size={24} />, description: 'You review the work, and I make adjustments to ensure it aligns with your goals.' },
    { title: 'Support', icon: <Zap size={24} />, description: 'I provide maintenance to ensure your project stays up-to-date and smooth.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  const featuredProjects = [
    {
      id: 'hotel-management',
      title: 'Radio Station Invoicing System',
      description: 'Invoicing System for billing, and analytics for small & medium radio station.',
      image: '/images/radio-invoice.jpg',
      gallery: ['/images/radio-invoice-1.jpg', '/images/radio-invoice-2.jpg', '/images/radio-invoice-3.jpg'],
      tags: ['React', 'Node.js', 'MongoDB', 'EXPRESS'],
      url: 'https://example.com/hotel-management',
      fullDescription: 'A comprehensive hotel management solution featuring real-time booking management, inventory control, automated billing, and advanced analytics dashboard. Built to handle operations for small to medium-sized hotels with multi-user access and role-based permissions.',
      features: ['Reciept Generator', 'Invoicing System', 'Automated Billing & Invoice', 'Analytics Dashboard', 'Clients Management'],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
      client: 'EMIRATE FM',
      duration: '6 months',
      year: '2024'
    },
    {
      id: 'school-management',
      title: 'VTU APPLICATION',
      description: 'This website is ClickPay, a digital wallet and utility payment platform',
      image: '/images/school-mgmt.jpg',
      gallery: ['/images/vtu1.png', '/images/vtu2.png', '/images/vtu3.png'],
      tags: ['React', 'PHP (Laravel Framework)', 'TypeScript'],
      url: 'https://clickpay.com.ng/',
      fullDescription: 'This website is ClickPay, a digital wallet and utility payment platform. It allows users to fund a wallet and conveniently pay for everyday services such as data, airtime, cable TV, electricity, and also transfer money to other users. The dashboard shows wallet balance, transaction access, beneficiaries, and account management, all in a clean, user-friendly interface designed for quick and easy payments',
      features: ['VTU App', 'Utiltiy platform', 'MTN,GLO,Airtel&9mobile SUB', 'Payment Integration'],
      technologies: ['React.js', 'Firebase', 'TypeScript', 'Material-UI', 'Chart.js'],
      client: 'SYSTEM TECHNOLOGY',
      duration: '9 months',
      year: '2023'
    },
    {
      id: 'Sass Application',
      title: 'LandBro -Real Estate platform',
      description: 'This website is LandBro, an online real estate platform focused on land and property listings.',
      image: '/images/land1.png',
      gallery: ['/images/land1.png', '/images/land2.png', '/images/land3.png'],
      tags: ['React', 'Laravel', 'API Integration'],
      url: 'https://staging.landbro.ng/',
      fullDescription: 'This website is LandBro, an online real estate platform focused on land and property listings. It allows users to search properties by location, type, and keywords, view available land details, and manage listings through a secure login/signup system. The platform is designed to make property discovery and access simple, with user authentication and search tools for buyers and investors',
      features: ['Real-time Sales Analytics', 'Inventory Tracking', 'Customer Insights', 'Revenue Forecasting', 'Custom Reports', 'Automated Alerts'],
      technologies: ['React.js', 'REST API', 'Redux', 'PHP'],
      client: 'Async Technology',
      duration: '14 months',
      year: '2021 -22'
    },
  ];

  const moreProjects = [
    {
      id: 'ecommerce-1',
      title: 'Fashion Store E-commerce',
      description: 'Complete e-commerce solution with payment integration, inventory management, and customer analytics.',
      url: 'https://example.com/fashion-store',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      year: '2023'
    },
    {
      id: 'saas-1',
      title: 'Project Management SaaS',
      description: 'Cloud-based project management tool with real-time collaboration, task tracking, and team analytics.',
      url: 'https://example.com/pm-saas',
      technologies: ['React', 'Firebase', 'Material-UI'],
      year: '2023'
    },
    {
      id: 'healthcare-1',
      title: 'Telemedicine Platform',
      description: 'HIPAA-compliant telemedicine platform with video consultations, prescription management, and patient records.',
      url: 'https://example.com/telemedicine',
      technologies: ['React', 'WebRTC', 'PostgreSQL', 'Express'],
      year: '2022'
    },
    {
      id: 'fintech-1',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution with account management, fund transfers, and transaction history.',
      url: 'https://example.com/mobile-bank',
      technologies: ['React Native', 'Node.js', 'MySQL'],
      year: '2022'
    },
    {
      id: 'education-1',
      title: 'Online Learning Management System',
      description: 'Comprehensive LMS with course management, student tracking, assessments, and certificate generation.',
      url: 'https://example.com/lms',
      technologies: ['React', 'Laravel', 'MySQL', 'AWS'],
      year: '2021'
    },
    {
      id: 'logistics-1',
      title: 'Delivery & Logistics Platform',
      description: 'Real-time delivery tracking system with route optimization, driver management, and customer notifications.',
      url: 'https://example.com/logistics',
      technologies: ['React', 'Google Maps API', 'Node.js', 'Socket.io'],
      year: '2021'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
    <div className="flex items-center">
  <img 
    src="images/profile.jpg" 
    alt="MA Digitals Logo" 
    className="h-12 w-auto rounded-full"
  />
</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-green-900 hover:text-orange-500 transition-colors font-medium">About Me</a>
             
                 <a href="#services" className="text-green-900 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#projects" className="text-green-900 hover:text-orange-500 transition-colors font-medium">Portfolio</a>
              <a href="#testimonials" className="text-green-900 hover:text-orange-500 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">Contact</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-6 space-y-4">
                <a href="#about" className="block text-green-900 font-medium">About Me</a>
               
                 <a href="#services" className="block text-green-900 font-medium">Services</a>
                <a href="#projects" className="block text-green-900 font-medium">Portfolio</a>
                <a href="#testimonials" className="block text-green-900 font-medium">Testimonials</a>
                <a href="#contact" className="block bg-orange-500 text-white px-6 py-3 rounded-lg text-center font-semibold">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-orange-400 font-semibold mb-4 flex items-center gap-2">
                <Star className="fill-orange-400" size={20} />
                8+ years building production-ready systems
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                I Help Businesses Build<span className="text-orange-400"> & Scale</span> Reliable Web Applications and also opened to long-term contract
              </h1>
              <p className="text-green-100 mb-8 text-lg leading-relaxed max-w-xl">
                With over <strong>8+ years of experience</strong>, MA Digitals builds
                <strong> production-ready software systems</strong> — not demos.
                We help businesses design, develop, and scale reliable web applications
                <strong> from architecture to deployment</strong>.
              </p>

       <div className="flex flex-col sm:flex-row gap-4 mb-8">
  <a href="images/AbdulrahmanAAdekeye1 - Resume.pdf" download className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all inline-flex items-center gap-2 justify-center">
    Download My Resume <ArrowDownToLine size={20} />
  </a>
  <a href="#projects" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all">
    View My Work
  </a>
</div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-green-700">
                <div>
                  <div className="text-3xl font-bold text-orange-400">30+</div>
                  <div className="text-sm text-green-200">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">70+</div>
                  <div className="text-sm text-green-200">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">8+</div>
                  <div className="text-sm text-green-200">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="bg-white rounded-b-lg overflow-hidden shadow-inner">
                  <div className="relative h-96">
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center bg-gradient-to-br from-indigo-50 via-white to-blue-100">
                      <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 mb-6">
                        <Code className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                        Web Development
                      </h3>
                      <p className="text-gray-600 font-medium max-w-xs">
                        Custom, responsive, and high-performance websites & web apps
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 p-4 z-20">
                      <div className="flex justify-around items-center">
                        <Code className="w-5 h-5 text-indigo-500 opacity-60" />
                        <Server className="w-5 h-5 text-purple-500 opacity-60" />
                        <Smartphone className="w-5 h-5 text-teal-500 opacity-60" />
                        <Megaphone className="w-5 h-5 text-orange-500 opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-2xl shadow-xl animate-bounce flex items-center justify-center z-30">
                <div className="text-center">
                  <div className="text-white font-bold text-2xl">30+</div>
                  <div className="text-white/90 text-[10px] uppercase tracking-wider font-bold">Clients</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-xl shadow-2xl flex items-center gap-3 z-30 border border-gray-100 animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-800 font-bold text-sm">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About <span className="text-green-700">Abdulrahman Adekeye</span>
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Highly skilled and motivated Full Stack Web & AI Developer with proven experience in building scalable, high-quality applications. Strong background in modern web technologies, AI tool integration, and product development.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Adept at implementing AI-powered solutions using tools such as ChatGPT, Claude, Hugging Face, TensorFlow, and OpenAI API. Passionate about delivering innovative solutions from concept to deployment.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To ensure every business has access to world-class software engineering — building reliable, scalable systems with professional excellence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide expert full-stack development and system architecture that delivers production-grade applications, promoting sustainable growth and digital transformation.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-700 h-[500px]">
                <img 
                  src="images/profile.jpg" 
                  alt="Abdulrahman Adekeye - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-xl border-2 border-green-700">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-green-700" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Core Skills</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-green-700 pl-3">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Vue.js', 'Angular'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white border-2 border-green-600 text-gray-800 rounded-lg text-sm font-semibold hover:bg-green-700 hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-orange-600 pl-3">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PHP', 'Laravel', 'Python', 'MySQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white border-2 border-orange-500 text-gray-800 rounded-lg text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['ChatGPT', 'Claude', 'OpenAI API', 'TensorFlow', 'Hugging Face', 'LangChain', 'Google Vertex AI', 'Stable Diffusion'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white border-2 border-blue-500 text-gray-800 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-purple-600 pl-3">DevOps & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'CI/CD', 'Git', 'RESTful APIs', 'Cloud Deployment', 'AWS', 'Azure', 'Vercel'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white border-2 border-purple-500 text-gray-800 rounded-lg text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#f4faf6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a7331] mb-6">
              Premium Services
            </h2>

            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed px-4">
              I am a senior software engineer with <strong>8+ years of experience</strong>,
              helping businesses build <strong>production-ready web and mobile applications</strong>.
              I focus on reliable, scalable systems — <strong>from architecture to deployment</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#1a7331]/10 text-[#1a7331] font-semibold rounded-full text-sm">
                7+ Years Experience
              </span>
              <span className="px-4 py-2 bg-[#1a7331]/10 text-[#1a7331] font-semibold rounded-full text-sm">
                Production Systems, Not Demos
              </span>
              <span className="px-4 py-2 bg-[#1a7331]/10 text-[#1a7331] font-semibold rounded-full text-sm">
                From Architecture to Deployment
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-slate-200 hover:border-orange-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Monitor className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Website Design & Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build fast, secure, and scalable websites designed to convert users
                and support long-term business growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-slate-200 hover:border-green-700 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-800 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Smartphone className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Web App & Mobile App Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end development of robust web and mobile applications built for
                performance, security, and scalability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-slate-200 hover:border-orange-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <FileSearch className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Data-driven SEO strategies that improve visibility, traffic, and
                measurable business results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#fce9eb] rounded-[40px] p-8 md:p-12 h-[380px] relative flex flex-col justify-between overflow-hidden border-2 border-[#f9cbcf]">
              <div className="z-10 max-w-[65%]">
                <h3 className="text-3xl font-bold text-[#1a7331] mb-6">
                  Ecommerce Development
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  High-conversion eCommerce platforms engineered for performance,
                  scalability, and secure online transactions.
                </p>
                <button className="px-10 py-3 bg-transparent border-2 border-[#ff6b00] text-[#ff6b00] rounded-lg font-bold hover:bg-[#ff6b00] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="absolute bottom-0 right-0 w-[240px] md:w-[320px]">
                <img
                  src="https://thumbs.dreamstime.com/b/golden-laptop-miniature-shopping-cart-filled-boxes-online-e-commerce-concept-vibrant-yellow-background-digital-retail-410953844.jpg"
                  alt="Ecommerce Laptop"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="bg-[#e8f0fe] rounded-[40px] p-8 md:p-12 h-[380px] relative flex flex-col justify-between overflow-hidden border-2 border-[#ccd9f9]">
              <div className="z-10 max-w-[65%]">
                <h3 className="text-3xl font-bold text-[#002d72] mb-6">
                  Online Marketing
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  ROI-focused digital marketing including SEO, PPC, analytics, and
                  conversion optimization for measurable growth.
                </p>
                <button className="px-10 py-3 bg-transparent border-2 border-[#ff6b00] text-[#ff6b00] rounded-lg font-bold hover:bg-[#ff6b00] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="absolute bottom-6 right-6 w-[180px] md:w-[220px]">
                <div className="relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22c55e] text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg z-20 whitespace-nowrap">
                    With Us!
                  </div>
                  <img
                    src="https://dashthis.com/media/3061/google_analytics.png"
                    alt="Marketing Dashboard"
                    className="w-full h-auto rounded-xl border-4 border-white shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl  mx-auto px-4">
          <div className="text-center  mb-12">
            <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wide">
              My Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-4">How I Bring Your Ideas to Life</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl bg-gradient-to-br from-green-800 to-green-900 text-white border border-green-100 p-8 md:p-12">
            <div className="flex justify-between items-center mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />

              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group transition-all duration-300 ${
                    idx <= activeStep ? 'text-orange-600' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    idx <= activeStep ? 'bg-orange-500 text-white scale-110 shadow-lg' : 'bg-white border-2 border-gray-200 text-black'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`hidden md:block absolute -bottom-8 font-bold text-xs uppercase tracking-tighter whitespace-nowrap ${
                    idx === activeStep ? 'text-orange-500' : 'text-white'
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
              <div className="order-2 md:order-1 transition-all duration-500 transform">
                <span className="text-orange-500 font-bold text-xl">0{activeStep + 1}.</span>
                <h3 className="text-3xl font-white text-white mb-4 transition-opacity duration-300">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white text-lg leading-relaxed min-h-[100px]">
                  {steps[activeStep].description}
                </p>
                
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="mt-6 flex items-center gap-2 text-white font-bold hover:text-orange-400 transition-colors"
                >
                  Next Step <ChevronRight size={20} />
                </button>
              </div>

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-64 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                  <div className="text-green-800 scale-[2.5]">
                    {steps[activeStep].icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Featured Projects</h2>
              <p className="text-slate-600 mt-4 text-lg">Digital solutions crafted with precision and purpose.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-green-700 hover:border-green-600 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-orange-500 rounded-full mb-4" />
                  
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">{project.client}</span>
                    <button 
                      className="flex items-center gap-2 text-green-700 font-bold text-sm group-hover:gap-3 transition-all"
                    >
                      VIEW <Eye size={16} className="text-orange-500" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-700/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowMoreProjects(true)}
              className="px-8 py-4 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              View More Projects
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {showMoreProjects && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
              onClick={() => setShowMoreProjects(false)} 
            />
            
            <div className="relative w-full max-w-5xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
              <div className="sticky top-0 bg-gradient-to-r from-green-700 to-green-800 text-white p-6 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">More Projects</h3>
                  <p className="text-green-100 text-sm mt-1">Explore additional projects I've worked on</p>
                </div>
                <button 
                  onClick={() => setShowMoreProjects(false)}
                  className="bg-white/10 hover:bg-red-500 rounded-full p-2 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(85vh-100px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {moreProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-green-500 transition-all hover:shadow-lg group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                          {project.title.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white border border-slate-300 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-700 font-bold text-sm hover:text-orange-500 transition-colors group-hover:gap-3"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
              onClick={() => {
                setSelectedProject(null);
                setActiveGalleryIndex(0);
              }} 
            />
            
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl animate-slideUp">
              
              <button 
                onClick={() => {
                  setSelectedProject(null);
                  setActiveGalleryIndex(0);
                }}
                className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur-md hover:bg-red-500 rounded-full p-3 transition-all duration-300 group shadow-xl"
              >
                <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="relative h-[90vh] w-full">
                <img 
                  src={selectedProject.gallery[activeGalleryIndex]} 
                  alt={`${selectedProject.title} - View ${activeGalleryIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  onError={(e) => {
                    e.target.src = selectedProject.image;
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>

                {selectedProject.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGalleryIndex((prev) => 
                          prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-orange-500 rounded-full p-4 transition-all z-40 group"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGalleryIndex((prev) => 
                          prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-orange-500 rounded-full p-4 transition-all z-40 group"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-12">
                  <div className="max-w-5xl mx-auto">
                    
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        {selectedProject.year}
                      </span>
                      {selectedProject.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-wide border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                      {selectedProject.title}
                    </h2>

                    <div className="flex flex-wrap gap-6 text-sm mb-6">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                        <Building className="text-orange-400" size={18} />
                        <span className="text-white font-semibold">{selectedProject.client}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                        <Clock className="text-orange-400" size={18} />
                        <span className="text-white font-semibold">{selectedProject.duration}</span>
                      </div>
                    </div>

                    <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-3xl drop-shadow-lg">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                      {selectedProject.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg">
                          <Check size={16} className="text-green-400 flex-shrink-0" />
                          <span className="text-white text-sm font-medium truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-md text-white rounded-lg text-xs font-semibold border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={selectedProject.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-2xl hover:shadow-orange-500/50 text-lg group hover:scale-105"
                    >
                      <ExternalLink size={22} className="group-hover:translate-x-1 transition-transform" />
                      Launch Live Project
                    </a>
                  </div>
                </div>

                <div className="absolute top-6 left-6 flex gap-2 z-40">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                        activeGalleryIndex === idx 
                          ? 'ring-4 ring-orange-500 scale-110' 
                          : 'opacity-60 hover:opacity-100 ring-2 ring-white/30'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = selectedProject.image;
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="absolute top-6 right-20 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold z-40">
                  {activeGalleryIndex + 1} / {selectedProject.gallery.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="testimonials" className="py-24 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-4">
              Trusted by Industry Leaders
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              What My Clients Say
            </h2>
            <p className="text-green-100 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed opacity-90">
              As a seasoned freelance developer, I've had the privilege of delivering high-impact solutions for startups, established businesses, and even contributing to projects at world-class companies like Async Tech, System Tech, and Lakche through remote contracts and collaborations.
            </p>
          </div>

      

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl border border-white/10 overflow-hidden relative">
              <div className="absolute top-10 left-12 text-white/10">
                <svg width="140" height="100" viewBox="0 0 24 24" fill="currentColor" className="w-36 h-36 md:w-48 md:h-48">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
                </svg>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-orange-300">
                    Outstanding expertise and delivery
                  </h3>

                  <div className="flex gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={36} className="fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl leading-relaxed text-green-50 mb-12 italic">
                    "I've worked with many developers, but MA stands out for his deep technical knowledge, clear communication, and ability to deliver production-ready code that scales. He helped us build a complex web application that integrated seamlessly with our existing systems. Professional, reliable, and highly skilled — exactly what you want in a freelance partner."
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-3xl font-bold shadow-2xl">
                      Y
                    </div>
                    <div>
                      <p className="text-2xl font-bold">Mr. Yusuf</p>
                      <p className="text-green-200 text-lg">Founder & CEO, TrustToad</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg">
                    <img 
                      src="https://thumbs.dreamstime.com/b/flat-responsive-web-design-concept-website-development-devices-eps-46203855.jpg" 
                      alt="Custom responsive web application dashboard on multiple devices"
                      className="rounded-2xl shadow-2xl relative z-20 border-12 border-gray-900"
                    />

                    <img 
                      src="https://www.shutterstock.com/image-photo/responsive-web-design-concept-on-260nw-2628284555.jpg" 
                      alt="Tablet view"
                      className="absolute -bottom-10 -left-16 w-56 md:w-72 rounded-2xl shadow-2xl z-10 hidden sm:block border-8 border-gray-900"
                    />

                    <img 
                      src="https://static.vecteezy.com/system/resources/thumbnails/070/675/040/small/responsive-website-design-on-multiple-devices-desktop-laptop-tablet-and-smartphone-displaying-modern-interface-photo.jpeg" 
                      alt="Mobile view"
                      className="absolute top-12 -right-12 w-40 md:w-48 rounded-2xl shadow-2xl z-30 hidden sm:block border-8 border-gray-900"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-40">
                      <div className="bg-orange-500 hover:bg-orange-600 transition-all w-24 h-24 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <Play size={48} className="text-white ml-2" />
                      </div>
                    </div>

                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl flex items-center gap-3 whitespace-nowrap">
                      Watch Project Demo <PlayCircle size={28} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Mr. Abdulraheem", company: "Nihmar Roheem Int'l School", quote: "Delivered a robust school management system ahead of schedule. Exceptional quality!" },
                { name: "Mr. Orekoya", company: "System Technology", quote: "Delivered a robust VTU Application System where user can Purchase Utilities e.g Airtime, Data etc!" },
                { name: "Mr. Abiola", company: "Athene Education", quote: "Transformed our online learning platform. Highly professional and talented." },
              ].map((client, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-green-50 italic mb-6">"{client.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                      {client.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-green-200 text-sm">{client.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">Let's discuss your project. Get in touch today for a free consultation and discover how we can help transform your digital presence.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:hello@madigitals.com" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
              <Mail size={22} /> walex1257@gmail.com
            </a>
            <a href="tel:+234123456789" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all flex items-center justify-center gap-3">
              <Phone size={22} /> +234 8142746379
            </a>
          </div>
          <p className="mt-8 text-green-200">📍 Lagos, Nigeria</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl font-bold mb-4">
           
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} MA Digitals. All rights reserved.</p>
          <div className="mt-4 text-sm text-gray-500">Building digital excellence since 2019</div>
        </div>
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 w-14 h-14 bg-orange-500 text-white rounded-full shadow-2xl hover:bg-orange-600 transition-all flex items-center justify-center z-50 hover:scale-110">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}