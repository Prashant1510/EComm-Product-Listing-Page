import React from "react";

const Content = () => {
  return (
    <>
      <div className="w-full h-64 bg-sky-300 rounded-sm flex items-center justify-center mb-6">
        <div className="flex justify-between items-center w-11/12">
          <div className="banner-title">
            <h1 className="text-4xl font-semibold text-white">
              Adidas Men Running Sneakers
            </h1>
            <p className="text-sm font-normal text-white">
              Performance and Design. Taken right to the edge
            </p>
            <button className="text-sm text-white underline">SHOP NOW</button>
          </div>
          <div className="banner-image">
            <img
              className="border-none max-h-48 w-auto border-r-8"
              src="/images/bannerSneaker.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
