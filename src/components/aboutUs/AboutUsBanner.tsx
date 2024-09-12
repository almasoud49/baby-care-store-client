import { Box, Grid,  Typography } from "@mui/material";
import React from "react";
import ChildImg from "../../assets/images/feeding-bottle.jpg";
import Image from "next/image";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const AboutUsBanner = () => {
  return (
  <div>
      <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
            We care for your child always
          </Typography>
          <Typography sx={{ fontSize: "16px", margin: "15px 0" }}>
            Nutrition for you and your little one at every age and stage we care
            for your child always. Join our newsletter and get $20 discount for
            your first order
          </Typography>
        </Box>

        <Box display="flex">
          <ChildCareIcon />
          <Typography sx={{ fontSize: "16px", marginLeft: "5px"}}>
            We care about the health and proper development of your child
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image
          style={{ borderRadius: "5px"}}
          src={ChildImg}
          width={600}
          height={600}
          alt="Child With Father"
        />
      </Grid>
    </Grid>
  </div>
  );
};

export default AboutUsBanner;