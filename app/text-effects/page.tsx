'use client';
import React,{useEffect} from 'react'
import gsap from 'gsap'
import SimpleTextEffect from './SimpleTextEffect';
import InfiniteTextScroll from './InfiniteTextScroll';

const TestingPage = () => {

  return (
    <main className='p-[20px]'>
        <SimpleTextEffect />
        <InfiniteTextScroll />
    </main>
  )
}

export default TestingPage