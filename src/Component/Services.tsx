import React from 'react'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import { usePortfolioContext } from '../Usecontext'
import { Link, Element, animateScroll as scroll } from 'react-scroll';


const Services = () => {

    const { openview}=usePortfolioContext()
  return (
 <section className='mainservices' id='services'>
        <div className='servicesbegin'>
            <h2> Services</h2>
            <p>  what i offer</p>
        </div>

        <div className='servicesopen'>
            <div>
                <FaChevronLeft style={{ fontSize:'15px', color:'hsl( 142, 69%, 61%)'}}/>
                <FaChevronRight style={{fontSize:'15px', color:'hsl( 142, 69%, 61%)'}}/>
            </div>

            <p className='servicedevelop'> frontend developer</p>
            <p className='servicemore' onClick={openview}> view more <FaArrowRight style={{ fontSize:'10px', color:'hsl( 142, 69%, 61%)'}}/> </p>

        </div>


    </section>
  )
}

export default Services