import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarousalCards } from "../../constants/constants";
import { EffectCoverflow } from "swiper";
import { FaEthereum } from "react-icons/fa";
import Seal from "../../public/assets/Images/Group_83.png";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const Carousal = () => {
  return (
    <div className="flex items-center w-[680px] relative">
      <div className="absolute z-10 w-32 -left-16">
        <Image src={Seal} height={300} width={300} alt="seal" />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 185,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
        {CarousalCards.map((item) => {
          return (
            <SwiperSlide key={item.id} className="relative">
              <div className="absolute z-10 top-0  text-white p-6">
                <div className="font-semibold text-3xl">{item.title}</div>
                <div className="flex pt-3">
                  <Image width={35} height={35} src={item.profilePicture} alt={item.name} />
                  <div className="pl-4 pt-1 text-lg font-semibold">{item.name}</div>
                </div>
                <div className="w-[320px] h-[70px] rounded-xl ml-4 mt-56 bg-white bg-opacity-25 ">
                  <div
                    className={`flex ${
                      item.bgLight ? "text-black" : "text-white"
                    } opacity-100 pl-6 pr-6 pt-3 justify-between`}
                  >
                    <div className=" text-sm">
                      <div className=" text-sm">Current Bid</div>
                      <div className="flex pt-1">
                        <div className="w-21 h-20 pt-0.5 pr-2">
                          <FaEthereum size={"1.5em"} />
                        </div>
                        <div className=" text-base font-semibold">{item.currentBid}</div>
                      </div>
                    </div>
                    <div>
                      <div>Ends In</div>
                      <div>{item.deadline}</div>
                    </div>
                  </div>
                </div>
              </div>
              <Image className="" width={400} height={420} src={item.image} alt={item.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousal;
