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
                            My&nbsp;Self&nbsp;&&nbsp;i <span className={style['bar']}>&nbsp;</span>
                        </h2>
                    </Grid>
                    <Grid item xs={12} md={6} className={style['description-container']} sx={{ mb: { xs: 4, sm: 4, md: 0, lg: 0 } }}>
                        <p className={style['description']}>
                            Hello! My name is Hruday and I enjoy creating things that live on the internet. My interest in web development started back in 2018
                            when I decided to learn HTML, CSS and Java Script !
                        </p>
                        <p className={style['description']}>
                            I also recently made a awesome website with Next JS.Interested in the entire frontend spectrum and working on ambitious projects
                            with positive people.
                        </p>
                        <p className={style['description']}>
                            Engineer by profession. A quick learner in adapting technology with ease having good interpersonal skills, well-organised person.
                        </p>
                        <p className={style['description']}>
                            <a href="#contact-form" style={{ color: '#00ffc2' }}>
                                Let&apos;s talk more !
                            </a>
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
