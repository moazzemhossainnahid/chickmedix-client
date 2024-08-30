import React from "react";
import BtnPrimary from "../../../components/btn/BtnPrimary";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TeamCard from "../../../components/teamCard/TeamCard";

const OurTeam = () => {
  return (
    <div className="max-width my-14 md:my-20">
      <div className="w-full text-center md:text-start items-center  md:flex  py-5 gap-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-[#0E584D] tracking-wider md:w-[40%]">
          Meet Our Team
        </h1>
        <div className="flex flex-col items-center md:items-start w-full gap-4">
          <p className="font-medium">
          Our dedicated team of poultry enthusiasts and AI experts is here to ensure your chickens receive the best care possible.Meet the people behind the feathers who are passionate about poultry health and committed.
          </p>
          <BtnPrimary>Connect Us</BtnPrimary>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
        <TeamCard name={"Dr. John Doe"} title={"CEO & Founder"} img={"https://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/team-3.jpg"}></TeamCard>
        <TeamCard name={"Pro. Artul Gazi"} title={"Manager"} img={"https://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/team-2.jpg"}></TeamCard>
        <TeamCard name={"Eva John"} title={"Farmer"} img={"https://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/team-4.jpg"}></TeamCard>
        <TeamCard name={"Rabie Elkhair"} title={"Farmer"} img={"https://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/team-1-1.jpg"}></TeamCard>
      </div>
    </div>
  );
};

export default OurTeam;
