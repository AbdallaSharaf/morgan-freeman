import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'


const Layout = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          // Remove event listener on cleanup
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);


    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <>
      <Navbar />
        <Outlet />
        <motion.div
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 100 }} // Start off-screen (below)
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
        className='fixed right-4 bottom-4 flex items-center justify-center h-11 w-11 text-white rounded-full bg-blue-600 cursor-pointer'>
          <FontAwesomeIcon icon={faArrowUp}/>
        </motion.div>
      <Footer />
    </>
  )
};

export default Layout;