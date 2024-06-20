import React from "react";
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import Slider from "react-slick";


const NewProDucts = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };
    return (
        <div className="newPro flex flex-col items-center justify-center mt-16">
        <h1 className="text-[#df2128] text-[50px] font-semibold text-center">NEW PRODUCTS </h1>
        <hr className="w-[200px] h-[6px] border-[#df2128] my-4"/>
        <Slider {...settings} className="w-full max-w-screen-lg">
            {new_collection.map((item, i) => (
                <div key={i} className="px-2">
                    <Item className="text-[#00a99d]" id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                </div>
            ))}
        </Slider>
    </div>
    );
}

export default NewProDucts