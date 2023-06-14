import React from 'react'
import Navbar from './Component/Navbar'
import Homepage from './Component/Homepage'
import About from './Component/About'
import Skills from './Component/Skills'
import Services from './Component/Services'
import { usePortfolioContext } from './Usecontext'
import { Servicemodal } from './Component/Servicemodal'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Navmodal from './Component/Navmodal'
import { Component } from 'react'

const App = () => {

  
  
  const {viewmore,navmore}=usePortfolioContext()
  const [theme, settheme]=React.useState('lightmode')

  const toggleTheme = () => {
    if (theme === 'lightmode') {
      settheme('darkmode');
    } else {
      settheme('lightmode');
    }
  };

  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>  
        {viewmore && <Servicemodal/> }
        
        


      <Navbar/>

    <div className='body'> 
    <Homepage/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Contact/>
    
    
    
    </ div>
    <Footer/>
    </>

  )
}

export default App