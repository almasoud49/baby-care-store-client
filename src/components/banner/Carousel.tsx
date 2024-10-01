"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {  Autoplay } from "swiper/modules";
import { Box, Typography, Grid } from "@mui/material";
import { getAllCarouselData } from "../../data/CarouselData";

const Carousel = () => {
  const data = getAllCarouselData();

  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        speed={1000} 
        loop={true} 
        
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                padding: 2,
                animation: "fadeIn 1.5s ease-in-out",
              }}
            >
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 100,
                      height: 100,
                      animation: "zoomIn 1s ease-in-out",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" align="center">
                    {item.title}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
};

export default Carousel;






