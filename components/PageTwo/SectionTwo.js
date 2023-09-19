import React , { useRef , useEffect } from 'react'
import useTypewriter from '../../hooks/useTypeWriter';
import { motion , useInView , useAnimationControls } from 'framer-motion'

import reactSVG from '../../assets/react.svg';

import Image from 'next/image'


const SectionTwo = () => {

  const titleRef1 = useRef(null);
  const inView1 = useInView(titleRef1 , { once : true });
  const title1 = 'STARLINK MISSION';
  const displayText1 = useTypewriter(title1, 100, inView1 , 1000);

  const titleRef2 = useRef(null);
  const inView2 = useInView(titleRef2 , { once : true });
  const title2 = 'READ MORE';
  const displayText2 = useTypewriter(title2, 100, inView2 , 3500);


  const controls = useAnimationControls();


  useEffect( () => {
    if(inView1) {
      controls.start("visible");
    }
  }, [inView1]);

  useEffect( () => {
    if(inView2) {
      controls.start("visible");
    }
  }, [inView2]);
  

  return (
    <div className="overflow-hidden relative flex items-center justify-center min-h-screen">
      
      <div >
        {/* Your SVG component */}
        <div 
        className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        
        >
        <motion.div 
          className='logo'
          variants={{
            hidden : { scale : 1 , y : '100vh' , rotate : '360deg' , opacity : 0 },
            visible : { scale : 1.2 , y : 0 , rotate : 0 , opacity : 1 } ,
          }}
          initial="hidden"
          animate={controls}
          transition={{ 
            ease: [0.075, 0.82, 0.165, 1],
            duration: 2, 
            delay: 1 ,
            scale : {
              duration : 7
            },
            rotate: {
              repeat : Infinity ,
              duration: 11 // custom duration for opacity property only
            }
          }}
        > 
          <Image height={200} src={reactSVG} alt="react" />
        </motion.div>
        </div>


        <div className=" grid grid-cols-3 grid-rows-2 gap-4 m-auto">
          {/* Row 1, Column 1 */}
          <div className="p-4 h-full">
            <h3 ref={titleRef1} className='h-8'>{displayText1}</h3>
            <motion.p  
            variants={{
              hidden : { opacity: 0, y: 10 },
              visible : {
                opacity: [0, 1, 0 , 1 , 0 , 1 ], 
                y: 0, 
              }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 2.5 }}
            className='pt-4'>On Friday, March 24 at 11:33 a.m. ET, 
              Falcon 9 launched 56 Starlink satellites to 
              low-Earth orbit from Space Launch 
              Complex 40 at Cope Canaveral Space 
              Force Station, Florida
            </motion.p>
          </div>

          {/* Row 1, Column 2 */}
          <div className=" p-4 h-full"></div>

          {/* Row 1, Column 3 */}
          <div className=" p-4 h-full"></div>

          {/* Row 2, Column 1 */}
          <div className=" p-4 h-full"></div>

          {/* Row 2, Column 2 */}
          <div className=" p-4 h-full"></div>

          {/* Row 2, Column 3 */}
          <div className=" p-4 h-full">
            <motion.p 
            variants={{
              hidden : { opacity: 0, y: -10 },
              visible : {
                opacity: [0, 1, 0 , 1 , 0 , 1 ], 
                y: 0, 
              }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 4.5 }}
            className='pb-4'>
            This was the tenth launch and landing 
            for this Falcon 9 first stage booster, 
            which previously launched CRS-22, Crew-3, 
            Turksat 5B, Crew-4, CRS-25, Eutelsat 
            HOTBIRD 13G, mPOWER-a and now three Starlink missions.
            </motion.p>
            <h3 className='h-8' ref={titleRef2} >{displayText2}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo