import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-portfolio-accent text-portfolio-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-portfolio-dark text-sm">{author}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
