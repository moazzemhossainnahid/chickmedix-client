import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from '../components/shared/navbar/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;