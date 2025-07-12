import Banner_Image from "../image/Portfolio_Banner.jpg"
import Profile_image from "../image/profile_image.jpg"

function Banner() {
  return (
    <section className="py-5">
      <div className="container px-4">
        <div className="relative w-full max-w-[500px] mx-auto">
          {/* Banner Image - Maintains aspect ratio */}
          <div className="w-full">
            <img 
              className="w-full object-cover rounded-[10px]" 
              src={Banner_Image} 
              alt="Portfolio Banner" 
            />
          </div>
          
          {/* Profile Image - Positioned at bottom center, moved 50px left */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-[87%] translate-y-[55%]  w-[29%] aspect-square max-w-[145px]">
            <img 
              className="rounded-full w-full h-full object-cover" 
              src={Profile_image} 
              alt="Profile" 
            />
            
            {/* Animated Text SVG - Centered perfectly on profile image */}
            <svg 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[207%] h-[207%] max-w-[300px] max-h-[300px]"
              viewBox="0 0 300 300"
            >
              <defs>
                <path
                  id="circle"
                  d="M 150,75 A 75,75 0 1,1 149,75"
                  fill="none"
                  stroke="none"
                />
              </defs>
              
              {/* Red circle line */}
              <circle
                cx="150"
                cy="150"
                r="75"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
              />
              
              {/* Marquee text following the circle */}
              <text 
                className="text-[14px] sm:text-[10px] md:text-sm fill-white font-bold" 
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                <textPath href="#circle" startOffset="0%">
                  <animate
                    attributeName="startOffset"
                    values="0%;100%"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                  ISLAMI BANK HOSPITAL & CARDIAC CENTER MIRPUR-11 • ISLAMI BANK HOSPITAL & CARDIAC CENTER MIRPUR-11 •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner