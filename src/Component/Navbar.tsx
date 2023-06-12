import React from 'react'
import { FaMoon} from 'react-icons/fa';
import { FaSun} from 'react-icons/fa';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { usePortfolioContext } from '../Usecontext';
import { NavLink } from 'react-router-dom';




import { links2 } from '../helpers'
interface linkprops {
name:string,
href:string
}


const Navbar = () => {

  const {toggleTheme,theme}=usePortfolioContext()
  return (
    <header>
     <nav className='nav'>
        <h3 className='name'> Toluwase</h3>

        <div className='navsecond'>

        <ul className='links'>
            { links2.map((_item,_index)=>{
              
              return  <li className='links'><Link to={_item.href} spy={true} smooth={true} duration={10} offset={_item.offset}> {_item.name}</Link> </li>
            })}
        </ul>

        <div>

    

    {theme==='lightmode'?<FaMoon className='color' onClick={toggleTheme}/>: <FaSun className='color' onClick={toggleTheme}/>}
        
       

        </div>



        </div>
        

        </nav>
    </header>
  )
}

export default Navbar
