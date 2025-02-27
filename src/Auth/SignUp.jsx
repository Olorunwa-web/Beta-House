import React from 'react'
import image2 from '../assets/Frame 1000002379.jpg';
import or from '../assets/Frame 115.svg'
import googleIcon from '../assets/🦆 icon _google_.svg'
import '../Style/signin.css'
import { Link } from 'react-router-dom'




const SignUp = () => {
    return (
        <>
        
            <main className = 'd-md-flex align-items-cente justify-content-between sign-ups flex-content '>
                <section className = 'signin-wrappers d-flex justify-content-center align-items-center'>
                     <div className = 'insider-widths'>
                         <h3 className = 'welcome-h3-tags'>Join our community of home seekers and explore the possibilities that await</h3>
                         <p className = 'welcome-p-tags'>Lets get started by filling out the information below</p>
                         <form action="" className = 'mt-2 mat-space' >
                             <div>
                                 <div className = 'd-flex flex-space gap-2 justify-content-between mb-2'>
                                     <div>
                                         <label htmlFor="" className = 'label-input'>First Name</label>
                                         <input type="text" placeholder = 'Enter Name' className = 'input-group'/>
                                     </div>
                                     <div>
                                         <label htmlFor="" className = 'label-input'>Last Name</label>
                                         <input type="text" placeholder = 'Enter Name' className = 'input-group'/>
                                     </div>
                                 </div>
                                 <div className = 'mb-2 flex-space'>
                                     <label htmlFor="" className = 'label-input'>Email</label>
                                     <input type="email" name=""  placeholder = 'Enter your Email' className = 'w-100 input-group'/>
                                 </div>
                                 <div className = 'mb-2 flex-space'>
                                     <label htmlFor="" className = 'label-input'>Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group'/>
                                 </div>
                                 <div>
                                     <label htmlFor="" className = 'label-input'>Confirm Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group'/>
                                 </div>
                                 
                                 <div className = 'd-flex gap-3 align-items-center mt-3'>
                                     <div className = 'pt-2'>
                                       <input type="checkbox" name=""  className = 'check'/>
                                     </div>
                                     <span className = 'agree'>I agree to <span className ='terms'>Terms of Service </span>and<span className = 'terms'> Privacy Policies</span></span>
                                 </div>
                                 <div className = 'mt-4 d-flex flex-column gap-1'>
                                     <button className = 'w-100 signup-btn'>Sign Up</button>
                                     <div className = 'text-center '>
                                         <img src={or} alt="" className = ' or'/>
                                     </div>
                                     <div>
                                        <button className =  'w-100 cont-btn'><img src= {googleIcon} alt="" className = 'mb-1 pe-2 google-icon'/>Continue with Google</button>
                                     </div>
                                 </div>
                             </div>
                         </form>
                         <div className = 'text-center mt-3'>
                            <span className = ' new'>Already have an account? <Link className = 'sign-up text-decoration-none' to = '/'><span className = 'sign-up'>Sign in</span></Link></span>
                         </div>
                     </div>
                </section>
                <section className = 'image-wrappers position-relative'>
                    <div className = 'betahouse d-flex gap-2 align-items-center'>
                       <div className = 'bh'>
                             <h3>BH</h3>
                       </div>
                       <h3 className = 'house-h3'>BetaHouse</h3>
                    </div>
                     <img src= {image2} alt="" className = 'image-betas'/>
                </section>
            </main>
        
        </>
    )
}

export default SignUp
