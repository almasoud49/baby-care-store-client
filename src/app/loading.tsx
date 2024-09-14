import Image from "next/image";
import React from "react";
import LoaderImg from "@/assets/loading.jpg";

const loadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src={LoaderImg} width={400} height={400} alt="Loading Image" />
    </div>
  );
};

export default loadingPage;