import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type ConsentType = "accepted" | "declined" | null;

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if user already accepted/declined cookies
    const consent = localStorage.getItem("cookieConsent") as ConsentType;
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      enableTracking();
    }
  }, []);

  const enableTracking = (): void => {
    (window as any).gtag?.('consent', 'update', {
    analytics_storage: 'granted'
  });

  };

  const handleAccept = (): void => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    enableTracking();
  };

  const handleDecline = (): void => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[999999] bg-[#1E1951] text-white p-5 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col gap-4 font-sans animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="space-y-1.5">
        <h4 className="text-sm font-bold tracking-wide uppercase text-orange-400 font-display">
          We value your privacy 
        </h4>
        <p className="text-xs text-white/80 leading-relaxed">
          We use essential cookies and basic analytics to enhance your browsing experience, analyze site traffic, and personalize content. Learn more in our{" "}
          <Link to="/privacy-policy" className="underline hover:text-orange-400 transition-colors">
            Privacy Policy
          </Link>.
        </p>
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={handleAccept}
          className="flex-1 bg-orange hover:bg-orange/90 text-white text-xs font-bold font-display uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md cursor-pointer border-none outline-none"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white/90 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 cursor-pointer border-none outline-none"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;