import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner relative w-full	bg-header-banner bg-cover bg-center ">
        <div className="banner__text pb-12 text-5xl sm:text-7xl font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform  text-white  font-spectral stroke-2	z-40 transition-all">
          Productos
        </div>
        <div className="absolute flex  bg-black inset-0 duration-500 opacity-40 rounded-lg"></div>
      </div>
    </>
  );
};

export default Banner;
