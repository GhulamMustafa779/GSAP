"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const text = ["This", "is", "my", "first", "text", "effect", "animation"];

const SimpleTextEffect = () => {
  const [index, setIndex] = useState<number>(0);
  const [clickIndex, setClickIndex] = useState<number>(0);
  const simpleTextEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t = setInterval(() => {
      if (index < text.length) setIndex((prev) => (prev + 1) % text.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  const handleClick = () => {
    setClickIndex((prev) => (prev + 1) % text.length);
  };

  useGSAP(
    () => {
      const words = simpleTextEffectRef.current?.querySelectorAll(
        ".text-effect-animation"
      );
      if (!words) return;

      gsap.set(words, { opacity: 0, scale: 0.5 });

      gsap.to(words[index], {
        opacity: 1,
        scale: 1.5,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        yoyoEase:"power2.inOut"
      });
    },
    { scope: simpleTextEffectRef, dependencies: [index] }
  );

  useGSAP(
    () => {
      const words = simpleTextEffectRef.current?.querySelectorAll(
        ".text-effect-animation-click"
      );
      if (!words) return;

      gsap.set(words[clickIndex === 0 ? text.length - 1 : clickIndex - 1 ], { opacity: 0, scale: 0.5 , overwrite: true});

      gsap.to(words[clickIndex], {
        opacity: 1,
        scale: 1.5,
        duration: 1.5,
        ease: "power2.inOut",
      });
    },
    { scope: simpleTextEffectRef, dependencies: [clickIndex] }
  );

  return (
    <section ref={simpleTextEffectRef} className="">
      {/* Animate in auto mode in specific time */}
      <div>
        <span className="text-xl text-gray-800 font-semibold">
          Simple Text Effect
        </span>
        <div className="flex justify-center items-center h-[100px] min-h-[100px]">
          {text.map((t, i) => (
            <h1
              key={i}
              className="text-effect-animation opacity-0 text-4xl font-bold text-red-400 text-center absolute"
            >
              {t}
            </h1>
          ))}
        </div>
      </div>
      {/* change the text and animate it on the click */}
      <div onClick={handleClick} className="cursor-pointer">
        <span className="text-xl text-gray-800 font-semibold">
          Simple Text Effect ( OnClick )
        </span>
        <div className="flex justify-center items-center h-[100px] min-h-[100px]">
          {text.map((t, i) => (
            <h1
              key={i}
              className="text-effect-animation-click opacity-0 text-4xl font-bold text-red-400 text-center absolute"
            >
              {t}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleTextEffect;
