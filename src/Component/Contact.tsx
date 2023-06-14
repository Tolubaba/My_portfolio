import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import {useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



interface Formvalues{
    name:string,
    email:string,
    project:string,
    textarea:string,

  
  }





const Contact = () => {
    

      
    const initialFormValues: Formvalues = {
        name: '',
        email: '',
        project: '',
        textarea: '',
        
      };

    
const [formvalues,setformvalues]=useState<Formvalues>(initialFormValues)
    const submit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

    }

    const handlechnage=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const {name,value}=e.target
        setformvalues({...formvalues,[name]:value})


    }
  return (



    <section  className='maincontact' id='contact me'>
        <div className='contactbegin'>
            <h2> contact me</h2>
            <p> Get in touch</p>
        </div>

        <div className='contactreal'>

        

        <div className='contactdetails'>
            <div className='contactinfo'> 
                <FaPhoneAlt className='infologo'/>
                <div>
                    <h3> call me</h3>
                    <p> +2348038476752</p>
                </div>
                
                </div> 


                <div className='contactinfo'>
                    <FaEnvelope className='infologo'/>

                    <div>
                        <h3>Email</h3>
                        <p> orogbemi4@gmail.com </p>
                    </div>

                </div>

                <div className='contactinfo'>
                    <FiMapPin className='infomap'/>

                    <div>
                        <h3> location</h3>
                        <p> Akure, Ondo State </p>
                    </div>

                </div>

        </div>

        <div className='contactform'>
            <form action="https://formspree.io/f/mbjenjel"
  method="POST">

            <div className='firstinput'>
                <input type='text' placeholder='Name' name='name' />
                <input type='Email' placeholder='Email' name='email' /> 

            </div>
            <div className='inputproject'>
            <input type='text' placeholder='project' name='project'/>
            </div>

            <div className='textproject'>
            <textarea placeholder='message' name='textarea'/>

            </div>

            <button type='submit' className='submitbtn'>  send message </button>

            </form>

        </div>

        </div>

        <div>

        </div>

    </section>
  )
}

export default Contact