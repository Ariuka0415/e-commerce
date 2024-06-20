import React from "react";

const Footer = () => {
    return (
        <div className="footer mt-10 md:mt-0 sm:mt-10 lg:mt-0 bg-[#f4c4cd] flex flex-col justify-center items-center gap-[30px]">
            <div className="footer-logo flex items-center gap-[20px]">
                <img className="w-[495px] h-[129px]" src="https://bonbonbon.com/cdn/shop/files/BBBLogoHorizontal.png?v=1684521970&width=990" alt="" />
            </div>
            <ul className="footer-links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none gap-8 sm:gap-4 md:gap-6 lg:gap-8 text-[#df2128] text-[20px]">
                <li className="cursor-pointer hover:underline">Company</li>
                <li className="cursor-pointer hover:underline">Products</li>
                <li className="cursor-pointer hover:underline">About</li>
                <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
            <div className="footer-copyright flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a]">
                <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#efa0a8]"/>
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer