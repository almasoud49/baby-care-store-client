import SlideImgOne from "@/assets/banner/antiques.jpg";
import SlideImgTwo from "@/assets/banner/bright-clothes.jpg";
import SlideImgThree from "@/assets/banner/little-baby-accessories.jpg";

const bannerData = [
  {
    id: "1",
    title: "Antiques Assortment",
    currPrice: "19.99",
    prevPrice: "29.99",
    image: SlideImgOne,
    offerText: "buy 3 get 1",
  },
  {
    id: "2",
    title: "Bright Cloths",
    currPrice: "29.99",
    prevPrice: "39.99",
    image: SlideImgTwo,
    offerText: "up to -50%",
  },
  {
    id: "3",
    title: "Little Baby Accessories",
    currPrice: "155.99",
    prevPrice: "199.99",
    image: SlideImgThree,
    offerText: "buy 3 get 1",
  },
];

export const getAllBannerData = () => {
  return bannerData;
};