import { useState } from "react";
import React from 'react'
import {faMagnifyingGlassPlus, faLink, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

const allImages = import.meta.glob('../assets/images/portfolio/*.{jpg,png}', { eager: true });

const images = {
    books: [],
    products: [],
    app: [],
    brandings: [],
};

Object.keys(allImages).forEach((path) => {
    const imageUrl = allImages[path].default;
    const imageName = path.split('/').pop().split('.')[0];
    const imageDescription = 'Lorem ipsum, dolor sit amet consectetur'
    
    if (path.includes('books')) {
        images.books.push({ url: imageUrl, name: imageName, description: imageDescription });
    } else if (path.includes('product')) {
        images.products.push({ url: imageUrl, name: imageName, description: imageDescription });
    } else if (path.includes('app')) {
        images.app.push({ url: imageUrl, name: imageName, description: imageDescription });
    } else if (path.includes('branding')) {
        images.brandings.push({ url: imageUrl, name: imageName, description: imageDescription });
    }
});

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
  const categories = ['all', 'books', 'products', 'app', 'brandings'];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track index of selected image
  const [currentImages, setCurrentImages] = useState(images); // Track images in the current category

  const openModal = (index, filteredImages) => {
      setSelectedImageIndex(index); // Set the index of the clicked image
      setCurrentImages(filteredImages); // Store the currently filtered images
      setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const transformString = (input) => {
    const [name, number] = input.split('-');
    return `${name.charAt(0).toUpperCase() + name.slice(1)} ${number}`;
  }

  const getFilteredImages = () => {
    if (selectedCategory === 'all') {
      // Flatten all image arrays into one array
      return Object.values(images).flat();
    }
    return images[selectedCategory];
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      (prevIndex + 1) % currentImages.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  const selectedImage = currentImages[selectedImageIndex]; // Get the current image based on index

  return (
    <div id="portfolio" className='flex flex-col items-center justify-center my-16 scroll-m-24'>
        <h1 className='text-4xl font-semibold'>
            Portfolio
        </h1>
        <div className='bg-blue-500 h-1 my-4 w-16'></div>
        <p className='mx-4 text-gray-700 text-center mb-16'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        
      <div className="flex gap-4 text-gray-700">
        {categories.map((category) => (
          <button
            key={category}
            className={`uppercase font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out ${selectedCategory === category ? 'text-blue-600' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="image-grid relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-8 md:mx:12 lg:mx-28">
        {getFilteredImages().map((image, index) => (
          <div key={index} className="relative group h-auto">
            <img src={image.url} alt={image.name} className="w-full h-auto object-cover" />
            <div className='absolute inset-6 self-end flex justify-between p-4 gap-6 items-center max-h-max 
         bg-white bg-opacity-75 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform'>
            <div className="">
                <h2 className="text-lg font-semibold">{transformString(image.name) || 'Image Title'}</h2>
                <p className='text-gray-600'>
                {image.description || 'Image Description'}
                </p>
            </div>
            <div className="flex gap-3 text-2xl">
            <FontAwesomeIcon onClick={() => openModal(index, getFilteredImages())} className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out" icon={faMagnifyingGlassPlus}/>
            <Link to='/portfolio' ><FontAwesomeIcon className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out" icon={faLink}/></Link>
            </div>
        </div>
          </div>
        ))}
      </div>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black md:bg-opacity-80 z-40 flex items-center justify-center"
  className="relative z-50 flex outline-none justify-between items-center"
  contentLabel="Modal"
  appElement={document.getElementById('root')}
>
  <button onClick={handlePrevImage} className="p-4 hidden lg:block bg-white">
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
  <div onClick={closeModal} className="relative px-16 flex flex-col justify-center items-center">
    <div onClick={closeModal} className="relative w-full outline-none md:h-3/4 lg:w-3/4">
      {selectedImage ? (
        <>
          <img
            src={selectedImage.url}
            className="w-full object-contain lg:h-full md:h-full"
            onClick={closeModal}
            alt={selectedImage.name}
          />
          <div className="hidden lg:block bg-white w-full px-5 pt-5 pb-10">
            <h2 className="text-2xl font-semibold">{transformString(selectedImage.name)}</h2>
          </div>
          <div className="absolute inset-8 hidden md:block lg:hidden self-end items-center justify-center text-white text-3xl font-semibold">
            {transformString(selectedImage.name)}
          </div>
          <div className="block md:hidden text-white w-full px-5 pt-5 pb-10">
            <h2 className="text-2xl font-semibold">{transformString(selectedImage.name)}</h2>
          </div>
        </>
      ) : (
        <p>No image selected</p>
      )}
    </div>
  </div>
  <button onClick={handleNextImage} className="p-4 hidden lg:block bg-white">
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</Modal>
    </div>
  );
};

export default Portfolio;
