"use client";
import React, { useRef } from "react";
import Micky from "@/assets/Mickey-Mouse.jpg";
import Image from "next/image";
import SubHeading from "@/components/SubHeading";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const cards = [".", ".", ".", "."];

interface Props{
    onFlip: Function
    index: number
}

const Card = ({onFlip, index}:Props) => {
    const cardRef = useRef(null)
    const {contextSafe} = useGSAP({scope: cardRef});

    const flipCard = contextSafe(()=>{
        gsap.fromTo(cardRef.current,{
            rotationY:180,
            duration:2
        },{
            rotationY:0,
        })

    })

  return (
    <div ref={cardRef} onClick={flipCard} className="relative faces h-[160px] w-[120px] preserve-3d">
      <div className="face front absolute flex justify-center items-center backface-hidden h-[160px] w-[120px] border-none rounded-lg bg-red-200 p-2">
        <Image
          src={Micky}
          alt={"panda"}
          className="backface-hidden rounded-md h-100 w-auto"
        />
      </div>
      <div className="face back absolute flex justify-center items-center backface-hidden h-[160px] w-[120px] border-none rounded-lg bg-blue-200 rotate-y-180">
        BACK
      </div>
    </div>
  );
};



const FlipCardGame = () => {
  const container = useRef(null);
  const allCardsRef = useRef([]);
  const {contextSafe} = useGSAP({scope: container})

  const flipOtherCards = contextSafe(()=>{
    
  })

  return (
    <div ref={container}>
      <SubHeading text="FLIP CARD GAME" />
      <div className="perspective-1000 flex justify-center items-center gap-2 cursor-pointer">
        {cards.map((_, index) => (
          <Card
          key={index}
          onFlip={flipOtherCards}
          index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipCardGame;
