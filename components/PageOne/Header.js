import { useRef , useEffect } from 'react'
import { motion , useInView , useAnimationControls } from "framer-motion"
import { useState } from 'react'
import Navigation from './Navigation';

const spacexCharacters = ["S", "P", "A", "C", "E", "X"];

const Header = () => {

  const ref = useRef(null);
  const inView = useInView(ref , { once : true });

  const controls = useAnimationControls();


  useEffect( () => {
    if(inView) {
      controls.start("visible");
    }
  }, [inView]);


  const [charactersAnimation, setCharactersAnimation] = useState(
    spacexCharacters.map(() => ({
      opacity: 1,
      y: Math.random() * 10 - 5,
    }))
  );

  return (
    <div className="flex justify-between px-10 py-4">

      <div className="flex">
        {spacexCharacters.map((char, index) => (
          <motion.div
            ref={ref}
            key={index}
            className="text-3xl font-bold font-spacex"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.75, delay:  Math.random() * 0.8 , once : true  }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      <Navigation />

    </div>
  )
}

export default Header