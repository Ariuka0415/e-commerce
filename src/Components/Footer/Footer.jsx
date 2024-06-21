import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
const Footer = () => {
    return (
        <div className="footer md:mt-0 sm:mt-10 lg:mt-0 bg-[#f4c4cd] flex flex-col justify-center items-center gap-[30px]">
            <Link to='/' onClick={scrollToTop}>
                <div className="footer-logo flex items-center mt-20 gap-[20px]">
                    <img className="w-[495px] h-[129px]" src="https://bonbonbon.com/cdn/shop/files/BBBLogoHorizontal.png?v=1684521970&width=990" alt="" />
                </div>
            </Link>
            <ul className="footer-links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none gap-8 sm:gap-4 md:gap-6 lg:gap-8 text-[#df2128] text-[20px]">
                <li className="cursor-pointer hover-underline-animation">Company</li>
                <li className="cursor-pointer hover-underline-animation">Products</li>
                <li className="cursor-pointer hover-underline-animation">About</li>
                <li className="cursor-pointer hover-underline-animation">Contact</li>
            </ul>
            <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a]">
                <hr className="w-[80%] border-none h-[1px] bg-[#c96167]"/>
                <p className="text-[#df2128]">Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer