import React from 'react'
import { Link } from 'react-scroll'
import { links } from '../helpers'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const Footer = () => {

    const currentYear: number = new Date().getFullYear();
 // Output: 2023 (assuming the current year is 2023)

  return (
    <section className='mainfooter'>
        <footer className='footer'>
            <div className='footermain'>

            <div className='footerword'>
                <h2 className='footername'>Toluwase </h2>
                <h3 className='footerdeveloper'> frontend developer</h3>
                </div>

                <div className='footerlink'>
                    {links.map((_item)=>{
                        return <li ><Link className='a' to={_item.href} spy={true} smooth={true} offset={_item.offset} duration={10}>{_item.name} </Link> </li>

                    })}


                </div>
                </div>

                <div className='footerlogo'>
        <a href='https://twitter.com/Tendou_pain2'><FaTwitter className='footlogo' style={{fill:'none' ,color:'white', strokeWidth: '35px'
}}   />
 </a>
       <a href='https://github.com/Tolubaba'><FaGithub className='footlogo' style={{fill:'none' ,color:'white', strokeWidth: '35px',
}}  />
</a>
        <a href="https://www.linkedin.com/in/orogbemi-toluwase-568528258"><FaLinkedin className='footlogo' style={{fill:'none' ,color:'white', strokeWidth: '35px'
}}  />
</a>                </div>



         
        </footer>

        <p className='footerdate'> &copy; {currentYear} All rights reserved</p >


    </section>
  )
}

export default Footer