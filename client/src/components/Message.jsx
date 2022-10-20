import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message:{user,text},name}) => {
    let sentByCurrentUser=false;

    if(user === name){
        sentByCurrentUser = true;
    }

  return (
        sentByCurrentUser  ?  <div className='w-full flex justify-end px-3 py-1'>
                <div className='w-3/5 bg-slate-200 rounded-md overflow-hidden'>
          <p style={{fontSize:'12px'}} className='text-slate-400 pl-2'>{name}</p>
                <div className='p-1'>
                <p>{ ReactEmoji.emojify(text)}</p>
                </div>
        </div>
    </div>:<div className='w-full px-3 py-1 rounded-md'>
    <div className='w-3/5 bg-slate-200 rounded-md overflow-hidden'>
        <p style={{fontSize:'12px'}} className='text-slate-400 pl-2'>{name}</p>
        <div className='p-1'>
        <p>{ ReactEmoji.emojify(text)}</p>
        </div>
        </div>
    </div>
  )
}

export default Message