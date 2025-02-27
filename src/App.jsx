import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Home from './pages/Home';
import Navbar from './Layout/Navbar';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <> 
       <BrowserRouter>
             <Routes>
                  <Route path = "/" element = {<SignIn/>}/>
                  <Route path = "/auth/sign-up" element = {<SignUp/>}/>
                  <Route path = '/dashboard' element = {<Dashboard/>}/>
                  <Route path = '/home' element = {<Home/>}/>
             </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
