import Footer from '../components/Common/Footer/Footer';
import NavBar from '../components/Common/NavBar/NavBar';
import Skill from '../components/Home/SkillSection/Skill';
import Head from 'next/head';

export default function experience() {
    return (
        <div>
            <Head>
                <title>Experience | Hruday</title>
                <meta property="og:title" content="My experience Page title" key="title" />
            </Head>
            <NavBar />
            <Skill />
            <Footer />
        </div>
    );
}
