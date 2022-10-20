import React from 'react'

const Infobar = ({room}) => {
  return (
    <div className='w-full h-10 bg-blue-600 text-white flex'>
        <div className='ml-2 flex-1'>
            <h3 className='capitalize text-2xl'>{room}</h3>
        </div>

        <div className='bg-yellow-400'>
            <a href="/">close</a>
        </div>
    </div>
  )
}

export default Infobar