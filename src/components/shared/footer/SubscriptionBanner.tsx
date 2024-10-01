import React from "react";
import { Box, Grid, InputBase, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const SubscriptionBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#2c2d46", 
        padding: "16px",
        marginTop:"20px",
        marginBottom:"-80px",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <EmailIcon sx={{ fontSize: 40, color: "white" }} />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ color: "white" }}>
            SIGN UP FOR NEWSLETTER FOR OFFER AND UPDATES
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          overflow: "hidden",
          flexShrink: 1,
        }}
      >
        <InputBase
          placeholder="Your email address"
          sx={{
            padding: "8px 16px",
            width: "300px", 
            color: "black",
            textAlign: "left", 
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4285F4",
            padding: "8px 24px",
            color: "white",
            "&:hover": {
              backgroundColor: "#4285F4", 
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionBanner;
