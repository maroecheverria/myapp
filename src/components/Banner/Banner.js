import React from "react";
import banner from "../../img/banner.png";

const Banner = () => {
  return (
    <div
      className="banner-div"
      style={{ backgroundColor: "rgb(0, 123, 255, 0.25)" }}
    >
      <img src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
