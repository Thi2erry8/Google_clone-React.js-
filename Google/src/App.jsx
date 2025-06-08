import { useState } from 'react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Routes from './component/Routes'
import './App.css'

function App() {
  const [darkTheme, setDarktheme] = useState(false) ;
   
  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
             <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
                   <Navbar darkTheme={darkTheme} setDarktheme={setDarktheme}/>
                   <Routes/>
                   <Footer/>
             </div>  
       </div> 
    </>
  )
}

export default App
