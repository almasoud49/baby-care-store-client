import React from "react";
import NotFoundImg from "../assets/baby-logo.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Image src={NotFoundImg} width={400} height={400} alt="Not Found Image" />
      <div className="mt-4 bg-[#0C1734] p-3 rounded-md text-white text-md font-light">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;