import st from './Header2.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Header2(){          
    const [statg, setStatg] = useState(false);
    
    const icgBars= '/images/bars.svg';
    const icgTimes= '/images/times.svg';

    const handleClick=()=>{
        console.log("click1");
        setStatg(!statg);
    }    

    const handleClick2=()=>{  
        console.log("click2");                      
        setStatg(!statg);
                       
    }    
        return(          
            <nav className={st.navbarItem}>
                <div className={"logo"}>
                    <Link href="/"><a>                        
                            <div className={'image-container'}>
                            <Image src="/images/logo.png" layout="fill" objectFit="contain" className={'image'} alt="DEON" priority/>
                            </div></a>
                    </Link>
                </div>             
                <ul className={statg===false?st.navMenu : st.navMenu+' '+ st.active}>                
                    <li onClick={handleClick2}><Link href="/product"><a>SECURITY</a></Link></li>
                    <li onClick={handleClick2}><Link href="/product"><a>SMART HOME</a></Link></li>
                    <li onClick={handleClick2}><Link href="/product"><a>LIGHTING</a></Link></li>                    
                    <li onClick={handleClick2}><Link href="/product"><a>ELECTRICAL</a></Link></li> 
                    <li><Image src={"/images/instagram.svg"} width={20} height={20} alt={"instagram"} priority/></li>  
                    <li><Image src={"/images/tiktok.svg"} width={20} height={20} alt={"tiktok"} priority/></li>
                    <li><Image src={"/images/youtube.svg"} width={20} height={20} alt={"youtube"} priority/></li>                    
                </ul>            
                <div className={st.menuIcon} onClick={handleClick}>                                        
                    <Image src={statg===false?icgBars:icgTimes} width={20} height={20} alt={"menu"} priority/>                    
                </div>

            </nav>
        )    
}