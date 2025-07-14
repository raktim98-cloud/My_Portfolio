import React from 'react';
import { User } from 'lucide-react';

const AboutMeButton = ({ children, onClick, className }) => {
  return (
    <div className="flex items-center justify-start py-1">
      <style jsx>{`
        @keyframes continuousGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(79, 70, 229, 0.4); }
          50% { box-shadow: 0 0 10px rgba(79, 70, 229, 0.8), 0 0 15px rgba(79, 70, 229, 0.6); }
        }
        
        @keyframes continuousSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes continuousRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.03); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes continuousPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .auto-glow {
          animation: continuousGlow 3s infinite;
        }
        
        .auto-slide {
          animation: continuousSlide 4s infinite;
        }
        
        .auto-rotate {
          animation: continuousRotate 6s infinite;
        }
        
        .auto-pulse {
          animation: continuousPulse 2s infinite;
        }
      `}</style>
      
      <button 
        className={`group relative inline-flex items-center justify-center xl:px-4 px-2 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-indigo-500/50 active:scale-95 overflow-hidden auto-glow ${className}`}
        onClick={onClick}
      >
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full auto-pulse"></div>
        
        {/* Continuous Sliding Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full auto-slide"></div>
        
        {/* Inner Border Glow */}
        <div className="absolute inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full auto-pulse transition-opacity duration-500 blur-sm"></div>
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center space-x-1 group-hover:text-white transition-colors duration-300">
          <User className="w-4 h-4 auto-rotate" />
          <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">
            {children || "About Me"}
          </span>
        </span>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full group-hover:w-32 group-hover:h-32 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700"></div>
        </div>
      </button>
    </div>
  );
};

export default AboutMeButton;