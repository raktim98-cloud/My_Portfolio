import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialList from "./SocialList";

import Social_1 from "../image/social/Social (1).png";
import Social_2 from "../image/social/Social (2).png";
import Social_3 from "../image/social/Social (3).png";
import Social_4 from "../image/social/Social (4).png";
import Social_5 from "../image/social/Social (5).png";
import Social_6 from "../image/social/Social (6).png";
import Social_7 from "../image/social/Social (7).png";
import Social_8 from "../image/social/Social (8).png";
import Social_9 from "../image/social/Social (9).png";

gsap.registerPlugin(ScrollTrigger);

const socialdata = [
  { id: 1, icon: Social_2, text: "Linkedin", link: "https://www.linkedin.com/in/raktim-shuvrow-3b55b9370/" },
  { id: 2, icon: Social_1, text: "Facebook", link: "https://www.facebook.com/raktimadhikary.shuvrow/" },
  { id: 3, icon: Social_3, text: "Instagram", link: "https://www.instagram.com/raktimshuvrow/" },
  { id: 4, icon: Social_4, text: "Youtube", link: "https://www.youtube.com/@reactionsbong" },
  { id: 5, icon: Social_5, text: "Viber", link: "/" },
  { id: 6, icon: Social_6, text: "WhatsApp", link: "https://wa.me/01795692149" },
  { id: 7, icon: Social_7, text: "SMS", link: "sms:+8801795692149" },
  { id: 8, icon: Social_8, text: "Email", link: "mailto:raktim.web.coder.bd@gmail.com" },
  { id: 9, icon: Social_9, text: "X", link: "/" }
];

function SocialContact() {
  const rowRefs = useRef([[], [], []]); 

useEffect(() => {
  const directions = [
    { x: -50, y: 0 }, // first row: from left
    { x: 50, y: 0 },  // second row: from right
    { x: 0, y: 50 },  // third row: from bottom
  ];

  rowRefs.current.forEach((row, index) => {
    gsap.from(row, {
      scrollTrigger: {
        trigger: row[0],
        start: "top 90%",
      },
      opacity: 0,
      ...directions[index],
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
}, []);


  return (
    <section className="py-10">
      <div className="container">
        <ul className="grid grid-cols-3 gap-[50px]">
          {socialdata.map((item, index) => {
            const rowIndex = Math.floor(index / 3);
            return (
              <SocialList
                key={item.id}
                item={item}
                ref={el => rowRefs.current[rowIndex][index % 3] = el}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SocialContact;
