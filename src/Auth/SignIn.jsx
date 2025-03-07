import React , { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import image1 from '../assets/13625 1.jpg';
import or from '../assets/Frame 115.svg'
import googleIcon from '../assets/🦆 icon _google_.svg'
import '../Style/signin.css'
import { Link } from 'react-router-dom'
import { signinSchema } from '../Lib/SchemaValidation';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const SignIn = () => {

    const navigate  = useNavigate();
    const [loading, setLoading] = useState(null)


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting  },
      } = useForm({
        resolver: yupResolver(signinSchema),
      })
   


    const onSubmit = async (data) => {
        setLoading (true)
      try {
         
          const res = await fetch ('https://backend-test-3-ztql.onrender.com/api/auth/signin', {
              method: 'POST',
              headers:{
                  "Content-Type":"application/json"
              },
              body: JSON.stringify(data),          
         })

         const result = await res.json();
         console.log(result);


         if (result.status === "success") {
            localStorage.setItem(
                       'user_data',
                       result?.user?.fullName,

                   );
             toast.success(result.message)
            navigate("/dashboard")
         } 
      } catch (error) {
          toast.error('something went wrong')
          console.error(error);
      } finally {
          setLoading(false)
      }

      }


    return (
        <>
            <main className = 'd-md-flex align-items-cente justify-content-between flex-content  '>
                <section className = 'signin-wrapper d-flex justify-content-center align-items-center'>
                     <div className ='insider-width'>
                         <h3 className = 'welcome-h3-tag'>Welcome Back to BetaHouse!</h3>
                         <p className = 'welcome-p-tag'>Lets get started by filling out the information below</p>
                         <form action="" className = '' onSubmit={handleSubmit(onSubmit)} >
                             <div>
                                 <div className = 'mb-3'>
                                     <label htmlFor="" className = 'label-input'>Email</label>
                                     <input type="email" name=""  placeholder = 'Enter your Email' className = 'w-100 input-group' {...register("email")}/>
                                     <span className = 'spans'>{errors.email?.message}</span>
                                 </div>
                                 <div>
                                     <label htmlFor="" className = 'label-input'>Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group' {...register("password")}/>
                                     <span className = 'spans'>{errors.password?.message}</span>
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
                                     <button className = 'w-100 signup-btn' type = 'submit' disabled = {isSubmitting} >Sign In</button>
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
