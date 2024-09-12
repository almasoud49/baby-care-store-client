import { Container } from "@mui/material";
import React from "react";
import BannerSlider from "./BannerSlider";


const Banner = () => {
  return (
    <Container>
      <div className="mt-3">
        <BannerSlider />
      </div>
    </Container>
  );
};

export default Banner;