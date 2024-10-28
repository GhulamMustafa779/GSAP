'use client'
import React, { useRef } from "react";
import Micky from "@/assets/Mickey-Mouse.jpg";
import Image from "next/image";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const offsetCalculation = (element: HTMLElement, container: HTMLElement): number => {
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return elementRect.left - containerRect.left;
}

const TimelineOne = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (!container.current) return;

      const images = container.current.querySelectorAll('img');
      const tl = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 2 });

        if (container.current) {
          const offset = offsetCalculation(images[0], container.current);
          tl.from(images[0], { x: -offset, opacity: 0, duration: 0.5});
          const offset2 = offsetCalculation(images[1], container.current);
          tl.from(images[1], { x: -offset2, opacity: 0, duration: 1}, "<");
          const offset3 = offsetCalculation(images[2], container.current);
          tl.from(images[2], { x: -offset3, opacity: 0, duration: 1.5}, "<");
          const offset4 = offsetCalculation(images[3], container.current);
          tl.from(images[3], { x: -offset4, opacity: 0, duration: 2},"<");
        }

      tl.to(images, { opacity: 0, duration: 0.1 });
    }, { scope: container });
    
  return (
    <div ref={container}>
      <SubHeading text={"Timeline Simple"} />
      <div className="flex gap-2 justify-around">
        <Image className="img" src={Micky} alt="micky" width={100} height={100} />
        <Image className="img" src={Micky} alt="micky" width={100} height={100} />
        <Image className="img" src={Micky} alt="micky" width={100} height={100} />
        <Image className="img" src={Micky} alt="micky" width={100} height={100} />
      </div>
    </div>
  )
}

export default TimelineOne