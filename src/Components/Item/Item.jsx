import React from "react";

const Item = (props) => {
    return(
        <div className="item w-full sm:w-full md:w-[200px] lg:w-[270px] p-4 hover:scale-105 hover:transition duration-600">
            <img src={props.image} alt="" className="w-full h-auto" />
            <div className="item-prices flex gap-2 mt-2 text-xl sm:text-2xl md:text-2xl lg:text-xl">
                <div className="item-price-new text-[#df1f26] font-semibold text-xl sm:text-2xl md:text-2xl lg:text-xl">
                    ${props.new_price}
                </div>
            </div>
            <p className="mt-2 mb-0 text-base sm:text-sm md:text-xl lg:text-lg">
                {props.name}
            </p>
        </div>
    )
}

export default Item