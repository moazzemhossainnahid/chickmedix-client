import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const BtnPrimary = ({children}) => {
    return (
        <button className="px-4 py-2 lg:px-5 lg:py-3 rounded bg-[#E0B10B] text-xs md:text-sm font-medium flex items-center gap-1 justify-center w-fit "><FaArrowRight className=""></FaArrowRight> {children}</button>
    );
};

export default BtnPrimary;