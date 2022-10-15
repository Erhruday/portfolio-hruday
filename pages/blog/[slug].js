// import data from '../../data';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from '../../components/Common/NavBar/NavBar';
import Footer from '../../components/Common/Footer/Footer';
import { useEffect, useState } from 'react';
import Hero from '../../components/IndividualBlogPage/Hero/Hero';
import Content from '../../components/IndividualBlogPage/Content/Content';

export default function Blog() {
    const [blogData, setBlogData] = useState([]);

    const router = useRouter();
    const slug = router.query.slug;

    useEffect(() => {
        async function getData() {
            const apiUrl = `/api/posts`;
            const postData = {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    slug: slug
                })
            };
            const response = await fetch(apiUrl, postData);
            const res = await response.json();
            setBlogData(res);
        }

        getData();
    }, [router.query.slug, router.isReady]);

    return (
        <>
            <Head>
                <title>tittle | Hruday</title>
                <meta property="og:title" content="My blog Page title" key="title" />
            </Head>
            <NavBar />
            <Hero data={blogData?.results} />
            <Content data={blogData?.results} />

            <Footer />
        </>
    );
}
