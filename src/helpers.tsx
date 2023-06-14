import {GoHome} from 'react-icons/go'
import {GrServices} from 'react-icons/gr'
import {FiFileText} from 'react-icons/fi'
import {GoBriefcase} from 'react-icons/go'
import { FiSend } from 'react-icons/fi';
import {BsFillPersonFill} from 'react-icons/bs'

 export const links=[ 
    {name:'Services',
    href:'services',
    offset:-90

    },
    {
        name:'Portfolio',
        href:'portfolio',
        offset:-80
    },
    {
        name:'Contact',
        href:'contact me',
        offset:-80

    }
]


export const links2=[

    {
        name:'Home',
        href:'home',
        offset:-90,
        
    },
    {
        name:'About',
        href:'about',
        offset:-110,

    },
    {
        name:'Skills',
        href:'skills',
        offset:-100
    },
    {name:'Services',
    href:'services',
    offset:-90

    },
    {
        name:'Portfolio',
        href:'portfolio',
        offset:-80
    },
    {
        name:'Contact Me',
        href:'contact me',
        offset:-80
    }

]

export const links3=[

    {
        name:'Home',
        href:'home',
        offset:-90,
        logo:<GoHome className='helperlogo'/>
    },
    {
        name:'About',
        href:'about',
        offset:-110,
        logo:<BsFillPersonFill className='helperlogo'/>
    },
    {
        name:'Skills',
        href:'skills',
        offset:-100,
        logo:<FiFileText className='helperlogo'/>
    },
    {name:'Services',
    href:'services',
    offset:-90,
    logo:<GrServices className='helperlogo'/>

    },
    {
        name:'Portfolio',
        href:'portfolio',
        offset:-80,
        logo:<GoBriefcase className='helperlogo'/> 
    },
    {
        name:'Contact Me',
        href:'contact me',
        offset:-80,
        logo:<FiSend style={{  transform: 'rotate(40deg)',
    }} className='helperlogo'/>
    }

]

 export const dataword=[
    {
    name:'1+',
    word:'year of experince'
    },
    {
        name:'7',
        word:'completed projects'
    },{
        name:'1',
        word:'company worked'
    }
 ] 

 export const modalwords=[
    {
    work:'Build and develop interactive and user-freindly websites.'
    },
    {
        work:'Create responsive websites and application which are optimized for various devices and screen sizes'
    },
    {
        work:'Ensure Cross-Browser Compatibility'
    },
    {
        work:'Using latest frontend frameworks and technologies'
    },{
        work:'Testing and Debugging'
    }
 ]

 export const portfolio=[

    {
        id:1,
        name:'Tradelane Foot-ware Store',
        desc:'An e-commerce platform for selling footwear, built with React and powered by integration of Stripe API for secure checkout, Airtable for seamless database management, Auth0 API for user authentication, and Netlify functions for serverless architecture. Shop with ease and confidence with this secure and intuitive platform',
        image:'../asset/comfysloth.PNG',
        link:'https://tradelane.netlify.app/'
    },

    {
        id:2,
        name:'Audiophile',
        desc:'An audio e-commerce store where audio device can be purchased. Built using styled-component, react typescript',
        image:'../asset/audiophile.PNG',
        link:'https://toluaudio-ecommerce-994a14.netlify.app/'
    },
    {
        id:3,
        name:'Multistep Form',
        desc:' A multistep form which shows level of progress as form is being filled. Built using React',
        image:'../asset/fomrea.PNG',
        link:'https://relaxed-alfajores-8c8c84.netlify.app/'
    },{
        id:4,
        name:'REST Countries API',
        desc:'A website which shows lists of coutries with details about the countires. Built using React and sass',
        image:'../asset/colorcountryreal.PNG',
        link:'https://rococo-fairy-9fe715.netlify.app/'
    }
 ]