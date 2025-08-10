import { MessageCircle } from 'lucide-react';

export const StickyWhatsApp = () => {
  const whatsappUrl = "https://wa.me/2347018023754?text=Hello,%20I%20want%20to%20register%20for%20DCH%20Academy's%20short%20course.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};