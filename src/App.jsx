import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from'./components/Navbar/Navbar.jsx'
import Sidebar from'./components/Sidebar/Sidebar.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Adddata from './pages/Adddata.jsx'
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

       <Route path='/'element={<Dashboard/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/Adddata' element ={<Adddata/>}/>
   
       


      </Routes>
     </main>
   </div>
   
       
  </div>
  </BrowserRouter>

  
)
}

export default App
