import style from './Portfolio.module.css';
import dynamic from 'next/dynamic';
import { BASE_URL } from '../../../config';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });
const Box = dynamic(() => import('@mui/material/Box/Box'), { ssr: false });

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
                        <img src={`/images/project1.svg`} alt="project1" className={style['project-img']} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} className={style['portfolio-right-container']}>
                        <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                        <h4 className={style['portfolio-project-name']}>Halcyon Theme</h4>
                        <p>
                            More than a decade of experience building complex interfaces means that I&apos;m happy to deliver anything from single-page apps to
                            scaleable design systems. I can help you identify the most appropriate technology for your project and, whilst I love a good
                            framework, you can be sure that I will never use tech for tech&apos;s sake.
                        </p>
                    </Grid>
                    {/* left side content right side image */}
                    <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, mt: 4 }}>
                        <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={`/images/project2.svg`} alt="project2" className={style['project-img']} />
                        </Grid>
                    </Box>
                    <Grid item xs={12} sm={12} md={7} className={style['portfolio-left-container']}>
                        <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                        <h4 className={style['portfolio-project-name']}>Weather Forecast App</h4>
                        <p>
                            Weather project application is a web based application through which you will able to get all the details related to weather
                            forecasting of any locations. Details such as temperature, direction of wind, rains, humidity etc.
                        </p>
                    </Grid>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <img src={`/images/project2.svg`} alt="project2" className={style['project-img']} />
                        </Grid>
                    </Box>

                    <Grid item xs={12} sm={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={`/images/project3.svg`} alt="project3" className={style['project-img']} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} className={style['portfolio-right-container']} sx={{ mb: 2 }}>
                        <a href="https://erhruday.github.io/gym_website" target={'_blank'} rel="noreferrer">
                            <span className={style['portfolio-feature-project']}>Featured&nbsp;Project</span>
                            <h4 className={style['portfolio-project-name']}>Gym Website</h4>
                            <p>
                                If you’re a gym owner, you need a great website. First and foremost, it helps people to find you. Considering that all your
                                competitors already have a website, you’re behind the curve if you don’t have one. It’s not enough to just have a website; it
                                needs to be a great website to establish your business as an authority, help manage your members, and so much more.
                            </p>
                        </a>
                    </Grid>
                </Grid>
                <a href="#" className={`${style['porfolio-btn']} btn`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    See&nbsp;More!
                </a>
            </Container>
        </div>
    );
}
