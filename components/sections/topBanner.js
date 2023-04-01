import React from "react";

import Carousal from "../Carousal/carousal";

const Count = [
  { id: 1, number: "98K+", name: "Artwork" },
  { id: 1, number: "12K+", name: "Auction" },
  { id: 1, number: "15K+", name: "Artist" },
];

const TopBanner = () => {
  return (
    <div>
      <div className="font-sans lg:w-[1229px] lg:h-[440px] gap-6 justify-center mt-16">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="flex flex-col items-center lg:items-start gap-4 px-0 py-6 lg:w-[850px]">
            <div className="font-black text-5xl px-8 sm:px-10 md:px-10 lg:px-0 uppercase text-center lg:text-left">
              Discover, and collect Digital Art NFTs
            </div>
            <div className=" text-lg lg:text-left px-10 text-center lg:max-w-[400px]">
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
                    <div className="font-medium text-lg">{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Carousal />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
