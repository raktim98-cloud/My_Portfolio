import { FileText, Download, Eye } from 'lucide-react';

const ResumeButton = ({ children, onClick, className }) => {
  return (
    <div className="flex items-center justify-end py-2 xl:py-4">
      <style jsx>{`
        @keyframes documentFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(1deg); }
        }
        
        @keyframes shimmerWave {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 8px rgba(34, 197, 94, 0.7), 0 0 12px rgba(34, 197, 94, 0.5); }
        }
        
        @keyframes iconBounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.03) rotate(-2deg); }
          75% { transform: scale(1.02) rotate(2deg); }
        }
        
        @keyframes textSlide {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(1px); }
        }
        
        .document-float {
          animation: documentFloat 4s ease-in-out infinite;
        }
        
        .shimmer-wave {
          animation: shimmerWave 3s infinite;
        }
        
        .pulse-glow {
          animation: pulseGlow 2.5s infinite;
        }
        
        .icon-bounce {
          animation: iconBounce 3s infinite;
        }
        
        .text-slide {
          animation: textSlide 4s ease-in-out infinite;
        }
      `}</style>
      
      <button 
        className={`group relative inline-flex items-center justify-center px-4 py-2 xl:px-6 xl:py-3 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-l-full transform transition-all duration-500 hover:scale-105 xl:hover:scale-110 hover:shadow-md xl:hover:shadow-lg hover:shadow-emerald-500/40 xl:hover:shadow-emerald-500/50 active:scale-95 overflow-hidden pulse-glow ${className}`}
        onClick={onClick}
      >
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-l-full"></div>
        
        {/* Continuous Shimmer Wave Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-l-full shimmer-wave"></div>
        
        {/* Inner Border Glow */}
        <div className="absolute inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-l-full transition-opacity duration-500 blur-sm opacity-60"></div>
        
        {/* Left Edge Accent */}
        <div className="absolute left-0 top-0 h-full w-0.5 xl:w-1 bg-gradient-to-b from-yellow-400 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating Document Icon Background */}
        <div className="absolute left-1 xl:left-2 top-1/2 transform -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <FileText className="w-8 h-8 xl:w-10 xl:h-10 text-white document-float" />
        </div>
        
        {/* Button Content */}
        <span className="relative z-10 flex items-center space-x-1 xl:space-x-2 group-hover:text-white transition-colors duration-300">
          <div className="flex items-center space-x-0.5 xl:space-x-1">
            <FileText className="w-3 h-3 xl:w-4 xl:h-4 icon-bounce" />
            <Download className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-slide font-bold tracking-wide">
            {children || "My Resume"}
          </span>
          <Eye className="w-2.5 h-2.5 xl:w-3 xl:h-3 opacity-0 group-hover:opacity-100 transform translate-x-0.5 xl:translate-x-1 group-hover:translate-x-0 transition-all duration-500" />
        </span>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white rounded-full group-hover:w-32 xl:group-hover:w-48 group-hover:h-32 xl:group-hover:h-48 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700"></div>
        </div>
        
        {/* Success Indicators */}
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 xl:w-2 xl:h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 xl:w-2 xl:h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
      </button>
    </div>
  );
};

export default ResumeButton;