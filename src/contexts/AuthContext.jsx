import React, { useEffect, useState ,useContext, createContext} from 'react'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedData = localStorage.getItem('user_data') || '';

    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(storedData);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
   
console.log('user',userData)

    const login = (token, user) => {
        setUserData(user);
        setToken(token)
    };

    const logout = () => {
        setUserData(null);
    };

    useEffect(()=>{
        if (storedData) {

            // setToken(userToken);
            setUserData(storedData);
            setIsAuthenticated(true);

        }
    }, []);


    // const login = (newToken, newData) => {
    //    localStorage.setItem(
    //        'user_data',
    //        JSON.stringify({ userToken: newToken, user: newData }),
    //    );

    //     setToken(newToken);
    //     setUserData(newData);
    //     setIsAuthenticated(true);
    // };

    // const logout = ()=>{
    //     localStorage.removeItem('user_data');
    //     setToken(null);
    //     setUserData(null);
    //     setIsAuthenticated(false);
    // }


     return (
            <AuthContext.Provider value = {(token, login, logout, userData, isAuthenticated)}>
                 {children}
            </AuthContext.Provider>
      );

}

export const useAuth = () => {
    return useContext(AuthContext);

}

