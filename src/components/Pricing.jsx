import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faQuoteLeft, faQuoteRight, fas, faStar } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import image from '../assets/images/testimonials-bg.jpg'



const images = import.meta.glob("../assets/images/testimonials/*.jpg", { eager: true });

const pricings = [
    {name: 'Portrait Photography', price: '160.00'},
    {name: 'Sports Photography', price: '200.00'},
    {name: 'Wedding Photography', price: '500.00'},
    {name: 'Fashion Photography', price: '300.00'},
    {name: 'Still Life Photography', price: '120.00'},
    {name: 'Photojournalism', price: '200.00'},
]
const FAQs = [
    { question: "What is the Virtual DOM?", answer: "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as React." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML, and is used with React to describe what the UI should look like." },
    { question: "How does useState work?", answer: "useState is a React hook that lets you add state to functional components. It returns an array with two values: the current state and a function to update it." },
    { question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, used for building server-side applications." },
    { question: "How do I install npm packages?", answer: "You can install npm packages using the command 'npm install <package-name>', which installs the package and adds it to your project." },  
  ]

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    };

const testimonials = [
    {
        image: images["../assets/images/testimonials/testimonials-1.jpg"].default,
        name: "John Doe",
        job: "Software Engineer",
        quote: "Working with this team has been a transformative experience for my career."
    },
    {
        image: images["../assets/images/testimonials/testimonials-2.jpg"].default,
        name: "Jane Smith",
        job: "Product Manager",
        quote: "Their professionalism and attention to detail are unmatched in the industry."
    },
    {
        image: images["../assets/images/testimonials/testimonials-3.jpg"].default,
        name: "Michael Brown",
        job: "UX Designer",
        quote: "I've never felt more supported and encouraged to push my creativity to new heights."
    },
    {
        image: images["../assets/images/testimonials/testimonials-4.jpg"].default,
        name: "Emily Davis",
        job: "Marketing Specialist",
        quote: "This team delivers quality results on time, every time. It's a pleasure to collaborate."
    },
    {
        image: images["../assets/images/testimonials/testimonials-5.jpg"].default,
        name: "Daniel Wilson",
        job: "DevOps Engineer",
        quote: "Their commitment to innovation and excellence is truly inspiring."
    }
    ];
    
const Pricing = () => {
    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleAnswer = (index) => {
      if (openQuestions.includes(index)) {
        setOpenQuestions(openQuestions.filter((i) => i !== index));
      } else {
        setOpenQuestions([...openQuestions, index]);
      }
    };

  return (
    <section id="pricing" className='flex flex-col items-center justify-center py-12 scroll-m-24'>
        <h1 className='text-4xl font-semibold'>
            Pricing
        </h1>
        <div className='bg-blue-500 h-1 my-4 w-16'></div>
        <p className='mx-4 text-gray-700 text-center mb-12'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 w-full px-8 md:px:12 lg:px-28'>
            {pricings.map((item,id)=>{
                return <div key={id} className='flex justify-between py-3 mb-2 border-b border-dashed border-gray-500 items-center text-xl'>
                    <p className=' font-semibold'>{item.name}</p>                    
                    <p className='text-blue-600'>${item.price}</p>                    
                </div>
            })}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 mt-24  mx-8 md:mx:12 lg:mx-28'>
            <div className='lg:pl-10 lg:pr-16'>
                <h1 className='text-4xl'>Frequently Asked <span className='font-bold'>Questions</span></h1>
                <p className='text-gray-500 my-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            </div>
        <div className="space-y-4 col-span-2">
            {FAQs.map((faq, index) => (
                <div key={index} className="shadow-[10px_10px_10px_10px_rgba(0,0,0,0.05)] p-3">
                <button
                    onClick={() => toggleAnswer(index)}
                    className={`text-left w-full text-lg font-semibold group hover:text-blue-600 transition-all duration-300 ease-in-out flex justify-between py-2 ${openQuestions.includes(index) ? 'text-blue-600' : ''}`}
                >
                    <p><span className='text-[16px] text-blue-600 font-semibold'>{index+1}. </span>
                    {faq.question}</p>
                    <FontAwesomeIcon className={`transition-all duration-300 ease-in-out ${openQuestions.includes(index) ? 'rotate-90' : 'rotate-0'}`} icon={faArrowRight} />
                </button>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openQuestions.includes(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
                </div>
            ))}
    </div>
        </div>
        <div
  className="relative w-full bg-center bg-no-repeat bg-cover mt-16 overflow-hidden"
  style={{ backgroundImage: `url(${image})` }}
>
  <div className='bg-blue-500 py-24 bg-opacity-70'>
    <Slider {...settings} className="w-auto">
      {testimonials.map((item, id) => (
        <div key={id} className="text-center">
          <img
            src={item.image}
            alt={item.name}
            className='rounded-full h-24 w-24 mx-auto border-4 border-[rgba(255,255,255,0.1)] my-2' 
          />
          <h3 className="text-white text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-200 text-opacity-60 text-sm">{item.job}</p>
          <div className='flex justify-center my-5'>
            <FontAwesomeIcon icon={faStar} color='gold'/>
            <FontAwesomeIcon icon={faStar} color='gold'/>
            <FontAwesomeIcon icon={faStar} color='gold'/>
            <FontAwesomeIcon icon={faStar} color='gold'/>
            <FontAwesomeIcon icon={faStar} color='gold'/>
          </div>
          <blockquote className="text-white italic mb-6"><FontAwesomeIcon className='opacity-60 text-2xl pr-3' icon={faQuoteLeft}/>{item.quote}<FontAwesomeIcon className='opacity-60 text-2xl pl-3' icon={faQuoteRight}/></blockquote>
        </div>
      ))}
    </Slider>
  </div>
</div>

    </section>
  )
}

export default Pricing