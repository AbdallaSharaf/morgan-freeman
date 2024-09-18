import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-blue-600 w-full flex flex-col items-center justify-center py-10'>
        <p className='text-white font-semibold text-sm pb-5'>
            <FontAwesomeIcon icon={faCopyright} /> Copyright <span className='font-bold'>DevFolio</span> All Rights Reserved
        </p>
        <div className='flex justify-center gap-3 mb-2'>
            <Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html'><FontAwesomeIcon icon={faFacebook} className='text-white text-opacity-35 p-3 border border-opacity-35 border-white rounded-full hover:border-opacity-100 hover:text-opacity-100 transition-all duration-300 ease-in-out'/></Link>
            <Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html'><FontAwesomeIcon icon={faInstagram} className='text-white text-opacity-35 p-3 border border-opacity-35 border-white rounded-full hover:border-opacity-100 hover:text-opacity-100 transition-all duration-300 ease-in-out'/></Link>
            <Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html'><FontAwesomeIcon icon={faLinkedin} className='text-white text-opacity-35 p-3 border border-opacity-35 border-white rounded-full hover:border-opacity-100 hover:text-opacity-100 transition-all duration-300 ease-in-out'/></Link>
            <Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details.html'><FontAwesomeIcon icon={faTwitter} className='text-white text-opacity-35 p-3 border border-opacity-35 border-white rounded-full hover:border-opacity-100 hover:text-opacity-100 transition-all duration-300 ease-in-out'/></Link>
        </div>
        <p className='text-white font-semibold text-xs'>Designed by <Link className='text-opacity-80 text-gray-100' to='https://bootstrapmade.com/'>BootstrapMade</Link></p>
    </div>
  )
}

export default Footer