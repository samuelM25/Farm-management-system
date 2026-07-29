import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from'./components/Navbar/Navbar.jsx'
import Sidebar from'./components/Sidebar/Sidebar.jsx'
import Login from'./components/login/login.jsx'


function App() {

return(
  <>
  
  <div className='d-flex flex-column vh-100'>
   <Navbar />
    
    <div className='d-flex flex-grow-1'>
     <Sidebar/>
    

     <div className='container mt-5'>
       <h1 className='text-success'>
       welcome to linah farm management system
       </h1>

       <button className='btn btn-primary mt-3'>
        Get Started</button>
     </div>
    </div>
  </div>
  </>
)
}

export default App
