import React from 'react'
import { useSelector } from 'react-redux'

const Project = () => {
    const products = useSelector(state => state.products);

    return (
        <div>
            {products.map((product, index) => (
                <div key={index} className='p-4 border rounded-lg shadow-md mb-4'>
                    <h2 className='text-2xl font-bold'>{product.name}</h2>
                    <p className='text-gray-600'>{product.description}</p>
                    <p className='text-lg font-semibold'>Price: ${product.price}</p>
                    <img src={product.image} alt={product.name} className='w-32 h-32 object-cover' />
                </div>
            ))}
        </div>
    )
}

export default Project
