import React from "react";
import TopBanner from "../components/sections/topBanner";
import Navbar from "../components/sections/navbar";
import MidBanner from "../components/sections/midBanner";
import TopCollections from "../components/sections/topCollections";

const Sections = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-7xl ">
          <TopBanner />
        </div>
      </div>
      <div className="flex justify-center w-full bg-slate-100 mt-20">
        <div className="max-w-7xl">
          <MidBanner />
        </div>
      </div>
      <div className="flex justify-center w-full  mt-20">
        <div className="max-w-7xl pb-20">
          <TopCollections />
        </div>
      </div>
    </div>
  );
};

export default Sections;
