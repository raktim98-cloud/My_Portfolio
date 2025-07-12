import { PiStethoscopeDuotone } from "react-icons/pi";
import My_image from "../image/My_Image.jpg";

function Image_Banner() {
  return (
    <section className="bg-[#E6F0F2] py-5 ">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span>
                <PiStethoscopeDuotone />
              </span>
              <h3 className="text-[16px] md:text-3xl font-semibold">
                A Vision Beyond Images
              </h3>
              <div></div>
            </div>
            <p className="text-[14px] xl:text-[20px] xl:leading-6 leading-4 text-gray-700 py-2 font-medium">
              Every scan tells a story of care, precision, and hope — beyond just pixels.
Early detection saves lives — your health deserves attention today, not tomorrow.
            </p>
            <ul className="list-disc list-inside text-[14px] text-gray-700 mt-2">
              <li>
                 Prioritize check-ups and don’t ignore symptoms — your health comes first.
              </li>
              
            </ul>
          </div>
          <div>
            <img src={My_image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Image_Banner;
