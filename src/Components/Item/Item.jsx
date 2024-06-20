import React from "react";

const Item = (props) => {
    return(
        <div className="item w-full sm:w-1/2 md:w-[160px] lg:w-[270px] p-4 hover:scale-105 hover:transition duration-600">
            <img src={props.image} alt="" className="w-full h-auto" />
            <div className="item-prices flex gap-2 mt-2">
                <div className="item-price-new text-[#df1f26] text-base font-semibold">
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