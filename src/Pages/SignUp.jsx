import React from 'react'
import './Style.css'    
import { Link } from 'react-router-dom'

const Sign = () => {
    return(
        <div className='login bg-[#f3bcc5] flex flex-col justify-center items-center w-full text-[#df2128]'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-[#f4c4cd] my-10'>
        <h1 className='font-bold font-kanit text-xl md:text-2xl'>CREATE ACCOUNT</h1>
        <div className='flex flex-col gap-4 mt-4 md:mt-8 w-full'>
          <input
            className='bg-[#f4c4cd] h-12 border border-[#efa0a8] outline-none px-4 text-lg text-[#c96167] rounded-md'
            type="text"
            placeholder='First name'
          />
          <input
            className='bg-[#f4c4cd] h-12 border border-[#efa0a8] outline-none px-4 text-lg text-[#c96167] rounded-md'
            type="text"
            placeholder='Last name'
          />
          <input
            className='bg-[#f4c4cd] h-12 border border-[#efa0a8] outline-none px-4 text-lg text-[#c96167] rounded-md'
            type="email"
            placeholder='Email'
          />
          <input
            className='bg-[#f4c4cd] h-12 border border-[#efa0a8] outline-none px-4 text-lg text-[#c96167] rounded-md'
            type="password"
            placeholder='Password'
          />
          <button className='bg-[#f4c4cd] h-12 text-lg text-[#df2128] border border-[#df2128] font-bold hover:bg-[#f3bcc5] duration-300'>
            CREATE
          </button>
        </div>
        <Link to='/login'>
          <div className='mt-8 font-bold hover:underline'>LOG IN</div>
        </Link>
      </div>
    </div>
    );
};

export default Sign 