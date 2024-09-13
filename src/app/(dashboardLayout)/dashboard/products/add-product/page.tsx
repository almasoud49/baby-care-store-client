"use client"
import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    rating: "",
    brand: "",
    category: "",
    flashSaleOffer: "",
    discount: "",
    flashSale: "",
    description: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductData({
        ...productData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", productData.price);
    formData.append("rating", productData.rating);
    formData.append("brand", productData.brand);
    formData.append("category", productData.category);
    formData.append("flashSaleOffer", productData.flashSaleOffer);
    formData.append("discount", productData.discount);
    formData.append("flashSale", productData.flashSale);
    formData.append("description", productData.description);
    if (productData.image) {
      formData.append("image", productData.image);
    }

    try {
      const response = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Product created successfully!");
       
        setProductData({
          title: "",
          price: "",
          rating: "",
          brand: "",
          category: "",
          flashSaleOffer: "",
          discount: "",
          flashSale: "",
          description: "",
          image: null,
        });
      } else {
        toast.error(result.message || "Failed to create product. Try again.");
      }
    } catch (error: any) {
      
      toast.error(`Error submitting the form: ${error.message}`);
    }
  };

  return (
    <Container>
      <Toaster position="top-right" reverseOrder={false} />
      <Typography fontSize={20} fontWeight={600} marginBottom="5px">
        Add New Product
      </Typography>
      <Divider />
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ margin: "20px 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                type="text"
                label="Product Title"
                name="title"
                fullWidth
                variant="outlined"
                placeholder="Product Title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Price"
                name="price"
                fullWidth
                variant="outlined"
                placeholder="Product Price"
                value={productData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Rating"
                name="rating"
                fullWidth
                variant="outlined"
                placeholder="Product Rating"
                value={productData.rating}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Brand"
                name="brand"
                fullWidth
                variant="outlined"
                placeholder="Product Brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Category"
                name="category"
                fullWidth
                variant="outlined"
                placeholder="Product Category"
                value={productData.category}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Flash Sale Offer"
                name="flashSaleOffer"
                fullWidth
                variant="outlined"
                placeholder="Product Flash Sale Offer"
                value={productData.flashSaleOffer}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Discount"
                name="discount"
                fullWidth
                variant="outlined"
                placeholder="Product Discount"
                value={productData.discount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Product Flash Sale"
                name="flashSale"
                fullWidth
                variant="outlined"
                placeholder="Product Flash Sale"
                value={productData.flashSale}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="file"
                name="image"
                fullWidth
                variant="outlined"
                onChange={handleFileChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Product Description"
                name="description"
                placeholder="Product Description"
                fullWidth
                multiline
                rows={5}
                variant="outlined"
                value={productData.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack>
          <Button
            sx={{
              width: "200px",
              padding: "15px 0",
              backgroundColor: "#EF4444",
              "&:hover": {
                backgroundColor: "#EF4444",
              },
            }}
            type="submit"
            variant="contained"
          >
            Add Product
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default AddProductPage;
