import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner relative w-full	bg-header-banner bg-cover bg-center ">
        {/* <img
          className="object-cover object-center w-full h-96 "
          src={banner}
          alt="banner"
        /> */}
        <span className="pb-12 text-5xl sm:text-7xl font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform  text-white  font-spectral stroke-2	z-40 ">
          Productos
        </span>
        <div className="absolute flex  bg-black inset-0 duration-500 opacity-40 rounded-lg"></div>
      </div>
    </>
  );
};

export default Banner;
