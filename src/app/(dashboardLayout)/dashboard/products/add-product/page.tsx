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
  const AddProductPage = () => {
    return (
      <Container>
        <Typography fontSize={20} fontWeight={600} marginBottom="5px">
          Add New Product
        </Typography>
        <Divider></Divider>
        <Box>
          <Box sx={{ margin: "20px 0" }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8}>
                <TextField
                  type="text"
                  label="Product Title"
                  fullWidth
                  variant="outlined"
                  placeholder="Product Title"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Price"
                  placeholder="Product Price"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Rating"
                  fullWidth
                  variant="outlined"
                  placeholder="Product Rating"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Brand"
                  fullWidth
                  variant="outlined"
                  placeholder="Product Brand"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Category"
                  placeholder="Product Category"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Flash Sale Offer"
                  fullWidth
                  variant="outlined"
                  placeholder="Product Flash Sale Offer"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Discount"
                  fullWidth
                  variant="outlined"
                  placeholder="Product Discount"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Product Flash Sale"
                  placeholder="Product Flash Sale"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField type="file" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Product Description"
                  placeholder="Product Description"
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
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
              variant="contained"
            >
              Add Products
            </Button>
          </Stack>
        </Box>
      </Container>
    );
  };
  
  export default AddProductPage;