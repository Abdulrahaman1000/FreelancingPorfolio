import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { id } = useParams();

  const projectsData: {
    [key: string]: {
      title: string;
      category: string;
      client: string;
      year: number;
      description: string;
      fullDescription: string;
      image: string;
      images: string[];
      tags: string[];
      challenges: string[];
      solutions: string[];
      results: string[];
      link?: string;
    };
  } = {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      category: "Web Development",
      client: "RetailTech Solutions",
      year: 2024,
      description:
        "A modern e-commerce platform with real-time inventory, payment processing, and customer analytics dashboard.",
      fullDescription:
        "Built a scalable e-commerce platform for a growing retail business. The platform handles thousands of products, real-time inventory updates, secure payment processing, and comprehensive analytics to track customer behavior and sales performance.",
      image:
        "https://images.unsplash.com/photo-1661956600684-297d3b3358c3?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1661956600684-297d3b3358c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      challenges: [
        "Handle high transaction volumes with consistency",
        "Real-time inventory synchronization",
        "Complex user authentication and permissions",
      ],
      solutions: [
        "Implemented efficient database indexing and caching",
        "Used WebSockets for real-time updates",
        "Built role-based access control system",
      ],
      results: [
        "40% increase in transaction speed",
        "99.9% uptime achieved",
        "Enhanced user experience leading to 25% increase in conversions",
      ],
      link: "https://example.com",
    },
    "project-management-app": {
      title: "Project Management App",
      category: "Full Stack Development",
      client: "Team Productivity Inc.",
      year: 2023,
      description:
        "Collaborative project management tool with real-time updates, team communication, and progress tracking.",
      fullDescription:
        "Developed a comprehensive project management solution that helps teams collaborate effectively. Features include real-time task updates, integrated team chat, file sharing, and automated progress tracking with beautiful visualizations.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      ],
      tags: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      challenges: [
        "Synchronize data across multiple users in real-time",
        "Complex state management for project workflows",
        "Responsive design for mobile and desktop",
      ],
      solutions: [
        "Used Firebase Realtime Database for instant updates",
        "Implemented Redux for state management",
        "Built mobile-first responsive design",
      ],
      results: [
        "Team productivity increased by 35%",
        "Adoption rate of 95% among team members",
        "Reduced meeting time by 20%",
      ],
      link: "https://example.com",
    },
    "analytics-dashboard": {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      client: "DataInsight Corp.",
      year: 2023,
      description:
        "Data visualization dashboard with interactive charts, custom reports, and real-time metrics.",
      fullDescription:
        "Created an advanced analytics dashboard that transforms complex data into actionable insights. Features real-time data updates, customizable widgets, exportable reports, and predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1661956600684-297d3b3358c3?w=800&h=600&fit=crop",
      ],
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      challenges: [
        "Handle large datasets efficiently",
        "Create performant interactive visualizations",
        "Allow custom report generation",
      ],
      solutions: [
        "Implemented data aggregation and caching layers",
        "Used D3.js for high-performance visualizations",
        "Built flexible report builder UI",
      ],
      results: [
        "Data processing speed improved by 60%",
        "Reduced analysis time by 50%",
        "Enabled data-driven decision making across organization",
      ],
    },
    "social-media-platform": {
      title: "Social Media Platform",
      category: "Full Stack Development",
      client: "ConnectHub",
      year: 2023,
      description:
        "Full-featured social media platform with user profiles, messaging, notifications, and content feeds.",
      fullDescription:
        "Built a complete social networking platform with user authentication, real-time messaging, activity feeds, notifications, and content sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1553531088-e00a4e6b1f0d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1553531088-e00a4e6b1f0d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      ],
      tags: ["React", "WebSockets", "PostgreSQL", "Redis"],
      challenges: [
        "Real-time messaging at scale",
        "Efficient database queries for feeds",
        "User privacy and security",
      ],
      solutions: [
        "Implemented WebSocket servers for real-time communication",
        "Optimized feed queries with pagination and caching",
        "Built end-to-end encryption for messages",
      ],
      results: [
        "Supporting 10,000+ concurrent users",
        "Message delivery latency under 100ms",
        "User engagement increased by 45%",
      ],
    },
    "content-management-system": {
      title: "Content Management System",
      category: "Web Development",
      client: "Digital Media Group",
      year: 2022,
      description:
        "Powerful CMS for managing digital content with rich text editing, media library, and SEO tools.",
      fullDescription:
        "Developed a headless CMS that allows content creators to manage digital content efficiently. Features include WYSIWYG editor, media management, version control, and SEO optimization tools.",
      image:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1661956600684-297d3b3358c3?w=800&h=600&fit=crop",
      ],
      tags: ["Next.js", "GraphQL", "Headless CMS", "MongoDB"],
      challenges: [
        "Intuitive content management interface",
        "Support for multiple content types",
        "API-first architecture",
      ],
      solutions: [
        "Built flexible schema system",
        "Implemented GraphQL API for flexibility",
        "Created reusable content components",
      ],
      results: [
        "Content publishing time reduced by 70%",
        "Team onboarding time cut in half",
        "Support for unlimited content types",
      ],
    },
    "mobile-app-companion": {
      title: "Mobile App Companion Web Platform",
      category: "Web Development",
      client: "MobileFirst Tech",
      year: 2022,
      description:
        "Web application companion for mobile app with real-time sync, cloud storage, and user management.",
      fullDescription:
        "Created a web platform that syncs seamlessly with mobile applications, providing cloud storage, user account management, and cross-platform compatibility.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      ],
      tags: ["React Native", "Express", "AWS", "Cloud Storage"],
      challenges: [
        "Seamless mobile-web synchronization",
        "Efficient cloud storage management",
        "Offline functionality",
      ],
      solutions: [
        "Implemented robust sync algorithm",
        "Used AWS S3 for scalable storage",
        "Built offline-first architecture",
      ],
      results: [
        "Sync latency under 2 seconds",
        "Storage cost optimized by 40%",
        "User satisfaction score of 4.8/5",
      ],
    },
  };

  const project = projectsData[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-portfolio-light">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-portfolio-dark mb-4">
              Project Not Found
            </h1>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-portfolio-accent font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-portfolio-dark text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-gray-400 text-sm">Category</p>
              <p className="text-white font-medium">{project.category}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Client</p>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Year</p>
              <p className="text-white font-medium">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-portfolio-dark mb-4">
                Project Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Challenges */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-portfolio-dark mb-4">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">•</span>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-portfolio-dark mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-portfolio-dark mb-4">
                  Results
                </h3>
                <div className="bg-portfolio-light p-6 rounded-lg">
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-portfolio-accent flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">→</span>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Technologies */}
              <div className="bg-portfolio-light p-6 rounded-lg mb-8">
                <h3 className="font-bold text-portfolio-dark mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-portfolio-dark rounded-full text-sm font-medium border border-portfolio-dark/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Project */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-portfolio-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center gap-2 justify-center"
                >
                  Visit Project
                  <ExternalLink size={20} />
                </a>
              )}

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Share Project
                </p>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20${project.title}%20project`}
                    className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-all text-sm"
                  >
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="py-16 bg-portfolio-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-portfolio-dark mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I work with clients on diverse projects across different industries.
            Let's discuss how I can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-portfolio-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
