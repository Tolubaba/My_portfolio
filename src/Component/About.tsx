import React from 'react'
import portimage from '../assets/portfolio pic.png'
import portimage1 from '../assets/IMG_0019.jpeg'
import portimage2 from '../assets/IMG_0276.jpeg'
import {useEffect,useState} from 'react'
import { dataword } from '../helpers'
import { motion,useInView } from 'framer-motion'
import {useRef} from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import cv from '../assets/OROGBEMI RESUME.pdf'
import { saveAs } from 'file-saver';


import {BiDownload} from 'react-icons/bi'

//import { useInView } from 'react-intersection-observer'


const About = () => {

    const animate1 =useRef(null);
    const animate2 =useRef(null);
    const animate3=useRef(null)
    const inview1=useInView(animate1);
    const inview2=useInView(animate2)
    const inview3=useInView(animate3)
    const downloadCV = () => {
        saveAs(cv, 'Tolu Resume');
      };
      
  return (
     
    <section className='mainabout' id='about'>
        <div ref={animate3} id='aboutname-cont'>
         <h2 className='aboutname'> About me</h2>

        </div>
        
        <div ref={animate1} id='introduction-cont'> {

        
          < p className='introduction'
>       My Introduction</ p> 

        }

        </div>

        <div className='mainaboutbegin'>
            <div className='imagediv'>
            <img src={portimage2} className='aboutimage'/>

            </div>

            <div className='aboutmain'>
    
                <p className='aboutwords'> 
            A Front end Developer skilled in React, Javascript, Typescript and Web development,adept at creating successful websites that meets customer needs as well as specializing in collaborating with end-users to gather requirements, produce plans and improve designs for usability and functionality.
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
            <button className="aboutbtn" onClick={downloadCV}>  Download CV   </button>

            </div>

           

            </div>

        </div>

    </section>
    
  )
}

export default About