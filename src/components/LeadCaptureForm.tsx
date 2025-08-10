import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const LeadCaptureForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate the email sending and redirect to WhatsApp
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration Initiated!",
        description: "Redirecting to WhatsApp for payment...",
      });

      // Redirect to WhatsApp with course-specific message
      const message = `Hello! I want to register for DCH Academy's ${formData.course} course.

My details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Location: ${formData.location}

Please send me payment instructions for the ₦10,000 course fee.`;

      const whatsappUrl = `https://wa.me/2347018023754?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-md mx-auto shadow-[var(--shadow-card)]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-dch-navy">Secure Your Spot</CardTitle>
        <p className="text-muted-foreground">Fill the form below to proceed with registration</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              required
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="Enter your city/state"
            />
          </div>
          
          <div>
            <Label>Select Course *</Label>
            <Select required onValueChange={(value) => handleInputChange('course', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Web Development with Flutter">Web Development with Flutter</SelectItem>
                <SelectItem value="Data Analysis with Excel & Power BI">Data Analysis with Excel & Power BI</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            variant="cta" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};