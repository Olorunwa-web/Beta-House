import React from 'react'
import image1 from '../assets/13625 1.jpg';
import or from '../assets/Frame 115.svg'
import googleIcon from '../assets/🦆 icon _google_.svg'
import '../Style/signin.css'
import { Link } from 'react-router-dom'


const SignIn = () => {
    return (
        <>
            <main className = 'd-md-flex align-items-cente justify-content-between flex-content  '>
                <section className = 'signin-wrapper d-flex justify-content-center align-items-center'>
                     <div className ='insider-width'>
                         <h3 className = 'welcome-h3-tag'>Welcome Back to BetaHouse!</h3>
                         <p className = 'welcome-p-tag'>Lets get started by filling out the information below</p>
                         <form action="" className = '' >
                             <div>
                                 <div className = 'mb-3'>
                                     <label htmlFor="" className = 'label-input'>Email</label>
                                     <input type="email" name=""  placeholder = 'Enter your Email' className = 'w-100 input-group'/>
                                 </div>
                                 <div>
                                     <label htmlFor="" className = 'label-input'>Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group'/>
                                 </div>
                                 <div className = 'd-flex justify-content-between mt-2 pt-1'>
                                     <div className = 'd-flex gap-2 align-items-center'>
                                         <input type="checkbox" name=""  className = 'check'/>
                                         <label htmlFor="" className = 'remember'>Remember Me</label>
                                     </div>
                                     <div>
                                         <span className = 'forgot-span'>Forgot Password</span>
                                     </div>
                                 </div>
                                 <div className = 'mt-4 d-flex flex-column gap-2'>
                                     <Link to = '/dashboard' className = 'w-100 signup-btn'><button className = 'w-100 signup-btn'>Sign In</button></Link>
                                     <div className = 'text-center '>
                                         <img src={or} alt="" className = ' or'/>
                                     </div>
                                     <div>
                                        <button className =  'w-100 cont-btn'><img src= {googleIcon} alt="" className = 'mb-1 pe-2 google-icon'/>Continue with Google</button>
                                     </div>
                                 </div>
                             </div>
                         </form>
                         <div className = 'text-center my-4'>
                            <span className = ' new'>New User? <Link className = 'sign-up text-decoration-none' to = '/auth/sign-up'><span className = 'sign-up'>Sign Up</span></Link></span>
                         </div>
                        </div>
                </section>
                <section className = 'image-wrapper position-relative'>
                    <div className = 'betahouse d-flex gap-2 align-items-center'>
                       <div className = 'bh'>
                             <h3>BH</h3>
                       </div>
                       <h3 className = 'house-h3'>BetaHouse</h3>
                    </div>
                     <img src= {image1} alt="" className = 'image-beta'/>
                </section>
            </main>
        </>
    )
}

export default SignIn
