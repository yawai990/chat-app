import React from 'react'

const InputBar = ({message,setMessage,sendMessage}) => {
  return (
    <form className='flex' onSubmit={e=>sendMessage(e)}>
      <div className='flex-1'>
        <input type="text" className='w-full p-2 outline-none' 
        value={message} onChange={e=>setMessage(e.target.value)}
        onKeyPress={e=>e.key === "Enter" && sendMessage(e)}
        placeholder='Send Message...' />

      </div>

      <button className='text-white bg-blue-600 px-2 text-lg' onClick={e=>sendMessage(e)}>Send</button>
    </form>
  )
}

export default InputBar