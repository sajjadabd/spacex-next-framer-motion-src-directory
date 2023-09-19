import { useState, useRef , useEffect } from 'react'
import { motion , useInView , useAnimationControls } from "framer-motion";


const navLinks = [ 
  { title : "HOME", path : 0} , 
  { title : "GALLERIES", path : 1} , 
  { title : "HISTORY", path : 2} , 
  { title : "STARSHIP", path : 3} , 
  { title : "MISSION", path : 4} , 
  { title : "ABOUT", path : 5} , 
];



const Navigation = () => {

  const ref = useRef(null);
  const inView = useInView(ref , { once : true });

  const controls = useAnimationControls();
  const [sections , setSections] = useState();

  useEffect( () => {
    if(inView) {
      controls.start("visible");
    }
  }, [inView]);


  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    setSections(sections)
  }, []);



  return (
    <nav className="pt-1">
      <ul className="flex justify-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.li
            ref={ref}
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: [0, 1, 0 , 1 , 0 , 1 ], 
                y: 0, 
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 1 + index * 0.4 }}
            
          >
            <a 
              onClick={() => sections[link.path].scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-gray-400 cursor-pointer transition duration-300 ease-in-out"
            >
              {link.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation