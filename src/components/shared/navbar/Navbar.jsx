import React, {useState} from 'react';
import { BsTelephone } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='py-1.5 bg-[#E0B10B]'>
            <div className='max-width relative flex justify-between'>
                {/* logo here */}
                <div className='h-fit w-fit absolute -top-2 left-0 px-[10px] py-4 xl:px-[15px] xl:py-5 bg-white z-10 flex justify-center flex-col items-center rounded-b-xl shadow-lg'>
                    <img src="https://i.ibb.co/12JFZZk/logo.png" alt="logo" className='h-[50px] lg:h-auto md:w-[55px] lg:w-[60px]' />
                    <h1 className='text-sm md:text-base lg:text-lg font-extrabold mt-1 text-[#E0B10B] font-sans'>ChickMedix</h1>
                </div>
                <div ></div>
                {/* menu bar icon here */}
                <div className='py-1 md:hidden'>
                    {!isMenuOpen ? <FaBars onClick={()=> setIsMenuOpen(!isMenuOpen)} className='text-white w-4 h-4 sm:w-6 sm:h-6 md:hidden cursor-pointer'></FaBars> : 
                    <FaTimes onClick={()=> setIsMenuOpen(!isMenuOpen)} className='text-white w-4 h-4 sm:w-6 sm:h-6 md:hidden cursor-pointer'></FaTimes>}

                </div>
                {/* navlink here */}
                <ul className={`absolute md:relative z-20 md:flex items-center gap-6 font-semibold ${isMenuOpen ? ' top-7 right-0 w-full min-h-[30vh] bg-[#A4895C] md:hidden p-5 space-y-3' : 'hidden'}`}>
                    <li className='border-b md:border-none'><NavLink to="/" className={({isActive})=> isActive ? 'text-white' : 'text-black'}>Home</NavLink></li>
                    <li className='border-b md:border-none'><NavLink to="/services" className={({isActive})=> isActive ? 'text-white' : 'text-black'}>Our Services</NavLink></li>
                    <li className='border-b md:border-none'><NavLink to="/about" className={({isActive})=> isActive ? 'text-white' : 'text-black'}>About</NavLink></li>
                    <li className='border-b md:border-none'><NavLink to="/contacts" className={({isActive})=> isActive ? 'text-white' : 'text-black'}>Contacts</NavLink></li>
                </ul>
                <button className='px-3 hidden py-1.5 font-semibold text-sm bg-[#0E584D] rounded-xl text-white md:flex items-center justify-center gap-1.5'><BsTelephone></BsTelephone> Get Free Quote</button>
            </div>
        </div>
    );
};

export default Navbar;