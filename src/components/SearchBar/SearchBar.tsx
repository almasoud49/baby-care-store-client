"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 2, 
  backgroundColor: "#f0f0f0", 
  "&:hover": {
    backgroundColor: "#e0e0e0", 
  },
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 600, 
  [theme.breakpoints.up("sm")]: {
    margin: "0 auto", 
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0, 
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1, 2, 1, 4), 
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  paddingRight: `calc(1em + ${theme.spacing(7)})`, 
  transition: theme.transitions.create("width"),
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

const SearchBar = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Search>
        <StyledInputBase
          placeholder="Search An Item…"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
};

export default SearchBar;
