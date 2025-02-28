import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../pages/Footer'
import Property from '../pages/Property';
import Dicover from '../pages/Discover'

const Dashboard = () => {
    return (
        <>
            <section>
                 <Home/>
                 <Property/>
                 <Dicover/>
                 <Footer/>
                 <Outlet/>
            </section>
        </>
    )
}

export default Dashboard
