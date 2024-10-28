"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const ScrollTriggerPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to("#page1 .box", {
        rotation: 180,
        duration: 2,
        delay: 1,
        ScrollTrigger: {
          trigger: "#page1 .box",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-[100vh] overflow-y-scroll bg-blue-400 flex justify-center items-center"
    >
      <div className="p-3">
      <div className="w-[200px] h-[200px] bg-red-500"></div>
      <div className="flex justify-between items center">
        <div></div>
      </div>
      </div>
    </div>
  );
};

export default ScrollTriggerPage;
