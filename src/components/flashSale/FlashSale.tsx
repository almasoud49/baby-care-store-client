import { TProduct } from "@/types/type.global";
import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";
import ProductCard from "@/utils/actions/ProductCard";

const FlashSale = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const flashSaleData = await res.json();

 

  const filterFlashSaleData = flashSaleData?.data?.filter(
    (item: TProduct) => item.flashSale
  );

  return (
    <Container>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop="60px"
        marginBottom="40px"
      >
        <Typography variant="h1"
          sx={{ fontSize: "22px", fontWeight: "bold", color: "#0C1734" }}
        >
          Flash Sale
        </Typography>
        {/* <Button component={Link} href="/flash-sale">
          View All <ChevronRight size={20} />{" "}
        </Button> */}

      <Button
        component={Link}
        href="/flash-sale"
        size="large"
        variant="contained" 
        // sx={{
        //   backgroundColor: "#12354a", 
        //   color: "#ffffff", 
        //   borderRadius: "20px", 
        //   textTransform: "uppercase", 
        //   padding: "10px 20px", 
        //   "&:hover": {
        //     backgroundColor: "#12354a", 
        //   },
        // }}
        sx={{
          margin: "10px 0px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          border: "1px solid #0077FF",
          color: "#0077FF",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#0077FF",
            color: "#fff",
          },
        }}
      >
        View All 
      </Button>
    
      </Stack>

      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {filterFlashSaleData.slice(0, 4).map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
