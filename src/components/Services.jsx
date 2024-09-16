import React from 'react'
import { faCar, faPaperclip, faHeart, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import image from '../assets/images/stats-bg.jpg'

const SERVICES = [
    {title: 'Nesciunt Mete', text: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.', icon: faCar},
    {title: 'Eosle Commodi', text: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.', icon: faPaperclip},
    {title: 'Ledo Markt', text: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.', icon: faHeart},
    {title: 'Asperiores Commodit', text: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.', icon: faHeart},
    {title: 'Velit Doloremque', text: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.', icon: faStar},
    {title: 'Dolori Architecto', text: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.', icon: faCheckCircle},
]
const Services = () => {
    const handleLinkClick = () => {
        const targetElement = document.getElementById('root');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div id='services' className='flex flex-col items-center justify-center mt-12 scroll-m-32'>
        <h1 className='text-4xl font-semibold'>
            Services
        </h1>
        <div className='bg-blue-500 h-1 my-4 w-12'></div>
        <p className='mx-4 text-gray-700 text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 mx-28 gap-6'>
            {SERVICES.map((item)=>{
                return (
                    <Link to='#' 
                    onClick={() => handleLinkClick(item)}
                    className='group'>
                    <div className='bg-blue-500 rounded-2xl shadow-[15px_15px_15px_15px_rgba(0,0,0,0.05)]'>
                    <div className='py-20 px-8 flex flex-col max-h-80 bg-white items-start justify-start rounded-2xl group-hover:-translate-y-[6px] transition-all duration-300 ease-in-out'>
                        <FontAwesomeIcon icon={item.icon} className='p-4 w-8 h-8 text-white rounded-full bg-blue-500'/>
                        <h2 className='text-xl font-bold my-4 group-hover:text-blue-500 transition-all duration-300 ease-in-out'>{item.title}</h2>
                        <p className='text-sm'>{item.text}</p>
                    </div>
                    </div>
                    </Link>
                )
            })}
        </div>
        <div
            className="relative w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='bg-blue-500 py-32 flex justify-center h-full bg-opacity-70'>
            <div className='grid grid-cols-1 px-14 items-center justify-center gap-24 md:gap-x-64 lg:gap-48 text-white md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <h1 className='text-center text-5xl py-4 font-bold'>232</h1>
                    <p className='text-center text-white text-opacity-70 text-lg font-semibold'>Clients</p>
                </div>
                <div>
                    <h1 className='text-center text-5xl py-4 font-bold'>521</h1>
                    <p className='text-center text-white text-opacity-70 text-lg font-semibold'>Projects</p>
                </div>
                <div>
                    <h1 className='text-center text-5xl py-4 font-bold'>1453</h1>
                    <p className='text-center text-white text-opacity-70 text-lg font-semibold'>Hours Of Support</p>
                </div>
                <div>
                    <h1 className='text-center text-5xl py-4 font-bold'>32</h1>
                    <p className='text-center text-white text-opacity-70 text-lg font-semibold'>Awards</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services