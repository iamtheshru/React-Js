"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Floyd Miles",
    image: "/img/Customers1.png",
    rating: 4,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    image: "/img/Customers2.png",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    image: "/img/Customers3.png",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    image: "/img/Customers3.png",
    rating: 5,
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function CustomerReviews() {
  return (
    <div className="py-12 bg-white">
      <div className="mx-auto px-4  main_container">
        <h2 className="second_tital mb-6">
          Customers Review
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          speed={800}
          breakpoints={{
            480: { slidesPerView: 1 },  
            768: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 }, 
          }}
          className="pb-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center gap-1 w-full">
              <div className="bg-white rounded-lg shadow-lg p-6 border-1 border-[#E2E8F0] w-full md:w-94">
                <div className="flex justify-between items-start">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12  object-cover"
                  />
                  <div>
                    <div className="flex">
                      {Array(review.rating)
                        .fill("⭐")
                        .map((star, index) => (
                          <span key={index} className="text-yellow-500">
                            {star}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                        <h3 className="text-lg font-semibold mt-2">{review.name}</h3>
                <p className="text-gray-600 mt-3">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
