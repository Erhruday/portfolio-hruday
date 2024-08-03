import Footer from '../components/Common/Footer/Footer';
import NavBar from '../components/Common/NavBar/NavBar';
import Portfolio from '../components/Home/PortfolioSection/Portfolio';
import Head from 'next/head';
import  { workLists } from "../data"


export default function work() {
    
    return (
        <div>
            <Head>
                <title>Work | Hruday</title>
                <meta property="og:title" content="My work Page title" key="title" />
            </Head>
            <NavBar />
            <Portfolio workLists={workLists}/>
            <Footer />
        </div>
    );
}


