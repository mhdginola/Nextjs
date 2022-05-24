import Image from "next/image";
import Link from "next/link";

export default function Header(){    
    return(           
        <nav>
            <div className={"logo"}>
                <Link href="/">
                    <a>                        
                        <div className={'image-container'}>
                          <Image src="/images/logo.png" layout="fill" objectFit="contain" className={'image'} />
                        </div>
                    </a>
                </Link>
            </div>                
            <ul className="nav-menu">                
               <li><Link href="product"><a>SECURITY</a></Link></li>
                <li><Link href="product"><a>SMART HOME</a></Link></li>
                <li><Link href="product"><a>LIGHTING</a></Link></li>                    
                <li><Link href="product"><a>ELECTRICAL</a></Link></li> 
            </ul>        
       </nav>          
   )    
}