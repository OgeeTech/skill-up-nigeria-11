import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  image?: string;
  course: string;
}

export const TestimonialCard = ({ name, location, testimonial, image, course }: TestimonialCardProps) => {
  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-dch-orange text-dch-orange" />
          ))}
        </div>
        <p className="text-foreground mb-4 italic">"{testimonial}"</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-dch-cyan text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-dch-navy">{name}</div>
            <div className="text-sm text-muted-foreground">{location}</div>
            <div className="text-xs text-dch-cyan font-medium">{course} Graduate</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};