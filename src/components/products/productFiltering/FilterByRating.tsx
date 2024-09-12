import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ratings = ["4.5", "4.6", "4.7", "4.8", "4.9"];

const FilterByRating = () => {
  return <div>
    <Stack>
      <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
        Shop by Rating
      </Typography>
      <Box>
        {ratings.map((rating, index) => (
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
              label={rating}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  </div>;
};

export default FilterByRating;
