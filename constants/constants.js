import Slide_image from "../public/assets/Images/unsplash_01.png";
import Slide_image2 from "../public/assets/Images/unsplash_02.png";
import Slide_image3 from "../public/assets/Images/unsplash_03.png";
import ProfilePicture from "../public/assets/Images/profile_picture.png";

import Collection2 from "../public/assets/collections/group02.png";
import Collection3 from "../public/assets/collections/group05.png";
import Collection4 from "../public/assets/collections/group06.png";

import Pic1 from "../public/assets/collections/pic01.png";
import Pic2 from "../public/assets/collections/pic02.png";
import Pic3 from "../public/assets/collections/pic03.png";
import Pic4 from "../public/assets/collections/pic04.png";
import Pic5 from "../public/assets/collections/pic05.png";

export const CarousalCards = [
  {
    id: "0",
    name: "Arkhan17",
    title: "Abstr Gradient NFT",
    profilePicture: ProfilePicture,
    image: Slide_image,
    currentBid: "0.25 ETH",
    deadline: "12h 43m 42s",
  },
  {
    id: "1",
    name: "Brkhan22",
    title: "Bbstr Gradient NFT",
    profilePicture: ProfilePicture,
    image: Slide_image2,
    currentBid: "0.15 ETH",
    deadline: "22h 43m 42s",
  },
  {
    id: "2",
    name: "Crkhan06",
    title: "Cbstr Gradient NFT",
    profilePicture: ProfilePicture,
    image: Slide_image3,
    currentBid: "0.1",
    deadline: "26h 43m 42s",
    bgLight: true,
  },
];

export const Collections = [
  { id: 1, name: " THE Futr Abstr", bid: "0.25", range: "1 of 8", image: Collection2 },
  { id: 2, name: " THE Futr Abstr", bid: "0.25", range: "1 of 8", image: Collection3 },
  { id: 3, name: " THE Futr Abstr", bid: "0.25", range: "1 of 8", image: Collection4 },
];

export const TopCollectionsOver = [
  {
    id: 1,
    name: "CryproFunks",
    Value: "1,9769.39",
    rate: "+26.52%",
    image: Pic1,
    negative: false,
  },
  {
    id: 2,
    name: "Cryptix",
    Value: "2,769.39",
    rate: "+10.52%",
    image: Pic2,
    negative: true,
  },
  {
    id: 3,
    name: "Frensware",
    Value: "9232.39",
    rate: "+2.52%",
    image: Pic3,
    negative: false,
  },
  {
    id: 4,
    name: "PunkArt",
    Value: "3,769.39",
    rate: "+1.52%",
    image: Pic4,
    negative: false,
  },
  {
    id: 5,
    name: "Art Crypto",
    Value: "10,769.39",
    rate: "+2.52%",
    image: Pic5,
    negative: true,
  },
];

export const ConstText = {
  Lorem1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
  Lorem2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
};
