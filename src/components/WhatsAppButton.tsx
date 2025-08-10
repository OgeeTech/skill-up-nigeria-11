import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "whatsapp" | "cta" | "ghost";
}

export const WhatsAppButton = ({ 
  message = "Hello, I want to register for DCH Academy's short course.", 
  className,
  children,
  variant = "whatsapp"
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/2347018023754?text=${encodeURIComponent(message)}`;

  return (
    <Button
      variant={variant}
      size="lg"
      className={className}
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Join Now for ₦10,000"}
    </Button>
  );
};