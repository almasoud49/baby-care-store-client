import SlideImgOne from "../assets/banner/oil.jpg";
import SlideImgTwo from "../assets/banner/pacifier.jpg";
import SlideImgThree from "../assets/banner/play-mat.jpg";

const bannerData = [
  {
    id: "1",
    title: "Best Diapers to Play",
    currPrice: "19.99",
    prevPrice: "29.99",
    image: SlideImgOne,
    offerText: "buy 3 get 1",
  },
  {
    id: "2",
    title: "All Premium Milk Powders",
    currPrice: "29.99",
    prevPrice: "39.99",
    image: SlideImgTwo,
    offerText: "up to -50%",
  },
  {
    id: "3",
    title: "Robo Model M20 Prem Wunderkind",
    currPrice: "155.99",
    prevPrice: "199.99",
    image: SlideImgThree,
    offerText: "buy 3 get 1",
  },
];

export const getAllBannerData = () => {
  return bannerData;
};