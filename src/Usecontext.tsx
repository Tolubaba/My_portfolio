import React from 'react';
import { ReactNode,useContext ,useState,useEffect} from 'react';
import { createContext } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

interface Props {
    
    children:ReactNode


}

interface portfoliocontext {
    viewmore:Boolean,
    openview:()=>void,
 setviewmore: React.Dispatch<React.SetStateAction<Boolean>>,
 closeview:()=>void,
 getStorageTheme: () => string,
  toggleTheme: () => void
  theme:string



 



}



const PortfolioContext=createContext ({}  as portfoliocontext )

 export const Portfolioprovider = ({children}:Props) => {

    const [viewmore,setviewmore]=useState<Boolean>(false);

    const openview=()=>{
        setviewmore(true)
    }
    const closeview=()=>{
        setviewmore(false)
    }

    const getStorageTheme = (): string => {
        let theme: string = 'lightmode';
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme !== null) {
          theme = storedTheme;
        }
        return theme;
      };

      const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'lightmode') {
      setTheme('darkmode');
    } else {
      setTheme('lightmode');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

    // const scrollToSection = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
    // const navbar=document.querySelector('.nav')
    // const navheight=navbar?.getBoundingClientRect().height
    // console.log(navheight)

    // const name = e.currentTarget.getAttribute('href')?.slice(1);
    // console.log(name)
    // const id = name ? document.getElementById(name) : null;
    

    // if(id && navheight !== undefined){
    //     let position= id.offsetTop
    //     console.log(position)
    //     position=position-1000
    //     console.log(position)

    //     window.scrollTo({
    //         top:position
    //     })
    // }


    // }

    return (
        <PortfolioContext.Provider value={{viewmore,openview,setviewmore,closeview,getStorageTheme,toggleTheme,theme}}>
            {children}

        </PortfolioContext.Provider>
    )
}

export const usePortfolioContext=():portfoliocontext=>{
    return useContext(PortfolioContext)
}
