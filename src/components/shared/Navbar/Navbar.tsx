"use client";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/baby-logo.png";
import {
  AlignJustify,
  Headset,
  Home,
  LayoutDashboard,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logoutUser,
  useCurrentRole,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useCurrentCartData } from "@/redux/features/cart/cartSlice";
// import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const token = useAppSelector(useCurrentToken);
  const cartData = useAppSelector(useCurrentCartData);
  const dispatch = useAppDispatch();
  const role = useAppSelector(useCurrentRole);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full shadow-2xl text-black">
      <Container>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding="15px 5px"
        >
          <Stack direction="row" alignItems="center" gap={4}>
            <Box component={Link} href="/" display="flex" alignItems="center">
              <Image src={logo} width={30} height={30} alt="Website Logo" />
            </Box>
            {/* Desktop View - Left side menu */}
            <div className="hidden lg:block">
              <div className="flex gap-4">
                <Typography component={Link} href="/">
                  Home
                </Typography>
                <Typography component={Link} href="/products">
                  Products
                </Typography>

                <Typography component={Link} href="/contact-us">
                  Contact Us
                </Typography>
                <Typography component={Link} href="/blog">
                  Blog
                </Typography>
                {token && (
                  <Typography
                    component={Link}
                    href={
                      role === "admin" ? "/dashboard" : "/dashboard/my-orders"
                    }
                  >
                    Dashboard
                  </Typography>
                )}
              </div>
            </div>
          </Stack>

          {/* Right Side - Cart, Theme Toggle, Login/Logout */}
          <Stack direction="row" alignItems="center" gap={2}>
            {token ? (
              <Button
                onClick={() => dispatch(logoutUser())}
                variant="outlined"
                sx={{
                  padding: "5px 15px",
                  borderRadius: "9999px",
                  color: "#0D7C66",
                  borderColor: "#0D7C66",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    borderColor: "#0A6C59",
                    color: "#0A6C59",
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  component={Link}
                  href="/login"
                  variant="outlined"
                  sx={{
                    padding: "5px 15px",
                    borderRadius: "9999px",
                    color: "#3B82F6",
                    borderColor: "#3B82F6",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderColor: "#2563EB",
                      color: "#2563EB",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  href="/register"
                  variant="contained" 
                  sx={{
                    padding: "5px 15px",
                    borderRadius: "9999px", 
                    backgroundColor: "#3B82F6",
                    "&:hover": {
                      backgroundColor: "#2563EB", 
                    },
                  }}
                >
                  Signup
                </Button>
              </>
            )}

            <Badge
              badgeContent={cartData?.length}
              color="primary"
              sx={{ userSelect: "none" }}
              showZero
            >
              <Box component={Link} href="/cart">
                <ShoppingCart className="cursor-pointer" size={25} />
              </Box>
            </Badge>

            {/* Theme Toggle Icon */}
            {/* <ThemeToggle /> */}

            {/* Mobile View - Toggle Drawer */}
            <div className="block lg:hidden">
              <AlignJustify
                onClick={() => toggleDrawer(true)}
                className="cursor-pointer"
                size={25}
              />
              <Drawer
                open={open}
                onClose={() => toggleDrawer(false)}
                PaperProps={{
                  style: {
                    width: "220px",
                    padding: "10px",
                  },
                }}
              >
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box
                    component={Link}
                    href="/"
                    onClick={() => toggleDrawer(false)}
                  >
                    <Home size={20} className="mr-1" />
                    <Typography>Home</Typography>
                  </Box>
                  <Box
                    component={Link}
                    href="/products"
                    onClick={() => toggleDrawer(false)}
                  >
                    <ShoppingBasket size={20} className="mr-1" />
                    <Typography>Products</Typography>
                  </Box>

                  <Box
                    component={Link}
                    href="/contact-us"
                    onClick={() => toggleDrawer(false)}
                  >
                    <Headset size={20} className="mr-1" />
                    <Typography>Contact Us</Typography>
                  </Box>
                  <Box
                    component={Link}
                    href="/blog"
                    onClick={() => toggleDrawer(false)}
                  >
                    <User size={20} className="mr-1" />
                    <Typography>Blog</Typography>
                  </Box>
                  {token && (
                    <Box
                      component={Link}
                      href={
                        role === "admin" ? "/dashboard" : "/dashboard/my-orders"
                      }
                      onClick={() => toggleDrawer(false)}
                    >
                      <LayoutDashboard size={20} className="mr-1" />
                      <Typography>Dashboard</Typography>
                    </Box>
                  )}
                </Box>
                <Divider
                  orientation="horizontal"
                  variant="fullWidth"
                  flexItem
                  sx={{
                    borderColor: "#363636",
                    opacity: 0.2,
                    margin: "15px 0px",
                  }}
                />
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={2}
                >
                  {token ? (
                    <Button
                      onClick={() => {
                        dispatch(logoutUser());
                        toggleDrawer(false);
                      }}
                      variant="outlined"
                      sx={{
                        padding: "5px 15px",
                        borderRadius: "9999px",
                        color: "#0D7C66",
                        borderColor: "#0D7C66",
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "transparent",
                          borderColor: "#0A6C59",
                          color: "#0A6C59",
                        },
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href="/login"
                      variant="outlined"
                      sx={{
                        padding: "5px 15px",
                        borderRadius: "9999px",
                        color: "#3B82F6",
                        borderColor: "#3B82F6",
                        backgroundColor: "transparent",
                        "&:hover": {
                          backgroundColor: "transparent",
                          borderColor: "#2563EB",
                          color: "#2563EB",
                        },
                      }}
                    >
                      Login
                    </Button>
                  )}
                  <Badge
                    badgeContent={cartData?.length}
                    color="info"
                    sx={{ userSelect: "none" }}
                    showZero
                  >
                    <Box component={Link} href="/cart">
                      <ShoppingCart className="cursor-pointer" size={25} />
                    </Box>
                  </Badge>
                  {/* <ThemeToggle /> */}
                </Stack>
              </Drawer>
            </div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
