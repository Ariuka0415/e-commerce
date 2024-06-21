import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Footer/Footer.css'

const Login = () => {
    return(
        <div className='login bg-[#f3bcc5] flex flex-col lg justify-center items-center w-full text-[#df2128] '>
            <div className='w-full my-10 md:w-1/2 flex flex-col  justify-center items-center p-[48px] bg-[#f4c4cd]'>
                <h1 className='font-bold font-kanit text-[20px]'>LOGIN</h1>
                <div className='flex flex-col gap-[30px] w-full mt-[20px]'>
                    <input
                        className='bg-[#f4c4cd] h-[45px] border border-[#efa0a8] outline-none w-full text-[20px] text-[#c96167] pl-2 rounded-[5px]'
                        type="email"
                        placeholder='Email'
                    />
                    <input
                        className='bg-[#f4c4cd] h-[45px] border border-[#efa0a8] outline-none w-full text-[20px] text-[#c96167] pl-2 rounded-[5px]'
                        type="password"
                        placeholder='Password'
                    />
                    <button className='bg-[#f4c4cd] h-[45px] text-[#df2128] border border-[#df2128] font-semibold hover:bg-[#f3bcc5] duration-300 rounded-[5px]'>
                        LOGIN
                    </button>
                </div>
                <div className='flex mt-10 justify-around items-center'>
                    <Link to='/signUp'>
                        <button className='hover-underline-animation duration-300'>CREATE ACCOUNT</button>
                    </Link>
                    <span className='mx-4 w-2 h-2 bg-[#df2128] text-center rounded-full'></span>
                    <button className='hover-underline-animation duration-300'>FORGET PASSWORD</button>
                </div>
        </div>
    </div>
    )
}

export default Login 