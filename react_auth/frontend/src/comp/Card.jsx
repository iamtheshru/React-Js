import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = () => {
    const [card, setCard] = useState(null);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/cards/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setCard(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleadd = (card) => {
        const data = card;
        const existingCart = JSON.parse(localStorage.getItem('card')) || [];
        const existingItem = existingCart.find(item => item.id === data.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            data.quantity = 1;
            existingCart.push(data);
        }
        localStorage.setItem('card', JSON.stringify(existingCart));
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            {card ? (
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
                    {/* Image Section */}
                    <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
                        <img
                            src={card.img}
                            alt={card.name}
                            className="object-contain h-96 w-full"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{card.name}</h1>
                            <p className="text-gray-600 mb-4">{card.description}</p>

                            <div className="text-gray-700 text-sm mb-2">
                                <strong>Size:</strong> {card.size}
                            </div>
                            <div className="text-gray-700 text-sm mb-4">
                                <strong>Category:</strong> {card.category}
                            </div>

                            <div className="text-red-600 font-semibold text-xl mb-2">₹{card.price}</div>

                            <div className="text-green-600 font-medium mb-4">In Stock</div>

                            <div className="mb-6">
                                <p className="text-sm text-gray-600">FREE delivery in 2-3 days</p>
                                <p className="text-xs text-gray-500">Secure transaction | Return available</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link to='/addtocard' onClick={() => handleadd(card)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded">
                                Add to Cart
                            </Link>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600 text-xl">Loading product...</p>
            )}
        </div>
    );
};

export default Card;
