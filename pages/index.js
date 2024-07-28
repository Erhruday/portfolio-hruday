import NavBar from "../components/Common/NavBar/NavBar";
import About from "../components/Home/AboutMeSection/About";
import Blog from "../components/Home/BlogSection/Blog";
import Contact from "../components/Home/ContactSection/Contact";
import Footer from "../components/Common/Footer/Footer";
import Hero from "../components/Home/HeroSection/Hero";
import Portfolio from "../components/Home/PortfolioSection/Portfolio";
import Skill from "../components/Home/SkillSection/Skill";
// import styles from '../styles/Home.module.css';
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  //{ data }

  const [blogData, setBlogData] = useState([]);
  const [showSkeletonForBlogSection, setShowSkeletonForBlogSection] =
    useState(false);

  async function getData() {
    const apiUrl = `/api/posts`;
    setShowSkeletonForBlogSection(true);
    const response = await fetch(apiUrl);
    const res = await response.json();
    setBlogData(res);
    setShowSkeletonForBlogSection(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Hruday</title>
        <meta property="og:title" content="My Home Page title" key="title" />
      </Head>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Skill />
      {
        blogData.length > 0 && 
      <Blog
        blogData={blogData?.results}
        showSkeletonForBlogSection={showSkeletonForBlogSection}
      />
      }
      {/* blogData={data?.results}  */}
      <Contact />
      <Footer />
    </div>
  );
}

// export const getStaticProps = async () => {
//     const res = await fetch(`/api/posts`);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     };
// };
