import { ReactNode } from "react";
import Footer from "../../Component/Footer/Footer";
import Head from 'next/head';
import Header2 from "../../Component/Header2/Header2";

interface LayoutProps{
    children:ReactNode;
}

export default function Layout1(props:LayoutProps) {
    const {children} =props;    
    return(
        <div>
            <Head>               
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>   
                <title>DEON</title>
            </Head>
            <Header2/>
            <div>
                {children}
            </div>                
            <Footer/>
        </div>
    )
}