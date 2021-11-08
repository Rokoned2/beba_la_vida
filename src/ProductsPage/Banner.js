import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner relative w-full	bg-header-banner bg-cover bg-center ">
        <div className="banner__text cursor-default mb-12 text-5xl sm:text-7xl font-semibold absolute-center   text-white  font-spectral stroke-2	z-40 transition-all">
          Productos
        </div>
        <div className="absolute flex  bg-black inset-0 duration-500 opacity-40 rounded-lg"></div>
      </div>
    </>
  );
};

export default Banner;
