import { getAllCountryName } from "@/data/CountryName";
import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";


 

const BillingDetails = () => {
    const countryName = getAllCountryName();

    return (
<Box>
      <Typography fontSize={20} fontWeight={600} margin="20px 0">
        Billing Details
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Email Address"
              placeholder="Email Address"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              label="First Name"
              placeholder="First Name"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Last Name"
              placeholder="Last Name"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Country / Region"
              defaultValue="Bangladesh"
              helperText="Please select your Country / Region"
              fullWidth
              size="medium"
              color="success"
            >
              {countryName.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Street Address"
              placeholder="House number and street name"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              label="Postcode / ZIP"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Town / City"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Mobile Number"
              fullWidth
              size="medium"
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Order Notes"
              fullWidth
              size="medium"
              color="success"
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
    );
};

export default BillingDetails;