import { Box, Stack, Typography } from "@mui/material";

const addressSummary = {
  name: "Abdullah Al Masoud",
  email: "almasoud49@yahoo.com",
  country: "Bangladesh",
  streetAddress: "Mirpur, Dhaka, Bangladesh",
  postCode: "1216",
  city: "Dhaka",
  mobileNumber: "+8801646418000",
};

const BillingAddress = () => {
    return (
<Box>
      <Typography
        fontSize={25}
        fontWeight={600}
        marginTop="40px"
        marginBottom="15px"
      >
        Billing address
      </Typography>
      <Stack>
        <Typography>{addressSummary.name}</Typography>
        <Typography>{addressSummary.country}</Typography>
        <Typography>{addressSummary.streetAddress}</Typography>
        <Typography>
          {addressSummary.city} - {addressSummary.postCode}
        </Typography>
        <Typography>{addressSummary.email}</Typography>
        <Typography>{addressSummary.mobileNumber}</Typography>
      </Stack>
    </Box>
    );
};

export default BillingAddress;