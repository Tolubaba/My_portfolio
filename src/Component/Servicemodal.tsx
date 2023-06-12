import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { modalwords } from '../helpers'
import { GoCheck } from "react-icons/go";
import { BsCheckCircle} from "react-icons/bs";
import { usePortfolioContext } from '../Usecontext';

interface Props {
    
}

export const Servicemodal = () => {
    const {closeview}=usePortfolioContext()
    return (
        <div className='mainservicemodal'>
            <div className='modalbegin'>
                <FaTimes style={{color:'hsl( 142, 69%, 61%)'}} className='times' onClick={closeview}/>
                <p className='modaldeveloper'> frontend developer</p>
                {modalwords.map((item)=>{
                    return <div className='modalword'>
                        <div> <BsCheckCircle style={{color:'hsl( 142, 69%, 61%)'}}/>
 </div>
                        <p>{item.work} </p>

                    </div>
                })}

            </div>

            
        </div>
    )
}
