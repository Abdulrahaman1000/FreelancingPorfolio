import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Code, Palette, Zap, Users, Smartphone, Cloud } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build modern, responsive websites using cutting-edge technologies and best practices. Custom solutions tailored to your needs.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create beautiful, intuitive interfaces that users love and engage with. Design thinking approach for maximum impact.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimize applications for speed, scalability, and exceptional user experience. Lightning-fast load times guaranteed.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work effectively with your team to deliver projects on time and on budget. Transparent communication throughout.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that provide exceptional user experience on iOS and Android.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Deploy and manage applications on cloud platforms like AWS, Firebase, and Azure with security and scalability.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-portfolio-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">
            Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business succeed in the digital
            world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-portfolio-light p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-portfolio-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your
              business needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-portfolio-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
