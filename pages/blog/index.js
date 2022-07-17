import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import BlogPage from '../../components/BlogPage/BlogPage';
import Head from 'next/head';

// import { data } from '../../data';

export default function experience() {
    return (
        <div>
            <Head>
                <title>blog</title>
                <meta property="og:title" content="My blog Page title" key="title" />
            </Head>
            <NavBar />
            <BlogPage />
            <Footer />
        </div>
    );
}

// export async function getStaticPaths() {}
