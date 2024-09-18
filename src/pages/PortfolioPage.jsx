import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { PrevArrow, NextArrow } from './CustomArrow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import testimonialImg from '../assets/images/testimonials/testimonials-2.jpg'
import { motion } from "framer-motion";

const allImages = import.meta.glob('../assets/images/portfolio/*.{jpg,png}', { eager: true });
const images = []

Object.keys(allImages).forEach((path) => {
    const imageUrl = allImages[path].default;
    images.push(imageUrl)
});

export default function PortfolioPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };
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
    <div className="flex justify-between flex-col md:flex-row gap-2 bg-gray-100 px-6 lg:px-28 py-6">
        <h1 className="font-bold text-2xl">Portfolio Details</h1>
        <div className="flex gap-3 text-sm">
            <Link to='/'><p className=" text-blue-600 hover:text-blue-400">Home</p></Link>
            <p className="text-gray-400">/</p>
            <p>Portfolio Details</p>
        </div>
    </div>
    <div className="relative mx-6 lg:mx-28">
    <Slider {...settings} className="my-20">
      {images.map((img,id)=>{
          return <img src={images[id]} alt="img" key={img} className="mb-4"/>
        })}
    </Slider>
    <motion.div
          initial={{ opacity: 0, y:100}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{duration:0.5 , delay:0.25}}>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-24 mb-20">
        <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold py-3">This is an example of portfolio details</h1>
            <p className="text-gray-700 py-2">Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
            <p className="text-gray-700 py-2">Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>
            <div className="bg-gray-100 px-8 pt-8 mb-14 relative">
                <p className="text-gray-700">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-lg pr-3 text-blue-400 text-opacity-60"/>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <FontAwesomeIcon icon={faQuoteRight} className="text-lg pl-3 text-blue-400 text-opacity-60"/>
                </p>
                <div className="flex">
                    <img src={testimonialImg} alt="" className="overflow-clip rounded-full h-24 border-8 border-white absolute bottom-[-30px]" />
                    <div className="pt-8 pl-28">
                        <h2 className="font-bold text-lg">Sara Wilsson</h2>
                        <p className="text-sm text-gray-600">Designer</p>
                    </div>
                </div>
            </div>
            <p className="text-gray-700 py-2">Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
            <p className="text-gray-700 py-2">Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
        </div>
        <div className="w-fit lg:pl-10">
            <h1  className="text-2xl font-semibold py-3">Project Information</h1>
            <div className='bg-blue-500 h-1 mb-2 w-12'></div>
            <div className="my-1">
                <p className="text-gray-500 text-opacity-50 uppercase">Category</p>
                <p>Web design</p>
            </div>
            <div className="my-1">
                <p className="text-gray-500 text-opacity-50 uppercase">Client</p>
                <p>ASU Company</p>
            </div>
            <div className="my-1">
                <p className="text-gray-500 text-opacity-50 uppercase">Project date</p>
                <p>01 March, 2020</p>
            </div>
            <div className="my-1">
                <p className="text-gray-500 text-opacity-50 uppercase">Project URL</p>
                <p><Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details'>www.example.com</Link></p>
            </div>
            <button className="mt-5"><Link to='https://bootstrapmade.com/content/demo/DevFolio/portfolio-details' className="px-10 text-white bg-blue-500 opacity-100 py-2 rounded-full hover:opacity-80 transition-all duration-300 ease-in-out">Visit Website</Link></button>
        </div>
    </div>
    </motion.div>
    </div>
    </motion.div>
    </>
  );
}
