"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperClass } from 'swiper';


export default function CustomSlider() {
    // const swiperRef = useRef(null);
    const swiperRef = useRef<SwiperClass | null>(null);


    const slides = [
        {
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.",
            image: "/img/Rectangle.png",
        },
        {
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.",
            image: "/img/Rectangle.png",
        },
        {
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing pellentesque feugiat gravida tincidunt lobortis mi. Nisl sollicitudin in dictumst elementum amet nulla. Malesuada tempor consequat dui fringilla pretium. Egestas nibh et sociis enim nisl aliquet ultrices.",
            image: "/img/Rectangle.png",
        },
    ];

    return (
        <section className="relative w-full flex items-center justify-center bg-gray-100 ">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between silder__content">
                            <div className="md:px-40 px-10 py-5 text-left md:w-1/2 pb-20 md:pb-0 ">
                                <h1 className="text-4xl font-bold text-gray-900 ">{slide.title}</h1>
                                <p className="text-gray-600 mt-4">{slide.description}</p>
                                <div className="mt-6 flex space-x-4 ">
                                    <button className="border border-[#14B8A6] w-1/2 text-[#14B8A6] px-6 py-2 rounded hover:bg-[#14B8A6] hover:text-white transition">
                                        Explore
                                    </button>
                                    <button className="bg-[#14B8A6] text-white px-6 w-1/2 py-2 rounded hover:bg-teal-700 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src={slide.image} alt={`Slide ${index + 1}`} className=" shadow-lg w-full" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute right-15 bottom-5 z-10 p-3 bg-[#CBD5E1] shadow-lg rounded-full cursor-pointer hover:bg-[#14B8A6]"
            >
                <img src="/img/arrow-left.png" alt="" />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-2  bottom-5 z-10 p-3 bg-[#CBD5E1] shadow-lg rounded-full cursor-pointer hover:bg-[#14B8A6]"
            >
                <img src="/img/arrow-right.png" alt="" />
            </button>
        </section>
    );
}
