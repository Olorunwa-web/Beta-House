import React , { useState }from 'react'
import image2 from '../assets/Frame 1000002379.jpg';
import or from '../assets/Frame 115.svg'
import googleIcon from '../assets/🦆 icon _google_.svg'
import '../Style/signin.css'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from '../Lib/SchemaValidation';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'



const SignUp =  () => {


    const navigate  = useNavigate();

    const {login} = useAuth()
    // const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(signupSchema),
      })


      const onSubmit = async (data) => {
          setLoading (true)
        try {
            // setError(null)
            // setLoading(false)
            const res = await fetch ('https://backend-test-3-ztql.onrender.com/api/auth/signup', {
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data),          
           })

           const result = await res.json();
           console.log(result);


           if (result.status === "success") {
               toast.success(result.message)
              navigate("/")
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
            <main className = 'd-md-flex align-items-cente justify-content-between sign-ups flex-content '>
                <section className = 'signin-wrappers d-flex justify-content-center align-items-center'>
                     <div className = 'insider-widths'>
                         <h3 className = 'welcome-h3-tags'>Join our community of home seekers and explore the possibilities that await</h3>
                         <p className = 'welcome-p-tags'>Lets get started by filling out the information below</p>
                         <form action="" className = 'mt-2 mat-space' onSubmit={handleSubmit(onSubmit)}>
                             <div>
                                 <div className = 'd-flex flex-space gap-2 justify-content-between mb-2'>
                                     <div>
                                         <label htmlFor="" className = 'label-input'>First Name</label>
                                         <input type="text" placeholder = 'Enter Name' className = 'input-group' {...register("firstName")}/>
                                         <span className = 'spans'>{errors.firstName?.message}</span>
                                     </div>
                                     <div>
                                         <label htmlFor="" className = 'label-input'>Last Name</label>
                                         <input type="text" placeholder = 'Enter Name' className = 'input-group'{...register("lastName")} />
                                         <span className = 'spans'>{errors.lastName?.message}</span>
                                     </div>
                                 </div>
                                 <div className = 'mb-2 flex-space'>
                                     <label htmlFor="" className = 'label-input'>Email</label>
                                     <input type="email" name=""  placeholder = 'Enter your Email' className = 'w-100 input-group' {...register("email")}/>
                                     <span className = 'spans'>{errors.email?.message}</span>
                                 </div>
                                 <div className = 'mb-2 flex-space'>
                                     <label htmlFor="" className = 'label-input'>Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group' {...register("password")}/>
                                     <span className = 'spans'>{errors.password?.message}</span>
                                 </div>
                                 <div>
                                     <label htmlFor="" className = 'label-input'>Confirm Password</label>
                                     <input type="password" name=""  placeholder = 'Enter your password' className = 'w-100 input-group' {...register("confirmPassword")}/>
                                     <span className = 'spans'>{errors.confirmPassword?.message}</span>
                                 </div>
                                 
                                 <div className = 'd-flex gap-3 align-items-center mt-3'>
                                     <div className = 'pt-2'>
                                       <input type="checkbox" name=""  className = 'check'/>
                                     </div>
                                     <span className = 'agree'>I agree to <span className ='terms'>Terms of Service </span>and<span className = 'terms'> Privacy Policies</span></span>
                                 </div>
                                 <div className = 'mt-4 d-flex flex-column gap-1'>
                                         <button className = 'w-100 signup-btn' type = 'submit' disabled = {isSubmitting}>{loading ? "Signing up..." : "Sign up"}</button>
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
