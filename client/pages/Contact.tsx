import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! I'll get back to you soon. (This is a demo)"
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-portfolio-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's talk! I'm always excited to hear about
            new opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-portfolio-dark mb-8">
                Let's Connect
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-portfolio-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">Email</h3>
                    <a
                      href="mailto:hello@portfolio.com"
                      className="text-gray-600 hover:text-portfolio-accent transition-colors"
                    >
                      hello@portfolio.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-portfolio-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-portfolio-accent transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-portfolio-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">Location</h3>
                    <p className="text-gray-600">San Francisco, CA, USA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-portfolio-light">
                <h3 className="font-bold text-portfolio-dark mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-light rounded-lg text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-light rounded-lg text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-light rounded-lg text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-portfolio-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-portfolio-light rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-portfolio-light rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-portfolio-light rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-portfolio-dark mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-portfolio-light rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-portfolio-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
