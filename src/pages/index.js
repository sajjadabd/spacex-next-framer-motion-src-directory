import Image from 'next/image'

import React, { useState, useEffect, useRef } from 'react';
import PageOne from '../../components/PageOne/PageOne'
import PageTwo from '../../components/PageTwo/PageTwo';



export default function Home() {


  const scrollContainerRef = useRef(null);
  const pagetwo = useRef(null);
  

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    const handleScroll = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;

      if (direction === 1 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
      } else if (direction === -1 && currentSectionIndex > 0) {
        currentSectionIndex--;
      }

      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);



  return (
    <div 
    ref={scrollContainerRef} 
    data-scroll-container
    className='box-border overflow-hidden'>
      <div 
      data-scroll-section
      className="section w-screen h-screen px-4 py-4 bg-gradient-to-b bg-black text-stone-300">
        <div 
        data-scroll data-scroll-speed="1">
          <PageOne id="pageone" />
        </div>
      </div>
      <div 
        ref={pagetwo}
        data-scroll-section
        className="section w-screen h-screen px-4 py-4 bg-gradient-to-b bg-black text-stone-300">
        <div 
        data-scroll data-scroll-speed="2">
          <PageTwo id="pagetwo" />
        </div>
      </div>
    </div>
  )

}


