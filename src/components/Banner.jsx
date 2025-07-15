import My_Image from "../image/My_banner_image.jpg";
import Side_image from "../image/111111111-Photoroom.png";
import SaveContactButton from "./SaveContactButton";
import SaveResumeButton from "./SaveResumeButton";
import Logo from "../image/IBH_Logo.png"
import Cardiac_logo from "../image/Cardiac.png"



function Banner() {
  return (
    <section className=" ">
      <div className="container xl:px-4 px-0 bg-[#D9D9D9]">
        <div className="relative bg-[#C9CBE3] grid grid-cols-[300px_1fr] xl:grid-cols-[362px_1fr]">
          <div className="relative">
            <img src={My_Image} alt="image" />
            <div className="absolute left-0 bottom-0 translate-x-0 xl:-translate-y-15 -translate-y-5">
              <div className="bg-[rgba(70,92,151,0.84)] px-3 py-1 xl:px-4 xl:py-2 text-white rounded-[4px] xl:rounded-[6px]">
                <h1 className="text-[16px] xl:text-[20px] font-bold">
                  SHUVROW ADHIKARY
                </h1>
                <h2 className="text-[14px] xl:text-[16px]">
                  Medical Technologist
                </h2>
                <h3 className="text-[12px] xl:text-[14px]">
                  (Radiology & Imaging)
                </h3>
                <p className="text-[10px] xl:text-[12px] mt-1 xl:mt-1.5">
                  IBHCCM
                </p>
              </div>
              <div>
                <SaveContactButton />
              </div>
              <div className="px-2.5 py-3 xl:text-2xl text-[15px]"><a className="text-blue-800 hover:text-white transition-all" href="https://islamibankbd.com/news-events/islami-bank-hospital-and-cardiac-center-inaugurated-in-mirpur" target="blank">ibhccm.com/mirpur</a></div>
            </div>
          </div>
          {/* IBHCCM */}
          <div className="xl:mt-95 mt-78 ">
            <div className="xl:w-[77px] pl-1 xl:pl-4 xl:h-[73px] w-[50px] h-[45px]"><img src={Logo} alt={Logo} /></div>
            <div className=" mt-2">
                <span className="text-green-800 px-1 xl:text-4xl text-2xl xl:tracking-[6px] -tracking-[2px] font-bold">I</span>
                <span className="text-green-800 px-1 xl:text-4xl text-2xl xl:tracking-[6px] -tracking-[2px] font-bold">B</span>
                <span className="text-green-800 px-1 xl:text-4xl text-2xl xl:tracking-[6px] -tracking-[2px] font-bold">H</span>
            </div>
            <div className="max-w-[100px] [h-100px] ">
              <img className="size-full object-cover" src={Cardiac_logo} alt="image" />
            </div>
            
          </div>
          <div className="absolute w-[380px] h-[320px] xl:w-[450px] xl:h-[389px] right-0 top-0 translate-x-0 -translate-y-5 ">
            <img
              className="w-full h-full object-cover"
              src={Side_image}
              alt="side"
            />
          </div>
          <div className="absolute flex flex-col items-end w-full xl:w-[410px] h-auto xl:h-[389px] right-0 top-0 translate-x-0 translate-y-0 pl-5">
            <h2 className="text-3xl xl:text-4xl text-white font-semibold tracking-tight pr-0 xl:pr-2">
              Expert Imaging
            </h2>
            <h2 className="text-2xl xl:text-3xl text-white font-semibold pr-0 xl:pr-2">
              Perfect Diagnosis
            </h2>
            <p className="text-[12px] xl:text-[14px] text-white tracking-tight pl-0 xl:pl-[220px] py-2 xl:py-3 font-mono text-right xl:text-left">
              Accurate radiology reports by certified experts — your health
              deserves clarity.
            </p>
            <div className="mt-2 xl:mt-0 scale-75 xl:scale-100 origin-right">
              <SaveResumeButton />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default Banner;

{
  /* <div className="relative w-full max-w-[500px] mx-auto">
          <div className="w-full">
            <img 
              className="w-full object-cover rounded-[10px]" 
              src={Banner_Image} 
              alt="Portfolio Banner" 
            />
          </div>
          
          <div className="absolute left-1/2 bottom-0 transform -translate-x-[87%] translate-y-[55%]  w-[29%] aspect-square max-w-[145px]">
            <img 
              className="rounded-full w-full h-full object-cover" 
              src={Profile_image} 
              alt="Profile" 
            />
            
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
              
              <circle
                cx="150"
                cy="150"
                r="75"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
              />
              
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
        </div> */
}
