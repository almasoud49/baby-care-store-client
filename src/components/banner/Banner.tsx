import { Container } from "@mui/material";
import React from "react";
import BannerSlider from "./BannerSlider";


const Banner = () => {
  return (
    <Container>
      <div className="mt-20">
        <BannerSlider />
      </div>
    </Container>
  );
};

export default Banner;