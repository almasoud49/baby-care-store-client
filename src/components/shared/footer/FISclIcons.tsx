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

const FISclIcons = () => {
  return (
    <div>
      <div className="flex items-center mt-2">
        <Link target="_blank" href="https://web.facebook.com/AhshanHabib26">
          <FaFacebookF className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/ahshanhabib26/">
          <FaLinkedin className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://web.facebook.com/AhshanHabib26">
          <FaInstagram className={Styles.SCLIcons} />
        </Link>
        <Link target="_blank" href="https://www.twitter.com/ahshanhabib26/">
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