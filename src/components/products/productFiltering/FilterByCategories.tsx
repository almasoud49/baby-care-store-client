import {
    Box,
    Checkbox,
    FormControlLabel,
    Stack,
    Typography,
  } from "@mui/material";

  const categories = [
    "Skincare",
    "Diapers",
    "Haircare",    
    "Wipes",
    "Teething",
    "Feeding",
    "Travel",
    "Oral Care",
    "Soothing",
    "Grooming",
    "Bathing",
    "Safety",
    "Toys",
    "Bedding"
  ];

const FilterByCategories = () => {
    return (
        <Stack>
        <Typography sx={{ fontSize: "18px", fontWeight: "600", margin: "5px 0" }}>
          Shop by Category
        </Typography>
        <Box>
          {categories.map((category, index) => (
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
                label={category}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    );
};

export default FilterByCategories;