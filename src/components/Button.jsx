import React from 'react'

const Button = ({children, onClick}) => (
    <button
      className='mt-5 px-10 text-white bg-blue-500 opacity-100 py-2 rounded-full hover:opacity-80 transition-all duration-300 ease-in-out'
      onClick={onClick}
    >
      {children}
    </button>
  )


export default Button