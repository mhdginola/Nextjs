import st from './CardItemV2.module.css';
import dataProduct from '../../../Data/DataProduct/DataProduct';
import Image from 'next/image';

const CardItem =(props)=>{                

    return(
        <>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <Image src="/images/1.png" width={500} height={500} className={st.gbr}/>
                    
                </div>
                {/* <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div> */}
            </div>

        </>
        );    
}

export default CardItem;