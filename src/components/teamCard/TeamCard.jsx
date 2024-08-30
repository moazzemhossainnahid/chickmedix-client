import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCard = ({img, name, title}) => {
    return (
        <div className="rounded-md overflow-hidden h-fit hover:scale-[1.02] duration-300">
          <img
            src={img}
            alt="team-1"
            className="w-auto h-full object-cover"
          />
          <div className="bg-[#0E584D] px-5 py-8 text-center relative">
            <div className="absolute top-0 -translate-y-[50%] left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#3b5998] relative flex justify-center items-center group duration-500">
                  <a href="">
                    <FaFacebookF className="w-4 h-4 text-white"></FaFacebookF>
                  </a>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#1da1f2] relative flex justify-center items-center group  duration-500">
                  <a href="">
                    <FaTwitter className="w-4 h-4 text-white"></FaTwitter>
                  </a>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#0077b5] relative flex justify-center items-center groupduration-500">
                  <a href="">
                    <FaLinkedinIn className="w-4 h-4 text-white"></FaLinkedinIn>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-extrabold text-white">{name}</h1>
            <p className="text-sm text-[#E0B10B]">{title}</p>
          </div>
        </div>
    );
};

export default TeamCard;