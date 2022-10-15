import { useEffect, useState } from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import BlogPage from '../../components/BlogPage/BlogPage';
import Head from 'next/head';

export default function Blog() {
    const [blogData, setBlogData] = useState([]);
    const [showSkeleton, setShowSkeleton] = useState(false);

    async function getData() {
        const apiUrl = `/api/posts`;
        // setShowSkeleton(true);
        const response = await fetch(apiUrl);
        const res = await response.json();
        // setTimeout(() => {
        setBlogData(res);
        // setShowSkeleton(false);
        // }, 1000);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Blog | Hruday</title>
                <meta property="og:title" content="My blog Page title" key="title" />
            </Head>
            <NavBar />
            <BlogPage blogData={blogData?.results} showSkeleton={showSkeleton} />
            <Footer />
        </div>
    );
}

// export const getStaticProps = async () => {
//     const res = await fetch(`http://localhost:3000/api/posts`);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     };
// };
