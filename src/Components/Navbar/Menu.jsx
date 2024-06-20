import React, { useState, useEffect, useRef } from 'react'
import hamB from '../Assets/hamB.svg'
import shopping_cart from '../Assets/shopping_cart.svg'
import userIcon from '../Assets/userIcon.svg'
import closeBtn from '../Assets/closeBtn.svg'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const buttonMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const clickOutSide = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutSide);
        return () => {
            document.removeEventListener('mousedown', clickOutSide);
        };
    }, []);


    return (
        <div className='relative'>
            {/* Menu section */}
            <div className='menuSection flex justify-between bg-[#f4c4cd] px-4 sm:px-4 md:px-8 lg:px-10 items-center border-b border-[#df1f26] sm:border-b-0 md:border-b lg:border-b'>
                <div className='flex justify-center items-center'>
                    <button onClick={buttonMenu}>
                        <img className='w-[20px] h-[30px]' src={hamB} alt="Hamburger Menu" />
                    </button>
                </div>
                <a href="">
                    <img className='w-[85px] h-[96px] my-1' src="https://bonbonbon.com/cdn/shop/files/BBBLogoRound_1.png?v=1684521968&width=170" alt="Logo" />
                </a>
                <a href="">
                    <img className='w-[20px] h-[30px]' src={shopping_cart} alt="Shopping Cart" />
                </a>
            </div>
            {/* Hamburger Menu section */}
            {isMenuOpen && (
                <div ref={menuRef} className='h-screen text-[#df1f26] text-[16px] md:w-[35%] lg:w-[35%] sm:w-full fixed inset-0 bg-[#f4c4cd] shadow-xl'>
                <ul className='font-sans font-bold'>
                    <li className='flex justify-between h-[51px] border-b border-[#e7b2b8] px-3 '>
                        <button className='userAndCloseBtn'>
                            <img src={userIcon} alt="User Icon" />
                        </button>
                        <button onClick={buttonMenu} 
                            className='closeBtn transform hover:rotate-180' 
                            style={{ transition: 'transform .3s ease-in-out' }}>
                            <img className='w-4 h-4' src={closeBtn} alt="Close Button" />
                        </button>
                    </li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3 '>HOME</li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>SHOP ALL</li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>ABOUT US</li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>REWARDS PROGRAM</li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>LOCATIONS</li>
                    <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>CONTACT US</li>
                </ul>
            </div>
            
            )}
        </div>
    )
}

export default Menu;
