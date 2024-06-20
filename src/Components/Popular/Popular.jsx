import React from "react";
import data_product from '../Assets/data'
import Item from "../Item/Item";
const Popular = () => {
    return (
        <div className="popular flex flex-col items-center">
            <h1 className="text-[#df1f26] text-[50px] font-semibold">POPULARS</h1>
            <hr className="w-[200px] h-[6px] border-[#b71c1c]"/>
            <div className="popular-item mt-5 flex flex-wrap justify-center gap-8 sm:justify-center">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular