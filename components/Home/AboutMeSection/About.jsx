import style from './About.module.css';
import dynamic from 'next/dynamic';
import { BASE_URL } from '../../../config';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });

export default function About() {
    return (
        <div className={style['about-wrapper']}>
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} md={2} className={style['heading-container']}>
                        <h2 className={`${style['heading']} stand-out`}>
                            My,My&nbsp;Self&nbsp;&&nbsp;i <span className={style['bar']}>&nbsp;</span>
                        </h2>
                    </Grid>
                    <Grid item xs={12} md={6} className={style['description-container']}>
                        <p className={style['description']}>
                            Hello! My name is Hruday and I enjoy creating things that live on the internet. My interest in web development started back in 2012
                            when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &
                            CSS!
                            <br />
                            <br />I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                            <br />
                            <br />
                            Hello! My name is Hruday and I enjoy creating things that live on the internet. My interest in web development started back in 2012
                            when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &
                            CSS!
                        </p>
                    </Grid>
                    <Grid item xs={12} md={4} className={style['img-wrapper']}>
                        <div className={style.container}>
                            <div className={`${style.box1} ${style['stack-top']}`}></div>
                            <div className={`${style.box2}`}>
                                <img src={`/images/img3.jpeg`} alt="my-img" className={style['img']} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
