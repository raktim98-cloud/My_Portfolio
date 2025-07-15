import React, { forwardRef } from "react";

const SocialList = forwardRef(({ item }, ref) => (
  <li ref={ref} className="flex flex-col items-center justify-center gap-2 ">
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="size-[70px]">
        <img
          className="w-full object-cover rounded-[5px] transition-transform duration-300 hover:scale-110"
          src={item.icon}
          alt="logo"
        />
      </div>
    </a>
    <h5 className="my-5 text-[12px] text-white">{item.text}</h5>
  </li>
));

export default SocialList;
