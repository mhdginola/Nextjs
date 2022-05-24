import dynamic from 'next/dynamic';
import Image from 'next/image';
import st from './EyeN3.module.css';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function EyeN3() {
  return (    
    <div className={st.eyee}>
        <div className={st.tekb}>
            <Image src="/images/bgb2.jpg" layout='fill' alt="back" priority/>     
        </div>
        <div className={st.te}>
          <p>a smarter way of living</p>        
        </div> 
        <div className={st.uta}>        
            <Spline scene="https://prod.spline.design/66r8CG8Gmx61L5E7/scene.splinecode" />
        </div>    
    </div>
    
  );
}