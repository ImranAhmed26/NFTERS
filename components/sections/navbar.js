import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../public/assets/NFters.png";
import NavLinks from "../../constants/navlinks.js";
import SearchIcon from "../../public/assets/search.svg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    "logic for handling search";
  };

  return (
    <div className="bg-white border-b flex justify-center">
      <div className=" h-28 py-3.5 bg-white text-lg flex items-center sticky z-30 top-0">
        <div className="flex items-center w-1/2">
          <div>
            <Image src={Logo} width={107} height={22} alt={"logo"} />
          </div>
          <div>
            <div className="hidden md:flex gap-3 px-4 lg:gap-5 lg:px-7 xl:px-12 2xl:px-20 text-base text-black lg:text-lg xl:text-lg py-2 ">
              {NavLinks.navlinks.map((items, i) => {
                return (
                  <div key={isNaN}>
                    <Link href="/">
                      <a>{items.name}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/2 gap-4">
          <div
            className="border max-w-lg w-full h-[50px] rounded-full px-4 text-xl items-center flex justify-between shadow-sm"
            onClick={(e) => {
              handleSearch;
            }}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="text-color_gray bg-white outline-none w-4/5 px-6"
            />
            <FiSearch size={"1.4em"} className="text-gray-400" />
          </div>
          <div className="flex justify-center w-full pl-2 text-white text-center text-sm gap-5">
            <div className="flex justify-center items-center w-28 h-[50px] bg-brand_color rounded-full hover:bg-[#6C00FF] transition-all duration-150 cursor-pointer">
              Upload
            </div>
            <div className="flex justify-center items-center w-36 h-[50px] border-2 text-brand_color font-semibold border-brand_color bg-white rounded-full hover:border-[#6C00FF] hover:text-[#6C00FF] hover:scale-105 transition-all duration-150 cursor-pointer">
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
