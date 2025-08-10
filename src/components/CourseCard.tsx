import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppButton } from './WhatsAppButton';
import { Check } from 'lucide-react';

interface CourseCardProps {
  title: string;
  benefits: string[];
  icon: React.ReactNode;
}

export const CourseCard = ({ title, benefits, icon }: CourseCardProps) => {
  return (
    <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-dch-light-cyan/20">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-dch-navy to-dch-cyan rounded-full w-fit">
          {icon}
        </div>
        <CardTitle className="text-xl text-dch-navy">{title}</CardTitle>
        <div className="text-3xl font-bold text-dch-orange">₦10,000</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-dch-cyan flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
        <WhatsAppButton 
          variant="cta"
          className="w-full"
          message={`Hello, I want to register for the ${title} course at DCH Academy for ₦10,000.`}
        >
          Enroll Now - ₦10,000
        </WhatsAppButton>
      </CardContent>
    </Card>
  );
};