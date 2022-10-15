import style from './Portfolio.module.css';
import Link from 'next/link';
import Project2 from '../../Common/SVGS/Projects/Project2';
import Project1 from '../../Common/SVGS/Projects/Project1';
import Project3 from '../../Common/SVGS/Projects/Project3';
// import { BASE_URL } from '../../../config';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Portfolio() {
    return (
        <div className={style['portfolio-wrapper']}>
            <span className={style.bg}>Work</span>
            <Container maxWidth="md">
                <div style={{ width: '80%' }}>
                    <h2 className={`${style['']} stand-out`}>
                        My&nbsp;Portfolio <span className={style['bar']}></span>
                    </h2>
                </div>
                <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Project1 dynamicClass={style['project-img']} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} className={style['portfolio-right-container']}>
                        <a href="https://streamlab.vercel.app" target={'_blank'} rel="noreferrer">
                            <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                            <h4 className={style['portfolio-project-name']}>Streamlab</h4>
                            <p>
                                Streamlab project is a web based application. It offers a library of trendy films and television series from networks. Users can
                                check the latest TV series,films, web series.
                            </p>
                        </a>
                    </Grid>
                    {/* left side content right side image */}
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, mt: 4 }}>
                        <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Project2 dynamicClass={style['project-img']} />
                        </Grid>
                    </Box>
                    <Grid item xs={12} sm={12} md={7} className={style['portfolio-left-container']}>
                        <a href="https://weather-forecast-today-in-your-location.netlify.app/" target={'_blank'} rel="noreferrer">
                            <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                            <h4 className={style['portfolio-project-name']}>Weather Forecast App</h4>
                            <p>
                                Weather project application is a web based application through which you will able to get all the details related to weather
                                forecasting of any locations. Details such as temperature, direction of wind, rains, humidity etc.
                            </p>
                        </a>
                    </Grid>
                    {/* <Box sx={{  }}> */}
                    <Grid item xs={12} sm={12} md={5} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Project2 dynamicClass={style['project-img']} />
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Project3 dynamicClass={style['project-img']} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} className={style['portfolio-right-container']} sx={{ mb: 2 }}>
                            <a href="https://erhruday.github.io/gym_website" target={'_blank'} rel="noreferrer">
                                <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                                <h4 className={style['portfolio-project-name']}>Gym Website</h4>
                                <p>
                                    If you’re a gym owner, you need a great website. First and foremost, it helps people to find you. Considering that all your
                                    competitors already have a website, you’re behind the curve if you don’t have one. It’s not enough to just have a website;
                                    it needs to be a great website to establish your business as an authority, help manage your members, and so much more.
                                </p>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Link href={`/work`}>
                    <a className={`${style['porfolio-btn']} btn`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        See&nbsp;More!
                    </a>
                </Link>
            </Container>
        </div>
    );
}
