import React from "react";
import sliderImg from "../../../assets/slider-1.jpg";
import BtnPrimary from "../../../components/btn/BtnPrimary";

const HomeBanner = () => {
  return (
    <div
      className="min-h-[60vh] md:h-[calc(100vh-40px)] w-full bg-no-repeat bg-center md:bg-cover "
      style={{ backgroundImage: `url(${sliderImg})` }}
    >
      <div className="flex items-center justify-center w-full min-h-[60vh] h-full" style={{backgroundColor:' transparent',
    backgroundImage: 'linear-gradient(180deg, #00000073 47%, #000000 100%)',
    opacity: '0.86'}}> 
        <div className="text-center px-3 lg:px-0">
          <h1 className="text-3xl lg:text-7xl text-white font-extrabold font-mono">
            Poultry Farming
          </h1>
          <p className="text-[#EDECD8] font-medium text-xs md:text-sm lg:text-base py-4 md:py-6 max-w-[651px]">
          Learn more about our mission, our team of experts, and the technology behind Chicken Health Check on our About Us page.
          </p>
          <div className="flex justify-center">
          <BtnPrimary>Discover More</BtnPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
