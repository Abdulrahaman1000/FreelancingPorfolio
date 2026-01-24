import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 bg-portfolio-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-portfolio-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
