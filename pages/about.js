import Footer from '../components/Common/Footer/Footer';
import NavBar from '../components/Common/NavBar/NavBar';
import About from '../components/Home/AboutMeSection/About';
import Head from 'next/head';

export default function about() {
    return (
        <div>
            <Head>
                <title>About | Hruday</title>
                <meta property="og:title" content="My about Page title" key="title" />
            </Head>
            <NavBar />
            <div style={{ marginTop: '80px' }}>
                <About />
            </div>

            <Footer />
        </div>
    );
}
