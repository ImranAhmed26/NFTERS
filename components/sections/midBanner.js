import Image from "next/image";
import React from "react";
import { ConstText } from "../../constants/constants";
import CardTick from "../../public/assets/icons/card_tick.png";
import ChartSquare from "../../public/assets/icons/chart_square.png";

const MidBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-baseline  gap-16 lg:py-28 ">
      <div className="text-3xl font-extrabold font-sans uppercase max-w-lg lg:px-16 text-center lg:text-left">
        The amazing NFT art of the world here
      </div>
      <div>
        <div className="flex items-center gap-3">
          <Image width={36} height={36} src={CardTick} alt="CardTick" />
          <div className="font-bold text-xl"> Fast Transaction</div>
        </div>
        <div className="pl-12 w-80">{ConstText.Lorem1}</div>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <Image width={36} height={36} src={ChartSquare} alt="CardTick" />
          <div className="font-bold text-xl"> Growdth Transaction</div>
        </div>
        <div className="pl-12 w-80">{ConstText.Lorem2}</div>
      </div>
    </div>
  );
};

export default MidBanner;
