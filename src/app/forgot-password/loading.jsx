import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-row flex-1 justify-center h-screen">
      <Image src="/loader.svg" alt="loading" width={100} height={100} />
    </div>
  );
};

export default Loading;
