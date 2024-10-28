"use client";

import React, { useRef, useState } from "react";
import Heading from "@/components/Heading";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);

const SVGanimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const {contextSafe} = useGSAP(() => {
    tween.current = gsap.to("#rectangle", {
      motionPath: {
        path: "#path",
        align: "#rectangle",
      },
      duration: 2,
      ease: "none",
      repeat: -1,
      paused: true,
      onUpdate: () => {
        if (tween.current) {
          setProgress(tween.current.progress());
        }
      },
      onComplete: () => {
        setIsPlaying(true);
      }
    });
  }, { scope: container });

  const togglePlay = () => {
    if (!tween.current) return;
    
    if (isPlaying) {
      tween.current.pause();
    } else {
      tween.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!tween.current) return;
    const value = parseFloat(e.target.value);
    tween.current.progress(value).pause();
    setIsPlaying(false);
  };

  const ellipseClick = contextSafe(
    () => {
        if (!tween.current) return;
        
        tween.current?.pause();
        gsap.to(tween.current, {progress: 0.35, duration: 1});
        setIsPlaying(false);
      }
  );

  const polygonClick = contextSafe(
    () => {
        if (!tween.current) return;
        
        tween.current?.pause();
        gsap.to(tween.current, {progress: 0.75, duration: 1});
        setIsPlaying(false);
      }
  );

  const starClick = contextSafe(
    () => {
        if (!tween.current) return;
        
        tween.current?.pause();
        gsap.to(tween.current, {progress: 1, duration: 1});
        setIsPlaying(false);
      }
  );


  return (
    <div className="mt-3" ref={container}>
      <Heading text="SVG Animation" />
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 2000 2000"
        xmlSpace="preserve"
      >
        <style type="text/css">
          {`.st0 { fill: none; stroke: #231F20; stroke-width: 20; stroke-miterlimit: 10; }`}
        </style>
        <path
          id="path"
          className="st0"
          d="M213.98,870.82c320.85-100.84,497.47-51.61,600,14.29c104.21,66.97,129.06,149.32,224.49,173.47
      c159.72,40.41,339.83-127.12,467.35-275.51"
        />
        <rect
          id="rectangle"
          x="200"
          y="800"
          className="st0"
          width="91.84"
          height="110.2"
        />
        <ellipse
          id="circle"
          className="st0 cursor-pointer"
          cx="706.84"
          cy="1078.98"
          rx="52.04"
          ry="69.39"
          onClick={ellipseClick}
        />
        <polygon
          id="polygon"
          className="st0 cursor-pointer"
          points="1265,897.35 1187.76,904.6 1142.86,841.33 1175.2,770.82 1252.44,763.57 1297.34,826.83"
          onClick={polygonClick}
        />
        <polygon
          id="star"
          className="st0 cursor-pointer"
          points="1663.23,720.49 1616.57,717.82 1587.93,754.75 1576.05,709.55 1532.08,693.72 
      1571.39,668.45 1572.86,621.74 1609.04,651.32 1653.92,638.29 1636.96,681.84"
      onClick={starClick}
        />
      </svg>
      <div className="flex justify-center gap-3">
        <input 
          type="range" 
          min="0" 
          max="1" 
          value={tween.current?.progress()} 
          step="0.01" 
          className="w-[400px] ms-5"
          onChange={handleSliderChange}
        />
        <p>{progress.toFixed(2)}</p>
        <button onClick={togglePlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default SVGanimation;
