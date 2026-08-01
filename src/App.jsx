import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from'./components/Navbar/Navbar.jsx'
import Sidebar from'./components/Sidebar/Sidebar.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import {BrowserRouter ,Routes,Route} from "react-router-dom";



function App() {

return(
  
  <BrowserRouter>

  <div className='d-flex'>
    <Sidebar/>
   <div style={{marginLeft:"260px"}} className='flex-grow-1'>
     <Navbar />

     <main className='p-4'>
      <Routes>
       <Route path='/' element={<dashboard/>}/>
       <Route path='/dashboard' element={<dashboard/>}/>
       <Route path='/crops' element={<crops/>}/>
       <Route path='/livestock' element={<livestock/>}/>
       <Route path='/reports' element={<reports/>}/>
       

      </Routes>
     <Dashboard/>
     </main>
   </div>
   
       
  </div>
  </BrowserRouter>

  
)
}

export default App
