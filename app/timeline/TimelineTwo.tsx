'use client';

import React, { useRef } from 'react'
import SubHeading from '@/components/SubHeading'
import Micky from "@/assets/Mickey-Mouse.jpg";
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TimelineTwo = () => {
    const container = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        if (!container.current) return;

        const images = container.current.querySelectorAll('.img');
        
        timeline.current = gsap.timeline({ 
            defaults: { duration: 1 , repeat: -1, repeatDelay: 0.5 }
        });

        images.forEach((img, index) => {
            timeline.current?.from(img, { 
                rotate: 360, 
                opacity: 0
            });
        });

    }, { scope: container });

    const play = () => timeline.current?.play();
    const pause = () => timeline.current?.pause();
    const reverse = () => timeline.current?.reverse();
    const restart = () => timeline.current?.restart();

    return (
        <div ref={container}>
            <SubHeading text={"Timeline Controls"} />
            <div className='flex gap-2 justify-around'>
                <Image className='img' src={Micky} alt='micky' width={100} height={100} />
                <Image className='img' src={Micky} alt='micky' width={100} height={100} />
                <Image className='img' src={Micky} alt='micky' width={100} height={100} />
                <Image className='img' src={Micky} alt='micky' width={100} height={100} />  
            </div>
            <div className="mt-4 flex gap-3">
                <button onClick={play} className='bg-green-600 text-white p-2 rounded-md'>Play</button>
                <button onClick={pause} className='bg-red-600 text-white p-2 rounded-md'>Pause</button>
                <button onClick={reverse} className='bg-blue-600 text-white p-2 rounded-md'>Reverse</button>
                <button onClick={restart} className='bg-orange-600 text-white p-2 rounded-md'>Restart</button>
            </div>
        </div>
    )
}

export default TimelineTwo
