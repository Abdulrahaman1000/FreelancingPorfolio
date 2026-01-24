import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center bg-portfolio-light px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-portfolio-dark mb-4">
              404
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">
              Page Not Found
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Sorry, the page you're looking for doesn't exist yet. This section
              is being prepared and will be available soon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-portfolio-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all inline-flex items-center gap-2 justify-center"
            >
              <ArrowLeft size={20} />
              Back Home
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-portfolio-dark text-portfolio-dark rounded-lg font-medium hover:bg-portfolio-light transition-all"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-12 text-gray-600">
            In the meantime, feel free to explore the available sections or get
            in touch if you have any questions.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
