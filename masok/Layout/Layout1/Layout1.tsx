import { ReactNode } from "react";
// import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Head from 'next/head';
import Header2 from "../../Component/Header2/Header2";
// import Script from 'next/script';

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
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"></link>
                <Script src="https://kit.fontawesome.com/913e57c4c2.js"></Script>      
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>                    
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>                 */}
                <title>DEON</title>
            </Head>
            <Header2/>
                <div>{children}</div>                
            <Footer/>
        </div>
    )
}