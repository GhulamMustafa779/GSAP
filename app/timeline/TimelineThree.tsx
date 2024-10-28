'use client';

import React, { useRef } from 'react'
import SubHeading from '@/components/SubHeading'
import Micky from "@/assets/Mickey-Mouse.jpg";
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const TimelineThree = () => {
    const container = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        if (!container.current) return;

        const images = container.current.querySelectorAll('.img');
        
        timeline.current = gsap.timeline({ 
            defaults: { duration: 1 , repeat: -1, repeatDelay: 0.5 }
        });

        timeline.current?.from(images[0], { 
            rotate: 90, 
            opacity: 0
        })
        .from(images[1], { 
            rotate: 180, 
            opacity: 0
        })
        .add('third_micky')
        .from(images[2], { 
            rotate: -270, 
            opacity: 0
        })
        .from(images[3], { 
            rotate: 360, 
            opacity: 0
        });


    }, { scope: container });

    const play = () => timeline.current?.play();
    const playThirdMicky = () => timeline.current?.play('third_micky');
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
                <button onClick={playThirdMicky} className='bg-green-600 text-white p-2 rounded-md'>Play Third Micky</button>
                <button onClick={pause} className='bg-red-600 text-white p-2 rounded-md'>Pause</button>
                <button onClick={reverse} className='bg-blue-600 text-white p-2 rounded-md'>Reverse</button>
                <button onClick={restart} className='bg-orange-600 text-white p-2 rounded-md'>Restart</button>
            </div>
        </div>
    )
}

export default TimelineThree
