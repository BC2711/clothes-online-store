"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

// Sample Product Data
const products = [
    { id: 1, name: "Product 1", price: "$49.99", image: "https://source.unsplash.com/400x400/?fashion" },
    { id: 2, name: "Product 2", price: "$59.99", image: "https://source.unsplash.com/400x400/?clothing" },
    { id: 3, name: "Product 3", price: "$39.99", image: "https://source.unsplash.com/400x400/?shoes" },
    { id: 4, name: "Product 4", price: "$69.99", image: "https://source.unsplash.com/400x400/?accessories" },
    { id: 5, name: "Product 5", price: "$79.99", image: "https://source.unsplash.com/400x400/?jacket" },
    { id: 6, name: "Product 6", price: "$89.99", image: "https://source.unsplash.com/400x400/?watch" },
    { id: 7, name: "Product 7", price: "$29.99", image: "https://source.unsplash.com/400x400/?sunglasses" },
    { id: 8, name: "Product 8", price: "$99.99", image: "https://source.unsplash.com/400x400/?bag" },
];

export default function ProductCarousel() {
    const swiperRef = useRef(null);

    return (
        <div className="bg-gray-50 py-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4">Featured Products</h2>

                {/* Swiper Component */}
                <div className="relative">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Navigation]}
                        breakpoints={{
                            320: {  // Mobile
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            480: {  // Small tablets
                                slidesPerView: 2,
                                spaceBetween: 16
                            },
                            768: {  // Tablets
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {  // Laptops
                                slidesPerView: 4,
                                spaceBetween: 24
                            },
                            1280: {  // Large screens
                                slidesPerView: 5,
                                spaceBetween: 24
                            }
                        }}
                        className="px-4 py-2"  // Add some padding to prevent clipping
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="select-none pb-6">  {/* Add padding-bottom for shadow */}
                                <div className="bg-white p-4 shadow-md rounded-lg h-full flex flex-col">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-48 w-full object-cover rounded-md mb-3"
                                    />
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-600 mt-1">{product.price}</p>
                                    <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                                        Add to Cart
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons - Only show on larger screens */}
                    <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 z-10 px-2">
                        <IconButton
                            isCircular
                            size="lg"
                            // variant="text"
                            // color="blue-gray"
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="bg-white shadow-md hover:shadow-lg"
                        >
                            <NavArrowLeft className="h-5 w-5" />
                        </IconButton>

                        <IconButton
                            isCircular
                            size="lg"
                            // variant="text"
                            // color="blue-gray"
                            onClick={() => swiperRef.current?.slideNext()}
                            className="bg-white shadow-md hover:shadow-lg"
                        >
                            <NavArrowRight className="h-5 w-5" />
                        </IconButton>
                    </div>
                </div>

                {/* Navigation Buttons - For mobile */}
                <div className="flex justify-center gap-4 mt-6 md:hidden">
                    <IconButton
                        isCircular
                        size="md"
                        // variant="text"
                        // color="blue-gray"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-white shadow-md"
                    >
                        <NavArrowLeft className="h-4 w-4" />
                    </IconButton>

                    <IconButton
                        isCircular
                        size="md"
                        // variant="text"
                        // color="blue-gray"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-white shadow-md"
                    >
                        <NavArrowRight className="h-4 w-4" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}