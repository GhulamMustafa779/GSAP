"use client";

import React, { useRef, useState, useCallback } from "react";
import SubHeading from "@/components/SubHeading";
import Heading from "@/components/SubHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Micky from "@/assets/Mickey-Mouse.jpg";

const SimpleTweens = () => {
  const [playStates, setPlayStates] = useState([true, true, true, true]);
  const mickyRefs = useRef<(HTMLImageElement | null)[]>([]);
  const container = useRef(null);
  const tweens = useRef<gsap.core.Tween[]>([]);

  const setRef = useCallback((el: HTMLImageElement | null, index: number) => {
    mickyRefs.current[index] = el;
  }, []);

  useGSAP(() => {
    gsap.defaults({ duration: 2 });

    tweens.current = [
      gsap.to(mickyRefs.current[0], {
        x: 100,
        y: 100,
        scale: 2.5,
        rotation: 360,
        delay: 1,
        repeat: -1,
        yoyo: true,
        ease: "back.inOut",
      }),
      
      gsap.from(mickyRefs.current[1], {
        x: 300,
        rotateY: 360,
        scale: 1.5,
        opacity: 0,
        repeat: -1,
      }),

      gsap.fromTo(
        mickyRefs.current[2],
        { x: 300, rotateY: 360, scale: 1.5, opacity: 0 },
        { x: 200, rotateY: 0, scale: 1, opacity: 1, repeat: -1 }
      ),

      gsap.to(".stagger", {
        rotation: 360,
        stagger: {
          each: 0.2,
          from: "edges"
        },
        repeat: -1
      })
    ];

  }, { scope: container });

  const handlePlayPause = (index: number) => {
    setPlayStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      
      if (newStates[index]) {
        tweens.current[index].play();
      } else {
        tweens.current[index].pause();
      }
      
      return newStates;
    });
  };

  const handleReset = (index: number) => {
    tweens.current[index].restart();
  };

  const handleRevert = (index: number) => {
    tweens.current[index].reverse();
  };

  const renderControls = (index: number, label: string) => (
    <div className="flex space-x-2 mt-4">
      <button
        onClick={() => handlePlayPause(index)}
        className={`px-4 py-2 rounded-md font-semibold text-white transition-colors ${
          playStates[index] 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-green-500 hover:bg-green-600'
        }`}
      > 
        {playStates[index] ? "Pause" : "Play"} {label}
      </button>
      <button
        onClick={() => handleReset(index)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold text-white transition-colors"
      >
        Reset {label}
      </button>
      <button
        onClick={() => handleRevert(index)}
        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md font-semibold text-white transition-colors"
      >
        Revert {label}
      </button>
    </div>
  );

  return (
    <div ref={container} className="p-6 space-y-8">
      <Heading text={"SIMPLE TWEENS"} />
      <div>
        <SubHeading text={"gsap.to()"} />
        <div className="w-full min-h-[300px] relative">
          <Image
            ref={(el) => setRef(el, 0)}
            src={Micky}
            alt={"micky"}
            className="w-[70px] h-auto absolute"
          />
        </div>
        {renderControls(0, "gsap.to()")}
      </div>
      <div>
        <SubHeading text={"gsap.from()"} />
        <div className="w-full min-h-[300px] relative">
          <Image
            ref={(el) => setRef(el, 1)}
            src={Micky}
            alt={"micky"}
            className="w-[70px] h-auto absolute"
          />
        </div>
        {renderControls(1, "gsap.from()")}
      </div>
      <div>
        <SubHeading text={"gsap.fromTo()"} />
        <div className="w-full min-h-[300px] relative">
          <Image
            ref={(el) => setRef(el, 2)}
            src={Micky}
            alt={"micky"}
            className="w-[70px] h-auto absolute"
          />
        </div>
        {renderControls(2, "gsap.fromTo()")}
      </div>
      <div>
        <SubHeading text={"Stagger"} />
        <div className="flex justify-between w-full min-h-[300px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative">
              <Image
                src={Micky}
                alt={"micky"}
                className="stagger w-[70px] h-auto"
              />
            </div>
          ))}
        </div>
        {renderControls(3, "Stagger")}
      </div>
    </div>
  );
};

export default SimpleTweens;
