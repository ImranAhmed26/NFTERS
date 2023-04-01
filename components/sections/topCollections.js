import Image from "next/image";
import React from "react";

import Collection1 from "../../public/assets/collections/group01.png";

import ProfilePic from "../../public/assets/Images/profile_picture.png";
import { FaEthereum } from "react-icons/fa";
import { Collections, TopCollectionsOver } from "../../constants/constants";

const TopCollections = () => {
  return (
    <div className="flex justify-between gap-6 divide-x">
      <div className="flex justify-between gap-12 ">
        <div>
          <Image width={400} height={424} src={Collection1} alt="collection" />
          <div className="flex justify-between pt-6">
            <div className="flex">
              <div>
                <Image width={45} height={45} src={ProfilePic} alt="pic" />
              </div>
              <div className="pl-5">
                <div className="font-bold text-lg">The Futr Abstr</div>
                <div className="text-base">{`${"10"} in the stock`}</div>
              </div>
            </div>
            <div>
              <div className="text-sm pl-1">Highest bid</div>
              <div>
                <div className="flex pt-1">
                  <div className=" pt-0.5 pr-2">
                    <FaEthereum size={"1.2em"} />
                  </div>
                  <div className=" text-base font-semibold">{"0.25 ETH"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {Collections.map((item, idx) => {
            return (
              <div key={idx} className="pb-8 flex gap-5">
                <div>
                  <Image width={147} height={147} src={item.image} alt="collection" />
                </div>
                <div>
                  <div className="font-bold text-lg">{item.name}</div>
                  <div className="flex gap-2 items-center pt-2">
                    <div>
                      <Image width={34} height={34} src={ProfilePic} alt="pic" />
                    </div>
                    <div>
                      <div className="flex border rounded-lg border-emerald-400 text-emerald-400 p-2">
                        <div className="pr-1">
                          <FaEthereum size={"0.9em"} />
                        </div>
                        <div className=" text-xs font-semibold">{"0.25 ETH"}</div>
                      </div>
                    </div>
                    <div className="text-sm">{item.range}</div>
                  </div>
                  <div className="pt-3">
                    <div className="flex justify-center items-center w-28 h-12 border-2 text-brand_color font-semibold border-brand_color bg-white rounded-full  hover:bg-brand_color hover:text-white  transition-all duration-150 cursor-pointer">
                      Place a Bid
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pl-12">
        <div className="text-2xl font-extrabold uppercase font-sans">Top Collections Over</div>
        <div className="text-xl font-bold text-brand_color">Last 7 Days</div>
        <div className=" divide-y flex flex-col gap-4 pt-6">
          {TopCollectionsOver.map((item, idx) => {
            return (
              <div key={idx} className="flex gap-3 items-center pt-2">
                <div className="text-2xl font-bold font-sans pr-2 pb-2">{idx + 1}</div>
                <div>
                  <Image width={56} height={56} src={item.image} alt="pic" />
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div>
                    <div className="flex pt-1.5">
                      <div className=" pt-0.5 pr-2">
                        <FaEthereum size={"1.2em"} />
                      </div>
                      <div className=" text-sm font-semibold">{item.Value}</div>
                    </div>
                  </div>
                </div>
                <div
                  className={` text-xl font-bold pl-10 ${
                    item.negative ? "text-rose-500" : " text-emerald-500"
                  }`}
                >
                  {item.rate}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
