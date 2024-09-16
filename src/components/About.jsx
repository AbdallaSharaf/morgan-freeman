import React from 'react'
import image from '../assets/images/profile-img.jpg'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div id='about' className='grid md:grid-cols-2 grid-cols-1 px-8 pt-8 pb-6 md:mx-5 lg:mx-24 my-12 shadow-md gap-10 scroll-m-32'>
        <div>
            <div className='flex flex-col md:flex-row gap-6 '>
                <img className='w-full md:w-[40%]' src={image} alt="" />
                <div className='w-full flex flex-col gap-4'>
                    <p className=''><span className='font-bold'>Name: </span>Morgan Freeman</p>
                    <p className=''><span className='font-bold'>Profile: </span>Full Stack Developer</p>
                    <p className=''><span className='font-bold'>Email: </span>contact@example.com</p>
                    <p className=''><span className='font-bold'>Phone: </span>(617) 557-0089</p>
                </div>
            </div>
            <h1 className='font-bold text-lg py-4 mt-4'>Skills</h1>
            <div className='flex flex-col gap-3'>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>HTML</p>
                    <p>100%</p>
                </div>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-blue-500 h-[10px] w-full my-2'></div>
                </motion.div>
            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>CSS</p>
                    <p>90%</p>
                </div>
                    <div className='w-full bg-gray-200'>
                    <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-blue-500 h-[10px] w-[90%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>JAVASCRIPT</p>
                    <p>75%</p>
                </div>
                <div className='w-full bg-gray-200'>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-blue-500 h-[10px] w-[75%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
            <div className='w-full'>
                <div className='flex justify-between text-xs font-semibold'>
                    <p>PHOTOSHOP</p>
                    <p>55%</p>
                </div>
                <div className='w-full bg-gray-200'>
                <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width:"100%"}}
                    viewport={{ once: true }}
                    transition={{duration:0.5 , delay:0.25}}>
                    <div className='bg-blue-500 h-[10px] w-[55%] my-2'></div>
                    </motion.div>
                    </div>

            </div>
        </div>
        </div>
        <div>
            <div className='text-3xl font-bold'>
                About me
            </div>
            <div className='bg-blue-500 h-[3px] w-16 my-2'></div>
            <div className='flex flex-col gap-4 text-lg text-gray-700 mt-10'>
            <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
            </p>
            <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
            </p>
            <p>
                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
            </div>
        </div>
        
    </div>
  )
}

export default About