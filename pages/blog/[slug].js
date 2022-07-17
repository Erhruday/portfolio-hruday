import data from '../../data';
import Head from 'next/head';

export default function Blog() {
    return <h1>Blog Page</h1>;
}

console.log(data);

// export async function getStaticPaths() {
//     // const slugs =
// }

// export async function getStaticProps({ params }) {
//     const slug = params.slug;

//     return {
//         props: {
//             post: slug
//         }
//     };
// }
