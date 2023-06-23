import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import { portfolio } from '../helpers'
import {useEffect} from'react'
import { Link } from 'react-scroll'



const Portfolio = () => {

    const [number,setnumber]=React.useState<number>(0)
    const newportfolio=portfolio[number]

    useEffect(()=>{

        const interval =setInterval(()=>{
        if(number===portfolio.length-1){
            setnumber(0)
        }
        else{
            setnumber(number+1)
        }
    },3000);

    return ()=>{
        clearInterval(interval)
    }
    },[number])



    const addnumber=()=>{
        
        if(number===portfolio.length-1){
            setnumber(0)
        }
        else{
            setnumber(number+1)
        }
    }

  return (
    <section className='mainportfolio' id='portfolio'>
        <div className='portfoliobegin'>
            <h2 className='portfolioname'> portfolio</h2>
            <p className='portfoliorecent'>Most recent work</p>
             </div>

             <div className='sliderbegin'>

                <div>
                    <FaChevronLeft className='direction'/>
                </div>
                 <div className='slidermain'>

                        <div className='sliderimagediv'>
                        <img src={newportfolio.image}/>
                            </div>

                            <div className='sliderword'>
                                <h3 className='sliderwordname'> {newportfolio.name}</h3>
                            <p className='sliderdesc'>{newportfolio.desc}</p>
                            <div>
                                <button className='demobtn'>  <a href={newportfolio.link}>Demo <FaArrowRight style={{color:'white', fontSize:'12px'}}/> </a> </button>
                            </div>
                            </div>
                        
                        
                         </div>
                         <div>
                            <FaChevronRight className='direction' onClick={addnumber}/>
                         </div>
            
             </div>
             <div className='sliderdotmain'>
                {portfolio.map((_item,index)=>{
                 return <div key={index} className={number===index?'sliderdotcolor':'sliderdot'}>

                </div>
             })}
             </div>

             <div className='slidercontact'>
                <h2> You have a new project</h2>
                <p> contact me and get pixel perfect websites and application</p>

                <button> <Link to='contact me' spy={true} smooth={true} duration={10} offset={-80}> Contact me</Link> </button>


             </div>

    </section>
  )
}

export default Portfolio