import Footer from '../components/Common/Footer/Footer';
import NavBar from '../components/Common/NavBar/NavBar';
import Contact from '../components/Home/ContactSection/Contact';
import Head from 'next/head';
import ContactHero from '../components/ContactPage/ContactHero/ContactHero';

export default function contact() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Contact | Hruday</title>
                <meta property="og:title" content="My contact Page title" key="title" />
            </Head>

            <NavBar />
            <Contact />
            <ContactHero />
            <Footer />
        </div>
    );
}
