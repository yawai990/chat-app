import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

const init = {
  name:'',room:''
}

const Join = () => {
  const [data,setData] = useState(init);
  const navigate = useNavigate();

  const handleSubmit = e=>{
    if(!data.name || !data.room){
      window.reload()
    }else{
      e.preventDefault();
      navigate(`/chat?name=${data.name}&room=${data.room}`)
    }
  }

  const change = e=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">

      <div className='w-2/5 drop-shadow bg-white p-4 rounded-md'>

          <h5 className='text-center text-2xl mb-2'>Join</h5>

        <form onSubmit={handleSubmit}>

            <div className='mb-2 p-2'>
              <input type="text" 
              name='name'
              value={data.name}
              onChange={e=>change(e)}
              className='w-full focus:border-blue-700 border border-grey-400 outline-none py-1 px-2 rounded-md' 
              placeholder='Your Name....' />
            </div>

            <div className='mb-2 p-2'>
            <input type="text" 
            name='room'
            value={data.room}
            onChange={e=>change(e)}
            className='w-full focus:border-blue-700 border border-grey-400 outline-none py-1 px-2 rounded-md'
             placeholder='Room....' />
            </div>

             <button className="bg-blue-600 py-1 w-full rounded-md text-white hover:bg-blue-700">
              Join Chat
            </button>
        </form>
      </div>
    </div>
  )
}

export default Join