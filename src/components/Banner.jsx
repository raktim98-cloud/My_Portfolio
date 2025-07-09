import Banner_Image from "../image/Portfolio_Banner.jpg"
import Profile_image from "../image/profile_image.jpg"



function Banner() {
  return (
    <section className="py-5">
        <div className="container">
            <div className="relative">
                <div className="w-500px">
                    <img className="w-full object-cover rounded-[10px]" src={Banner_Image} alt="" />
                </div>
                <div className="absolute left-0 bottom-0 translate-x-28 translate-y-22 size-[145px] ">
                    <img className="rounded-full size-full object-cover" src={Profile_image} alt="" />
                </div>
           <svg width="300" height="300" className="absolute top-1/2 left-1/2 transform -translate-x-50 -translate-y-5">
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
        <text className="text-sm fill-white font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
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
    </section>
  )
}

export default Banner