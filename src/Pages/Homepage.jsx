import React, { useState, useEffect, useRef } from 'react'
import Vector2 from '../Components/Assets/Vector2.svg';
import Vector3 from '../Components/Assets/Vector3.svg';
import Popular from '../Components/Popular/Popular';
import '../Components/Footer/Footer.css'
import NewProducts from '../Components/newProducts/NewProducts';

const Homepage = () => {
    const [isDesOpen, setIsDesOpen] = useState(true);

    const openBtn =()=>{
        setIsDesOpen(!isDesOpen);
    }; 

    return(
        <div className='bg-[#f4c4cd]'>
            <div className='flex justify-around bg-[#f4c4cd] p-10 sm:p-2 md:p-12 lg:p-14 flex-wrap'>
                <img 
                    src="https://bonbonbon.com/cdn/shop/files/36-piece-mixed_e5643350-e79d-4ca1-873e-b2d549e4bf79.png?v=1717170178&width=1200" 
                    alt="Chocolates" className='w-full sm:w-7/12 lg:w-7/12 md:w-7/12'
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                <div className='text-[#df1f26] flex flex-col items-center justify-center w-full sm:w-full lg:w-5/12 md:w-5/12'>
                    <div className='collection text-3xl md:text-5xl lg:text-6xl font-bold '>
                        <h1>MIXED BOX OF BONS</h1>
                    </div>
                    <div className='price text-xl md:text-2xl lg:text-3xl my-8'>
                        <h1>$126.00</h1>  
                    </div>
                    <button className='bg-[#b71c1c] text-[#f4c4cd] px-4 py-2 rounded-md hover:bg-[#c96167] duration-300 focus:outline-none'>
                        SHOP THE COLLECTION
                    </button> 
                    <div className='mt-12 w-full mx-4 sm:mx-6 border-t border-[#c96167] '>
                        <div className='flex justify-between items-center'>
                            <h1 className='leading-9 text-lg md:text-xl lg:text-2xl font-semibold py-3'>DESCRIPTION</h1>
                            <button onClick={openBtn} className=' cursor pointer font-bold text-[#b71c1c] w-5 h-5  focus:outline-none'>
                                {isDesOpen ? (
                                <img src={Vector2} className='pr-2 transition-all duration-300' alt="" />
                                ) : (
                                <img src={Vector3} className='pr-2 transition-all duration-300' alt="" />
                                )}
                            </button>
                        </div>
                        {isDesOpen && (
                            <p className='leading-7 md:leading-8 lg:leading-9 border-b border-[#c96167] pt-2 pb-4 slide-down'>
                                Love all kinds o' chocolate? Not too picky? Looking for a variety of Bon Bons? These boxes include a mix of our favorite Bons, all wrapped up and ready to go in one long Box Box Box. Some milk, dark, and white chocolate
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Popular/>
            <NewProducts/>
        </div>
    )
}

export default Homepage 