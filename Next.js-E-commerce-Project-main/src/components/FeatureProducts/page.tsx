"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "@/context/CartContext"; // ✅ Import useCart

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: { rate: number };
  quantity?: number;
};

export default function FeatureProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="py-12 bg-[#F8FAFC]">
      <div className="main_container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="second_tital">Feature Products</h2>
          <button className="bg-[#14B8A6] text-white px-5 py-2 rounded-md border-1 cursor-pointer border-[#14B8A6] hover:bg-[#FFF] hover:text-[#14B8A6] transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md"
                />
                <div className="absolute bottom-1 left-2 bg-white text-gray-800 text-xs px-2 py-1 rounded-md shadow-sm">
                  {product.rating.rate} ⭐
                </div>
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <img src="/img/hart.svg" alt="" />
                </button>
              </div>

              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-md font-semibold line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex-grow">
                  Lorem ipsum dolor sit amet consectetur.
                </p>

                <div className="mt-3 flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">Rs. {product.price}</span>
                  <span className="text-sm text-gray-500 line-through">
                    Rs. {Math.round(product.price * 1.5)}
                  </span>
                  <span className="text-red-500 text-sm">(50% off)</span>
                </div>
              </div>

              <div className="mt-2">
                <button
                  className="w-full bg-teal-500 cursor-pointer text-white py-2 rounded-md hover:bg-teal-600 transition"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
