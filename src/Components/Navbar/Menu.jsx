import React, { useState, useEffect, useRef } from 'react';
import hamB from '../Assets/hamB.svg';
import shopping_cart from '../Assets/shopping_cart.svg';
import userIcon from '../Assets/userIcon.svg';
import closeBtn from '../Assets/closeBtn.svg';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const menuRef = useRef(null);

    const buttonMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setShowOverlay(!showOverlay); // Toggle overlay visibility
    };
    
    const clickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            setShowOverlay(false); // Close menu and hide overlay
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, []);

    return (
        <div className='relative'>
            {/* Menu section */}
            <div className='menuSection flex justify-between bg-[#f4c4cd] px-4 sm:px-4 md:px-8 lg:px-10 items-center border-b border-[#df1f26] sm:border-b md:border-b lg:border-b'>
                <div className='flex justify-center items-center'>
                    <button onClick={buttonMenu}>
                        <img className='w-[20px] h-[30px]' src={hamB} alt="Hamburger Menu" />
                    </button>
                </div>
                <Link to='/'>
                    <button>
                        <img className='w-[85px] h-[96px] my-1' src="https://bonbonbon.com/cdn/shop/files/BBBLogoRound_1.png?v=1684521968&width=170" alt="Logo" />
                    </button>
                </Link>
                <Link to='/login'>
                    <button>
                        <img className='w-[30px] h-[30px]' src={userIcon} alt="Shopping Cart" />
                    </button>
                </Link>
            </div>
            {/* Hamburger Menu section */}
            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-[#f4c4cd] opacity-90 blur-md z-50"></div>
                    <div ref={menuRef} className='h-screen text-[#df1f26] text-[16px] md:w-[35%] lg:w-[35%] sm:w-full fixed inset-0 bg-[#f4c4cd] shadow-xl z-50'>
                        <ul className='font-sans font-bold'>
                            <li className='flex justify-between h-[51px] border-b border-[#e7b2b8] px-3 '>
                                <button className='userAndCloseBtn'>
                                    <img src={shopping_cart} alt="User Icon" />
                                </button>
                                <button onClick={buttonMenu} className='closeBtn transform hover:rotate-180' style={{ transition: 'transform .3s ease-in-out' }}>
                                    <img className='w-4 h-4' src={closeBtn} alt="Close Button" />
                                </button>
                            </li>
                            <Link to='/'>
                                <li onClick={buttonMenu} className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3 '>HOME</li>
                            </Link>
                            <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>SHOP ALL</li>
                            <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>ABOUT US</li>
                            <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>REWARDS PROGRAM</li>
                            <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>LOCATIONS</li>
                            <li className='flex flex-col justify-center h-[51px] border-b border-[#e7b2b8] px-3'>CONTACT US</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default Menu;
