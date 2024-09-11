import { Box, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

const Info = () => {
    return (
<Box>
      <Stack display="flex" flexDirection="row" alignItems="center">
        <InfoIcon sx={{ fontSize: 20, marginRight: "5px"}} />
        <Typography fontSize={16}>
          Returning customer? <Link className=" text-red-500" href="/login">Click here to login</Link>{" "}
        </Typography>
      </Stack>
    </Box>
    );
};

export default Info;