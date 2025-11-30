import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
        onFinish();
      }, 700); // Wait for fade out animation
    }, 2500); // Display time

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1613216514014-edb92d8e3e8d?auto=format&fit=crop&w=1000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="animate-bounce-slow mb-6">
          <Logo className="scale-150" textClassName="text-5xl" />
        </div>
        
        <div className="flex space-x-2 mt-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>

        <p className="absolute bottom-10 text-xs text-muted-foreground font-medium tracking-widest uppercase opacity-60">
          Taste the Community
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
