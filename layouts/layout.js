import {Inter,Manrope} from '@next/font/google';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';

const inter = Manrope({subsets:["latin"]});
export default function Layout({children}){
    return (
        <>
            <Head>
            <title>Uganda National Council For Higher Education | Journal</title>
            <meta name="description" content="NCHE Journal" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={`${inter.className} page-wrapper`}>
                <Header/>
                {children}
            </main>
            {/* <Footer/> */}
        </>
    );
}