"use client";
import React, { useRef } from "react";
import SubHeading from "@/components/SubHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Micky from '@/assets/Mickey-Mouse.jpg'
import Image from "next/image";

const FlipCard = () => {
  const container = useRef(null);
  const facesRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const animateForward = contextSafe(() => {
    gsap.to(facesRef.current, {
      rotationY: 180,
      duration: 2,
    });
  });

  return (
    <div ref={container}>
      <SubHeading text="FLIP CARD" />
      <div className="perspective-1000 flex justify-center items-center cursor-pointer">
        <div
        ref={facesRef}
          className="relative faces h-[200px] w-[150px] preserve-3d"
        >
          <div onClick={animateForward} className="face front absolute flex justify-center items-center backface-hidden h-[200px] w-[150px] border-none rounded-lg bg-red-200">
            <Image src={Micky} alt={"panda"} className="backface-hidden" width={100} />
          </div>
          <div className="face back absolute flex justify-center items-center backface-hidden h-[200px] w-[150px] border-none rounded-lg bg-blue-200 rotate-y-180">
            BACK
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
