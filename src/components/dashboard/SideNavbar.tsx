"use client";

import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/baby-logo.png";
import Image from "next/image";
import { SideMenuItems } from "@/utils/SideMenuItems";
import { TUserRole } from "@/types/type.global";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavbar = () => {
  const currPathName = usePathname();

  const drawer = (
    <div>
      <List>
        {SideMenuItems("admin" as TUserRole).map((item, index) => (
          <Link href={item.path} key={index}>
            {" "}
            <ListItem
              disablePadding
              sx={{
                ...(item.path === currPathName
                  ? { borderRight: "3px solid #FE4444", borderRadius: "5px" }
                  : ""),
                mb: "8px",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon ? <item.icon /> : ""}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box>
      <Box
        component={Link}
        href="/"
        sx={{
          display: "flex",
          alignItems: "center",
          my: "10px",
          justifyContent: "center",
        }}
      >
        <Image src={Logo} alt="Logo" width={30} height={30} />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            marginLeft: "3px",
            color: "#0C1734",
          }}
        >
          Baby Care
        </Typography>
      </Box>

      {drawer}
    </Box>
  );
};

export default SideNavbar;