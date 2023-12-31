import React from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { BiCodeCurly } from "react-icons/bi";
import { motion,useInView } from 'framer-motion'
import {useRef} from 'react';





const Skills = () => {

    const animat4=useRef(null)
    const animate5=useRef(null)
    const animate6=useRef(null)
    const animate7=useRef(null)
    const inview4=useInView(animat4)
    const inview5=useInView(animate5)
    const inview6=useInView(animate6)
    const inview7 =useInView(animate7)
  return (
     <section className='skillsmain' id='skills'>
        <div className='skillstop'>
            <h2 className='skillsname'> Skills </h2>
            <p className='technical'> my Technical Level</p>

        </div>
        <div className='skilldeveloper'>
            <p className='skillcurly'><BiCodeCurly/></p>
            <div className='skillfront'>
                <h4> frontend developer</h4>
                <p>1 year plus expereince</p>
            
            </div>

        </div>

        

        <div className='linewidths'>

            
             <article className='progressone'>
            <p className='progresstext'>  <span className='progressword'>HTML </span> <span className='progresspercent'> {`85%`}</span></p>
            <div className='progressbar' style={{width:'100%',     background: `linear-gradient(to right, #57e089 ${85}%, #b6fccf ${15}% 100%)`
}}>
                

            </div>
             </article>


            

        
           
            <article>
            <p className='progresstext'>  <span className='progressword'>CSS </span> <span className='progresspercent'> {`80%`}</span></p>

            <div className='progressbar' style={{width:'100%',     background: `linear-gradient(to right, #57e089 ${80}%, #b6fccf ${20}% 100%)`
}}>

            </div>

            </article>

            <article>
            <p className='progresstext'>  <span className='progressword'>Javascript </span> <span className='progresspercent'> {`70%`}</span></p>

            <div className='progressbar' style={{width:'100%',     background: `linear-gradient(to right, #57e089 ${70}%, #b6fccf ${30}% 100%)`
}}>

            </div>
            </article>

            <article>
            <p className='progresstext'>  <span className='progressword'>React </span> <span className='progresspercent'> {`75%`}</span></p>

            <div className='progressbar' style={{width:'100%',     background: `linear-gradient(to right, #57e089 ${75}%, #b6fccf ${25}% 100%)`
}}>

            </div>
            </article>

            <article>
            <p className='progresstext'>  <span className='progressword'>Typescript  </span> <span className='progresspercent'> {`70%`}</span></p>

            <div className='progressbar' style={{width:'100%',     background: `linear-gradient(to right, #57e089 ${70}%, #b6fccf ${30}% 100%)`
}}>

            </div>
            </article>
            



        </div>

    </section>

  )
}

export default Skills