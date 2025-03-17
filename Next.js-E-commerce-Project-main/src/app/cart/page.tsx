"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0);
  const shipping = 0;
  const grandTotal = subtotal + shipping;

  return (
    <div className=" bg-[#F8FAFC]">
      <div className="mx-auto">

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg">
            <div className=" font-[18px] text-[#1E293B] bg-[#E6F5EB] py-3 rounded-t-md text-center overflow-x-auto">
              <div className="main_container grid grid-cols-7 min-w-[800px]">
                <div className="col-span-2 text-left">Product Details</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Shipping</div>
                <div>Subtotal</div>
                <div>Action</div>
              </div>
            </div>
            <div className="main_container overflow-x-auto">

              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="grid grid-cols-7 min-w-[800px] items-center py-6 text-gray-700 text-center">
                  <div className="col-span-2 flex items-center gap-4 text-left">
                    <img src={item.image} alt={item.title} className="w-[105px] h-[120px] rounded-md object-cover" />
                    <div>
                      <h3 className=" text-lg text-[#1E293B] font-[18px]">{item.title}</h3>
                      <p className="text-sm text-gray-500">Color: {"N/A"}</p>
                      <p className="text-sm text-gray-500">Size: {"N/A"}</p>
                    </div>
                  </div>

                  <p className="text-[#64748B]">Rs.{item.price}</p>

                  <div className="flex items-center gap-2 justify-center bg-[#E2E8F0] w-1/2 m-auto">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, Number(item.quantity) - 1))}
                      className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">{Number(item.quantity) || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, Number(item.quantity) + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-green-600 font-medium">FREE</p>

                  <p className="font-[18px] text-[#64748B]">Rs.{(Number(item.price) * (Number(item.quantity) || 1)).toFixed(2)}</p>

                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 cursor-pointer">
                    <img src="/img/delet_button.svg" alt="" className="m-auto" />
                  </button>
                </div>
              ))}
            </div>
            <section className="bg-[#F8FAFC]">
              <div className="main_container px-5">
                <div className="mt-6 flex flex-col md:flex-row justify-between ">
                  <div className="md:w-1/2 py-10">
                    <h2 className="text-[#1E293B] font-size-[18px] font-bold">Discount Codes</h2>
                    <p className="text-[#807D7E] mt-3">Enter your coupon code if you have one</p>
                    <div className="mt-5 flex">
                      <input
                        type="text"
                        placeholder="Enter your coupon code if you have one"
                        className="p-2 w-full md:w-1/3 border-r-0 bg-[#FFFFFF] focus:ring-2  rounded-l-2xl border-[#BEBCBD] border-1 focus:ring-green-300"
                      />
                      <button className="bg-[#14B8A6] text-white px-4 py-2 rounded-r-2xl border-[#BEBCBD] border-1">
                        Apply Coupon
                      </button>
                    </div>
                    <button className=" px-4 py-2 mt-5 text-[#14B8A6] rounded-sm border-[#BEBCBD] border-2">
                      Continue Shopping
                    </button>
                  </div>

                  <div className="bg-[#F0FDFA]  rounded-lg w-full md:w-1/3 p-10" >
                    <div className="flex justify-between text-lg">
                      <p className="text-[#1E293B]">Sub Total</p>
                      <p className="text-[#1E293B]">Rs.{(subtotal.toFixed(2))}</p>
                    </div>
                    <div className="flex justify-between text-lg">
                      <p className="text-[#1E293B]">Shipping</p>
                      <p className=" text-[#1E293B]">Rs.{shipping}</p>
                    </div>
                    <hr className="my-2 border-dotted border-[#14B8A6]" />
                    <div className="flex justify-between text-xl">
                      <p className="text-[#1E293B]">Grand Total</p>
                      <p className="text-[#1E293B]">Rs.{(grandTotal.toFixed(2))}</p>
                    </div>
                    <button className="w-full mt-4 bg-[#14B8A6] text-white py-2 rounded">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
