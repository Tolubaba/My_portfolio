import React from "react";
import image from '../assets/IMG-20230208-WA0018.jpg'
import image1 from '../assets/IMG_0546.jpeg'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { Link, Element, animateScroll as scroll } from 'react-scroll'; 
import { FiSend } from 'react-icons/fi';

// Usage example
<FiSend />


// ...

// Inside your component's JSX:


 
const Home = () => {
  return (
    
    <div className="homepage" id="home">
        <div className="firsthome">
            <div className="homelittleicon">

                <a href='https://twitter.com/Tendou_pain2'><FaTwitter style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /> </a>

<a href='https://github.com/Tolubaba'>  <FaGithub style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /> </a>
        
      <a href="https://www.linkedin.com/in/orogbemi-toluwase-568528258"> <FaLinkedin style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /></a>
        

      </div>

      <div className="home__img">
        <svg
          className="home__blob js__nonScroll fade__in"
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
          </mask>
          <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
            <image className="home__blob-img" xlinkHref={image1} style={{ objectFit: 'cover', width: '100%', height: '142%' }} ></image>
          </g>
        </svg>
      </div>
      </div>

      <div className="homeword">
        <div className="homewordbegin">
            <h1 className="homename"> Hi, I am Toluwase</h1>
        <p className="homedeveloper"> A frontend developer</p>
        <p className="homedesc">Intermediate level experience in web design and development knowledge, creating responsive and pixel perfect websites. </p>
        <button className="contactme"> <a href="#contact">  contact me  </a></button>
        </div>
        
        <div className="homebigicon">

            <a href='https://twitter.com/Tendou_pain2' > <FaTwitter style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /></a>
        
        <a href='https://github.com/Tolubaba'><FaGithub style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /> </a>
        
        <a href="https://www.linkedin.com/in/orogbemi-toluwase-568528258"><FaLinkedin style={{fontSize:'15px',fill:'none' ,color:' hsl( 142, 69%, 61%)', strokeWidth: '35px',stroke:'hsl( 142, 69%, 61%)'
}}  /> </a>
        

      </div>

      </div>
    </div>

  );
};

export default Home;
