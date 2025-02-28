import React from 'react'
import '../Style/footer.css'
import icons1 from '../assets/Icon (6).svg'
import icons2 from '../assets/Vector (10).svg'
import icon3 from '../assets/Vector (11).svg'



const Footer = () => {
    return (
        <>
        <section className = 'background-footer'>
            <section className = 'container py-5 flexs '>
                <section className = 'd-md-flex justify-content-between mt-4 flex-footer'> 
                    <section className = 'footer-1'>
                      <div className = 'd-flex gap-2 align-items-center mb-3'>
                         <div className = 'bhs'>
                             <span>BH</span>
                         </div>
                          <h4 className = 'beta-nav'>BetaHouse</h4>
                      </div>
                       <div className = 'p-foot pb-3'>
                           <span>Dicover,rent, and find your idea home hassle-free with BetaHouse.Take control of your rental journey today!</span>
                       </div>
                       <div className = 'd-flex flex-column gap-2'>
                           <div className = 'd-flex gap-3 details'>
                               <img src= {icons1} alt=""/>
                               <span>95 Tinubu Estate, Lekki, Lagos</span>
                           </div>
                           <div className = 'd-flex gap-3 details'>
                               <img src={icons2} alt=""/>
                               <span>+234 675 8935 675</span>
                           </div>
                           <div className = 'd-flex gap-3 details'>
                               <img src= {icon3} alt=""/>
                               <span>support@rentbetahouse.com</span>
                           </div>
                       </div>
                    </section>
                    <section className = 'footer-2'>
                         <div className = 'quick'>
                             <h4>Quick Links</h4>
                         </div>
                         <div className = 'd-flex flex-column footer-p-tag '>
                            <p>Home</p>
                            <p>Properties</p>
                            <p>About</p>
                            <p>Contact us</p>
                            <p>Blog</p>
                         </div>
                    </section>
                    <section className = 'footer-3'>
                         <div className = 'quick'>
                             <h4>More</h4>
                         </div>
                         <div className = 'd-flex flex-column footer-p-tag '>
                            <p>Agents</p>
                            <p>Afforable Houses</p>
                            <p>FAQ's</p>
                         </div>
                    </section>
                    <section className = 'footer-4'>
                         <div className = 'quick'>
                             <h4>Popular</h4>
                         </div>
                         <div className = 'd-flex flex-column footer-p-tag'>
                            <p>Apartment for sale</p>
                            <p>Apartment for rent</p>
                            <p>3 bedroom flat</p>
                            <p>Bungalow</p>
                         </div>
                    </section>
                </section>
            </section>
            <hr/>
            <div className = 'container d-md-flex justify-content-around py-4 copy'>
                <span>Copyright 2023 BetaHouse | Designed by Micheal.fig</span>
                <span>Privacy Policy</span>
            </div>
        </section>
        </>
    )
}

export default Footer
