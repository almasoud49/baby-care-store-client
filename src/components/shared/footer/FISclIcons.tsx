import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import Styles from "../../../styles/FISclIcons.module.css";
import { Typography } from "@mui/material";

const FISclIcons = () => {
  return (
    <div>
      <Typography
        sx={{ fontSize: "20px", fontWeight: "700",color:"white", marginBottom: "15px" }}
      >
        Social 
      </Typography>
      <div className="flex items-center mt-2">
        <Link target="_blank" href="https://web.facebook.com/masoudeco">
          <FaFacebookF className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/masoudeco/">
          <FaLinkedin className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://web.facebook.com/masoudeco">
          <FaInstagram className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://www.twitter.com/masoudeco/">
          <FaTwitter className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://www.pinterest.com/">
          <FaPinterestP className={Styles.SCLIcons} />
        </Link>
      </div>
    </div>
  );
};

export default FISclIcons;