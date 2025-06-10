import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ card }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {card && card.length > 0 ?
                <>
                    {card.map((card, index) => (
                        <Link to={"/carddata/" + card.id}>
                            <div key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-1">{card.name}</h2>
                                    <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-blue-600 font-bold">${card.price}</span>
                                        <span className="text-sm text-gray-500">{card.size}</span>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">
                                        Category: <span className="font-medium">{card.category}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                    }

                </>
                : <>
                    <div className=" h-screen">
                        <p className="text-gray-500 text-xl">No data available</p>
                    </div>
                </>
            }
        </div >
    );
};

export default CardList;



