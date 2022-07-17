import Footer from '../components/Common/Footer/Footer';
import NavBar from '../components/Common/NavBar/NavBar';
import Contact from '../components/Home/ContactSection/Contact';
import Head from 'next/head';

export default function contact() {
    return (
        <div>
            <Head>
                <title>contact</title>
                <meta property="og:title" content="My contact Page title" key="title" />
            </Head>
            <NavBar />
            <Contact />
            <Footer />
        </div>
    );
}
