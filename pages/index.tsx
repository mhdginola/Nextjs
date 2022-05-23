import type { NextPage } from 'next';
import Spline from '@splinetool/react-spline';
import Header from '../Component/Header/Header';
import EyeN1 from '../Component/EyeN1/Eye';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>               
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app"/>               
        <title>DEON</title>
      </Head>
      <EyeN1/>     
    </>
  )
}

export default Home;
