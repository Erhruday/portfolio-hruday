import style from './About.module.css';
import { BASE_URL } from '../../../config/config';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
                        Hello! My name is Hruday. I have a passion for creating dynamic and engaging web applications. My journey into web development began in 2018 when I started learning HTML, CSS, and JavaScript.
                        </p>
                        <p className={style['description']}>
                        I have a keen interest in the entire frontend spectrum and thrive on working on ambitious projects with positive individuals.
                        </p>
                        <p className={style['description']}>
                        Professionally, I am an engineer who quickly adapts to new technologies and strong interpersonal skills. I am well-organized and dedicated to continuous learning and professional growth.
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
