import React, { useRef, useEffect } from 'react'
import Hero from './components/Hero'
import {motion} from 'framer-motion'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Portfolio from './components/Portfolio'


const App = () => {
  // const ref = useRef(null)
  useEffect(() => {
    // Adjust scroll position to account for navbar height
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    window.scrollTo({
      top: window.scrollY + navbarHeight,
      behavior: 'instant', // or 'smooth' if you prefer
    });
  }, []);
  return (
    <>
        <motion.div
          initial={{ opacity: 0, y:100}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{duration:0.5 , delay:0.25}}>
          <Hero />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:100}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5 , delay:0.25}}>
          <About />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:100}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5 , delay:0.25}}>
          <Resume />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:100}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5 , delay:0.25}}>
          <Services />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y:100}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5 , delay:0.25}}>
          <Portfolio />
        </motion.div>
        
    </>
  )
}

export default App