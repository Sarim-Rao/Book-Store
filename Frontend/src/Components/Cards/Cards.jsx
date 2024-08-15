import React from 'react'

const Cards = ({ item }) => {
    return (
        <div className="card hover:scale-95 duration-200">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.catagory}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions flex justify-between items-center">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy Now</div>
                </div>
            </div>
        </div>
    )
}

export default Cards
