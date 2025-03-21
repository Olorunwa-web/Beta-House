import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuIcon from '../assets/menu_35dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg'
import profileImages from '../assets/Ellipse 8.svg'
import { useNavigate } from 'react-router-dom'


const OffCanvas = ({ name, ...props }) => {
    const storedData = localStorage.getItem('user_data') || '';


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate  = useNavigate();

    const logout = () => {
        localStorage.removeItem("user_data");
        navigate("/")
    };

    return (
        <>
            <main>
                <div onClick={handleShow}>
                    <img src= {menuIcon} alt="menu-icon" className = 'menu-icon'/>
                </div>
                <Offcanvas show={show} onHide={handleClose}  {...props} className = 'w-75'>
                   <Offcanvas.Body className = 'w-100'>
                           <section className = 'd-flex flex-column justify-content-between w-100 h-100 '>
                             <section className = 'd-flex flex-column gap-4 pt-3'>
                                <section className = 'd-flex align-items-center gap-2 line'>
                                   <img src= {profileImages} alt="" className = 'aisha-imgs'/>
                                   <h6 className = 'aishas'>{ storedData || "Aisha Cucurella"}</h6>
                                </section>
                                <section className = 'd-flex flex-column ms-3 homes gap-3'>
                                   <p>Home</p>
                                   <p>Properties</p>
                                   <p>About Us</p>
                                   <p>Blog</p>
                                   <p>Contact Us</p>
                                </section>
                             </section>
                              <section>
                                  <button className = 'log-out-btn w-100' onClick = {logout}>Log out</button>
                              </section>
                           </section>
                   </Offcanvas.Body>
                </Offcanvas>
            </main>
        </>
    )
}

export default OffCanvas
