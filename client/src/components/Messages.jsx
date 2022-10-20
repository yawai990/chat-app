import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';


const Messages = ({messages,name}) => {
  return (
    <ScrollToBottom>
        <div className='w-full h-96 border overflow-y-scroll'>
            {messages.map((mess,i)=>(
            <div key={i} className='mt-2'>
                <Message message={mess} name={name} />
                </div>
                ))}
        </div>
    </ScrollToBottom>
  )
}

export default Messages