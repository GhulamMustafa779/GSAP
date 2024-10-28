import React, { useRef, useEffect } from "react";
import Heading from "@/components/Heading";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";

const InfiniteTextScroll = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {

      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".text", {
        xPercent: -100,
        duration: 10,
        ease: "none",
        onComplete: () => {
          gsap.set(".text", { xPercent: 0 });
        }
      });

      return () => {
        tl.kill();
      };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Heading text={"Infinite Text Scroll"} />
      <div className="overflow-hidden">
        <div className="w-full flex">
          <h1 className="text text-[170px] text-black font-bold whitespace-nowrap pe-5">
            THIS IS THE INFINITE SCROLL
          </h1>
          <h1 className="text text-[170px] text-black font-bold whitespace-nowrap pe-5">
            THIS IS THE INFINITE SCROLL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfiniteTextScroll;
