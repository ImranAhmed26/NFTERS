import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Carousal from "../Carousal/carousal";

const Count = [
  { id: 1, number: "98K+", name: "Artwork" },
  { id: 1, number: "12K+", name: "Auction" },
  { id: 1, number: "15K+", name: "Artist" },
];

const Banner = () => {
  return (
    <div>
      <div className="font-sans w-[1229px] h-[440px] flex gap-6 justify-center mt-16">
        <div className="flex flex-col gap-4 px-0 py-6 w-[850px]">
          <div className="font-black text-5xl uppercase">
            Discover, and collect Digital Art NFTs
          </div>
          <div className="max-w-[400px] text-lg">
            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell,
            and discover exclusive digital assets.
          </div>
          <div className="flex justify-center items-center w-40 h-[50px] mt-5 bg-brand_color rounded-full text-white hover:bg-[#6C00FF] hover:scale-105 transition-all duration-150 cursor-pointer">
            Explore Now
          </div>
          <div className="flex gap-4">
            {Count.map((item, idx) => {
              return (
                <div key={idx} className="">
                  <div className="font-extrabold text-5xl mt-4">{item.number}</div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Carousal />
      </div>
    </div>
  );
};

export default Banner;
