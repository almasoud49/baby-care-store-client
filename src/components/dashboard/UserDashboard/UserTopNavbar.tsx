"use client";

import React, { useState } from "react";
import adminImg from "@/assets/baby-logo.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Drawer } from "@mui/material";
import UserSideNavbar from "./UserSideNavbar";


const UserTopNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className=" bg-[#0C1734] p-2 px-5">
      <div className="flex items-center justify-between lg:justify-end">
        <div className=" block lg:hidden">
          <Menu
            onClick={toggleDrawer(true)}
            color="#fff"
            className=" cursor-pointer"
          />
          <div>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: {
                  width: "220px",
                  padding: "10px",
                  backgroundColor: "#0C1734",
                },
              }}
            >
              <div>
                <UserSideNavbar/>
              </div>
            </Drawer>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" flex flex-col mr-3 text-white">
            <h1 className="text-md font-semibold">Abdullah Al Masoud</h1>
            <p className="text-md font-light">User</p>
          </div>
          <div>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src={adminImg}
              width={100}
              height={100}
              alt="Admin Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTopNavbar;