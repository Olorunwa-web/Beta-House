import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import background from '../assets/Frame 9325 (1).jpg';
import '../Style/home.css'


const Home = () => {
    return (
        <>
            <main className = 'position-relative'>
                <section className = 'background-img'>
                   <Navbar/>
                   <section className = 'container top-50 start-50 translate-middle  mobile-positions'>
                       <section className = 'd-flex flex-column gap-4'>
                       <section className = 'browser'>
                           <h1 className = 'pb-3'>Browser Our Properties</h1> 
                           <p className = ''>Find your perfect home among our curated properties. Start browsing now!</p>
                       </section>
                        <section className = 'my-4 back-opa'>
                            <section className = 'd-md-flex justify-content-between background-location w-100'>
                                <div className = 'location-width d-flex justify-content-center align-items-center'>
                                    <div className =  'span-tags'>
                                      <h6>LOCATION</h6>
                                      <input type="text" placeholder = 'eg. Gbagada' className = ''/>
                                    </div>
                                </div>
                                <div className = 'property-width d-flex justify-content-center align-items-center'>
                                    <div className = 'span-tags'>
                                       <h6 className = 'text-center'>PROPERTY TYPE</h6>
                                       <input type="text" placeholder = 'eg. Duplex, Bedroom Flat' className = ' inp'/>
                                    </div>
                                </div>
                                <div className = 'bedroom-width d-flex justify-content-center align-items-center'>
                                    <div className = ''>
                                       <h6 className = 'bed-span text-center'>BEDROOM</h6>
                                      <div className = 'd-flex gap-4 align-items-center'>
                                         <div className  = 'plus d-flex align-items-center justify-content-center'>
                                            <span>-</span>
                                         </div>
                                         <div className = 'zero'>
                                            <span>0</span>
                                          </div>
                                          <div className = 'plus d-flex align-items-center justify-content-center'>
                                            <span>+</span>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <div className = 'find-width d-flex justify-content-center align-items-center'>
                                    <div className = 'pops'>
                                      <h6>Find Property</h6>
                                    </div>
                                </div>
                            </section>
                        </section>
                       </section>
                   </section>
                </section>
                <Outlet/>
            </main>
        </>
    )
}

export default Home
