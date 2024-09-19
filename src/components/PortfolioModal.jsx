import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const PortfolioModal = ({ modalIsOpen, closeModal, selectedImage, handleNextImage, handlePrevImage, transformString, images }) => {
  return (
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
  );
};

export default PortfolioModal;
