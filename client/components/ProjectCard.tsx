import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-portfolio-dark/0 group-hover:bg-portfolio-dark/20 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-portfolio-dark mb-2 group-hover:text-portfolio-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-portfolio-light text-portfolio-dark text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="inline-flex items-center gap-2 text-portfolio-accent font-medium text-sm group-hover:gap-3 transition-all">
            View Project
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
