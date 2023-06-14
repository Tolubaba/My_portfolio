import React from 'react'

import { usePortfolioContext } from '../Usecontext'
import { links3 } from '../helpers'
import { Link } from 'react-scroll'





const Navmodal = () => {

    const {navmore}=usePortfolioContext()
  return (
    <section className={navmore?'mainnavmodal showcontainer':'mainnavmodal'}>

        <div className='column1'>
            {links3.slice(0,3).map((_item)=>{
                return <div> 
                    <Link className='modallink' to={_item.href} offset={_item.offset} spy={true} duration={10} smooth={true}>  <p>{_item.logo} </p>  <p className='navmodalword'>{_item.name} </p> </Link>
                </div>
            })}

        </div>
        <div className='column2'>
            {links3.slice(3).map((_item)=>{
                return <div> 
                    <Link className='modallink' to={_item.href} offset={_item.offset} spy={true} duration={10} smooth={true}> <p className='logonav'> {_item.logo}</p>  <p className='navmodalword'>{_item.name} </p>   </Link>
                </div>
            })}

        </div>


    </section>
  )
}

export default Navmodal