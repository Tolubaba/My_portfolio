import React from 'react'
import portimage from '../assets/portfolio pic.png'
import portimage1 from '../assets/IMG_0019.jpeg'
import portimage2 from '../assets/IMG_0276.jpeg'
import {useEffect,useState} from 'react'
import { dataword } from '../helpers'
import { motion,useInView } from 'framer-motion'
import {useRef} from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

import {BiDownload} from 'react-icons/bi'

//import { useInView } from 'react-intersection-observer'


const About = () => {

    const animate1 =useRef(null);
    const animate2 =useRef(null);
    const animate3=useRef(null)
    const inview1=useInView(animate1);
    const inview2=useInView(animate2)
    const inview3=useInView(animate3)
  return (
     
    <section className='mainabout' id='about'>
        <div ref={animate3} id='aboutname-cont'>
            {inview3 && 
        <motion.h2 className='aboutname' initial={{left: 300, opacity: 0}} animate={{left: 0, opacity: 1}} transition={{duration: 0.9}}> About me</motion.h2>
}
        </div>
        
        <div ref={animate1} id='introduction-cont'> {

            inview1 &&
          < motion.p className='introduction' initial={{right: 300, opacity: 0}} animate={{right: 0, opacity: 1}} transition={{duration: 1}}
>My Introduction</ motion.p> 

        }

        </div>

        <div className='mainaboutbegin'>
            <div className='imagediv'>
            <img src={portimage2} className='aboutimage'/>

            </div>

            <div className='aboutmain'>
    
                <p className='aboutwords'> 
            A Front end Developer skilled in React, Javascript and Web development,adept at creating successful websites that meets customer needs as well as specializing in collaborating with end-users to gather requirements, produce plans and improve designs for usability and functionality.
           </p>
           <div className='experince'>
            { dataword.map((_item,index)=>{
                return<div key={index}  className='experincebegin'>
                    <h4>{_item.name}</h4>
                    <p>{_item.word}</p>
                
                </div>
            })}


           </div>
           
           <div>
            <button className="aboutbtn">  Download CV </button>

            </div>

           

            </div>

        </div>

    </section>
    
  )
}

export default About