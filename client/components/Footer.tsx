import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Projects", href: "/projects" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
    ],
    Company: [
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    Social: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
      { name: "GitHub", href: "https://github.com", icon: Github },
      { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    ],
  };

  return (
    <footer className="bg-portfolio-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-portfolio-accent rounded-lg flex items-center justify-center">
                <span className="text-portfolio-dark font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-gray-300 text-sm">
              Crafting beautiful digital experiences
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              {footerLinks.Product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-portfolio-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-portfolio-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Get In Touch</h3>
            <a
              href="mailto:hello@portfolio.com"
              className="flex items-center gap-2 text-gray-300 hover:text-portfolio-accent transition-colors mb-4"
            >
              <Mail size={18} />
              <span className="text-sm">hello@portfolio.com</span>
            </a>
            <div className="flex gap-4">
              {footerLinks.Social.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-portfolio-accent transition-colors"
                    title={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-portfolio-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-portfolio-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
