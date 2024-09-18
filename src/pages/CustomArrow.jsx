// CustomArrow.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const PrevArrow = ({ onClick }) => (
    <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 hidden text-white rounded-full w-12 h-12 md:flex items-center justify-center text-xl hover:bg-gray-600 hover:bg-opacity-60 transition z-10"
    onClick={onClick}
    aria-label="previous"
  >
    <FontAwesomeIcon icon={faArrowLeft}/>
  </button>
);

export const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 hidden text-white rounded-full w-12 h-12 md:flex items-center justify-center text-xl hover:bg-gray-600 hover:bg-opacity-60 transition"
    onClick={onClick}
    aria-label="Next"
  >
    <FontAwesomeIcon icon={faArrowRight}/>
    </button>
);
