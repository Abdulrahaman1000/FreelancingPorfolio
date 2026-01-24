import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-portfolio-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for creating
            exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-portfolio-dark mb-6">
                Hi, I'm a Full-Stack Developer
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With a passion for creating beautiful, functional web
                applications, I've spent the last few years helping businesses
                and startups bring their digital visions to life.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey started with a curiosity about how things work,
                which led me to web development. Since then, I've continuously
                learned and grown, staying up-to-date with the latest
                technologies and best practices.
              </p>

              <div className="flex gap-4">
                <a
                  href="mailto:hello@portfolio.com"
                  className="p-3 bg-portfolio-accent text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-portfolio-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-portfolio-dark mb-8">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Next.js",
                    "Vue.js",
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "MongoDB",
                    "GraphQL",
                  ],
                },
                {
                  category: "Tools & More",
                  skills: ["Git", "Docker", "AWS", "Firebase", "REST APIs"],
                },
              ].map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="font-bold text-portfolio-dark mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
