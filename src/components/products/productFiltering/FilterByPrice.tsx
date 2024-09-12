import React from 'react';
import {
    Box,
    Checkbox,
    FormControlLabel,
    Stack,
    Typography,
  } from "@mui/material";
  
  const priceData = [
    "$0.00 - $24.99",
    "$25.00 - $49.99",
    "$50.00 - $74.99",
    "$75.00 - $99.99",
    "$100 +",
  ];

const FilterByPrice = () => {
    return (
<Stack>
      <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0"}}>Shop by Price</Typography>
      <Box>
        {priceData.map((price, index) => (
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
              label={price}
            />
          </Box>
        ))}
      </Box>
    </Stack>
    );
};

export default FilterByPrice;