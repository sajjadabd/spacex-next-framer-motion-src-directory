

import { useEffect, useRef } from 'react'
import { motion , useInView , useAnimationControls } from "framer-motion"
import astronaut from '../../assets/astronaut.png'
import useTypewriter from '../../hooks/useTypeWriter';
import Image from 'next/image'


const SectionOne = () => {

  const ref = useRef(null);
  const inView = useInView(ref , { once : true });

  const controls = useAnimationControls();

  const text = 'taking humans to space';
  const displayText = useTypewriter(text, 100, inView , 2500);


  useEffect( () => {
    if(inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <div>
      <main className="py-4 px-10 w-full flex justify-center items-center text-left relative">
        <aside className="w-full h-full">
          <motion.p
          ref={ref} 
          className="uppercase text-3xl pb-6">
            {displayText}
          </motion.p>
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
          transition={{ duration: 0.5, delay: 5 }}
          className="pr-24 inline-block">
          In 2020, SpaceX returned America's ability to fly NASA 
          astronauts to and from the International Space Station 
          on American vehicles for the first time since 2011, 
          In addition to flying astronauts to space for NASA, 
          SpaceX's Dragon spacecraft can also carry 
          commercial astronauts to Earth orbit, 
          the ISS or beyond.
          </motion.p>
        </aside>
        <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          ease: [0.2 , 0.6, 0.8, 1],
          delay : 1,
          duration : 5 ,
        }}
        className="relative top-0 left-0 w-full h-full">
          {/* Black gradient overlay */}
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-95"></div>
          <Image
            className="w-full object-cover object-right"
            src={astronaut}
            alt="astronaut"
          />
        </motion.div>
      </main>
    </div>
  )
}

export default SectionOne