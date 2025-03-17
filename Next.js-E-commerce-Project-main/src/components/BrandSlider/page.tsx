"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const brands = [
  "/img/brands/converse.png",
  "/img/brands/adidas.png",
  "/img/brands/chanel.png",
  "/img/brands/puma.png",
  "/img/brands/skechers.png",
  "/img/brands/forever21.png",
  "/img/brands/fila.png",
  "/img/brands/lacoste.png",
];

export default function BrandSlider() {
  return (
    <div className="py-10 bg-white">
      <div className="mx-auto px-4 ">
        <h2 className="second_tital main_container">Popular Brands</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
          className="py-10"
        >
          {brands.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Brand ${index}`}
                className="w-32 h-25 object-contain  transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}
