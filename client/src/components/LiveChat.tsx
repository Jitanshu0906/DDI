import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function LiveChat() {
  useEffect(() => {
    // Initialize live chat widget script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@tawk.to/tawk-messenger@latest/dist/index.js";
    script.async = true;
    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad(() => {
          // Set theme and styling
          window.Tawk_API.setAttributes({
            name: "Support",
            email: "support@techsolutions.com"
          });
        });
      }
    };
    document.body.appendChild(script);

    // Add CSS customization
    const style = document.createElement("style");
    style.textContent = `
      .tawk-min-header {
        background: linear-gradient(to right, #0ea5e9, #22d3ee) !important;
      }
      .tawk-rounded-element {
        background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="fixed bottom-8 right-8 z-40 cursor-pointer"
      data-testid="live-chat-widget"
    >
      <button 
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 shadow-lg hover:shadow-xl transition-shadow animate-pulse-3d"
        aria-label="Open live chat"
        data-testid="button-live-chat"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
      <p className="mt-2 text-xs text-slate-400 text-center whitespace-nowrap">
        Chat with us!
      </p>
    </div>
  );
}

// Add window type for Tawk
declare global {
  interface Window {
    Tawk_API?: any;
  }
}
