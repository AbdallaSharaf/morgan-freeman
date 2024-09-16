import React from 'react'
import image from '../assets/images/hero-img.jpg'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div
        id='home'
      className="relative w-full scroll-m-24 py-52 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className='relative flex flex-col gap-7 items-center justify-center my-12 lg:my-9 text-white'>
        <h1 className=' lg:text-7xl  text-center text-4xl font-bold'>
          I am Morgan Freeman
        </h1>
        <TypeAnimation
            sequence={[
                'Freelancer',
                2000,
                'Developer',
                2000,
                'Photographer',
                2000
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className='lg:text-4xl text-center text-2xl font-semibold'
            />
      </div>
    </div>
  )
}

export default Hero
