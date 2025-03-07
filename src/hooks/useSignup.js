import { useState } from 'react';

import  toast  from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext.jsx';

const useSignup = () => {

    const  login = useAuth();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    const registerUser = async (values) => {
        if (values.password !== values.passwordConfirm) {
            return setError('Password are not the same')
        } 

        console.log(values);

        try {
            setError(null)
            setLoading(false)
            const res = await fetch ('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(values),          
           })

           const data = await res.json();
           console.log(res);


           if (res.status === 201) {
               message.success(data.message)
               login(data.token, data.user)
           } else if (res.status === 400) {
               setError(data.message)
           }else {
               message.error('registration failed')
           }
        } catch (error) {
            message.error(error)
        } finally {
            setLoading(false)
        }
    }
    return { loading, error, registerUser }
}

export default useSignup