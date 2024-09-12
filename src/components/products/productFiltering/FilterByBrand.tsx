import {
    Box,
    Checkbox,
    FormControlLabel,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";

  const brands = [
 "SoftCare",
    "DiaperX",
    "PureBaby",
    "NatureCare",
    "WipeAway",
    "SoftTouch",
    "EarthBaby",
    "GentleCare",
    "BabyFlow",
    "ComfySnug",
    "TinyTeeth",
    "CleanEats",
    "CarryMe",
    "SmileBaby",
    "CalmBaby",
    "SafeTrim",
    "AquaBaby",
    "WatchOver",
    "PlayTime",
    "CozyWrap"
  ];

const FilterByBrand = () => {
    return (
        <Stack>
        <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
          Shop by Brand
        </Typography>
        <Box>
          {brands.map((brand, index) => (
            <Box key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#363636",
                      "&.Mui-checked": {
                        color: "#0C1734",
                      },
                    }}
                  />
                }
                label={brand}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    );
};

export default FilterByBrand;