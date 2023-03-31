import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image from "../public/assets/Images/unsplash_01.png";
import slide_image2 from "../public/assets/Images/unsplash_02.png";
import slide_image3 from "../public/assets/Images/unsplash_03.png";

import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Count = [
  { id: 1, number: "98K+", name: "Artwork" },
  { id: 1, number: "12K+", name: "Auction" },
  { id: 1, number: "15K+", name: "Artist" },
];

const Banner = () => {
  return (
    <div>
      <div className="font-sans w-[1229px] h-[440px] flex gap-6 justify-center mt-16">
        <div className="flex flex-col gap-4 w-1/2  px-10 py-6 ">
          <div className="font-black text-4xl uppercase">
            Discover, and collect Digital Art NFTs
          </div>
          <div>
            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell,
            and discover exclusive digital assets.
          </div>
          <div className="flex justify-center items-center w-40 h-[50px] bg-brand_color rounded-full text-white hover:bg-[#6C00FF] hover:scale-105 transition-all duration-150 cursor-pointer">
            Explore Now
          </div>
          <div className="flex gap-4">
            {Count.map((item, idx) => {
              return (
                <div key={idx} className="">
                  <div className="font-extrabold text-3xl">{item.number}</div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 220,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <Image width={350} height={400} src={slide_image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image width={350} height={400} src={slide_image2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image width={350} height={400} src={slide_image3} alt="slide_image" />
            </SwiperSlide>
            {/* <SwiperSlide>
              <Image src={slide_image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide_image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide_image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide_image} alt="slide_image" />
            </SwiperSlide> */}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
