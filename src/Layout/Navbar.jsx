import React from 'react'
import profileImage from '../assets/Ellipse 8.svg'
import dropdown from '../assets/Vector.svg'
import {NavLink} from 'react-router-dom'
import Offcanvas from '../Lib/OffCanvas';


const Navbar = () => {

    
    return (
        <>
        <section className = 'nav-background'>
            <main className = 'container py-2'>
                <section className = 'd-flex align-items-center justify-content-between'>
                    <section>
                      <div className = 'd-flex gap-2 align-items-center'>
                         <div className = 'bhs'>
                             <span>BH</span>
                         </div>
                          <h4 className = 'beta-nav'>BetaHouse</h4>
                       </div>
                    </section>
                    <section className = 'd-none d-md-flex home'>
                         <p>Home</p>
                         <p>Properties</p>
                         <p>About Us</p>
                         <p>Blog</p>
                         <p>Contact Us</p>
                    </section>
                    <section className = 'd-none d-lg-flex align-items-center gap-2'>
                         <img src= {profileImage} alt="" className = 'aisha-img'/>
                         <h6 className = 'aisha'>Aisha Cucurella</h6>
                         <img src= {dropdown} alt="" className = 'aisha-drop'/>
                    </section>
                    <section className = 'd-md-none d-flex'>
                       {['end'].map((placement, idx) => (
                           <Offcanvas key={idx} placement={placement} name={placement} />
                          ))}
                    </section>
                </section>
            </main>
        </section>
        </>
    )
}

export default Navbar
