import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

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
          {" "}
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className=" h-80">
            <SwiperSlide className="w-20 h-80 bg-brand_color rounded-lg">Slide 1</SwiperSlide>
            <SwiperSlide className="w-40 h-80 bg-rose-600">Slide 2</SwiperSlide>
            <SwiperSlide className="w-40 h-80 bg-green-600">Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
