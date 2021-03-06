import NavBar from '../components/Common/NavBar/NavBar';
import About from '../components/Home/AboutMeSection/About';
import Blog from '../components/Home/BlogSection/Blog';
import Contact from '../components/Home/ContactSection/Contact';
import Footer from '../components/Common/Footer/Footer';
import Hero from '../components/Home/HeroSection/Hero';
import Portfolio from '../components/Home/PortfolioSection/Portfolio';
import Skill from '../components/Home/SkillSection/Skill';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>hruday/home</title>
                <meta property="og:title" content="My Home Page title" key="title" />
            </Head>
            <NavBar />
            <Hero />
            <About />
            <Portfolio />
            <Skill />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}
