import style from './Skill.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';

export default function Skill() {
    return (
        <div className={style['skill-wrapper']}>
            <Container maxWidth="md">
                <div style={{ width: '80%' }}>
                    <h2 className={`${style['']} stand-out`}>
                        Skills&nbsp;&&nbsp;Experience&nbsp;<span className={style['bar']}></span>
                    </h2>
                </div>
                <p className={style['description']}>
                    Since beginning my journey as a developer nearly 1.5 years ago, I’ve done remote work and collaborated with talented people to create web
                    products for both business and consumer use.
                </p>
                <p className={style['description']}>
                    I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is
                    front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations.
                </p>
                <p className={style['description']}>
                    Visit my&nbsp;
                    <span className={style['highlight-description']}>
                        <a href="https://www.linkedin.com/in/hrudayranjan" target={'_blank'} rel="noreferrer">
                            LinkedIn&nbsp;
                        </a>
                    </span>
                    profile for more details or just&nbsp;
                    <span
                        className={style['highlight-description']}
                        onClick={() => {
                            navigator.clipboard.writeText('9078796479');
                        }}
                    >
                        <Link href="tel:9078796479">Contact</Link>
                    </span>
                    &nbsp;me.
                </p>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    {skills.map((elem, index) => {
                        return (
                            <Grid item xs={6} key={index} className={style['skill-container']}>
                                <div>
                                    <span className={style.skills}>{elem.skillName}</span> <span className={style['percentage']}>{elem.value}%</span>
                                    <LinearProgress color={elem.color} variant="determinate" value={elem.value} />
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>

                <Grid container spacing={6} sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ p: { xs: 5, sm: 5, md: 0 } }}>
                        <Link href="https://www.synergiesoftware.com/" passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className={style.container}>
                                    <div className={`${style.box1} ${style['stack-top']}`}></div>
                                    <div className={`${style.box2}`}>
                                        <h6 className={style['desingnation']}>Frontend Developer</h6>
                                        <p className={style['company-name']}>Synergy Software</p>

                                        <span className={style['duration']}>2021-2022</span>
                                        <p className={style['description']}>The main area of my expertise is front-end development.</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ p: { xs: 5, sm: 5, md: 0 } }}>
                        <Link href="https://tabgraf.com/" passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className={style.container}>
                                    <div className={`${style.box1} ${style['stack-top']}`}></div>
                                    <div className={`${style.box2}`}>
                                        <h6 className={style['desingnation']}>FullStack Developer</h6>
                                        <p className={style['company-name']}>Tabgraf Technology LLP</p>

                                        <span className={style['duration']}>2022-Present</span>
                                        <p className={style['description']}>The main area of my expertise is front-end back-end development.</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

const skills = [
    { skillName: 'HTML', value: 95, color: 'secondary' },
    { skillName: 'CSS', value: 90, color: 'info' },
    { skillName: 'JavaScript', value: 75, color: 'error' },
    { skillName: 'React JS', value: 70, color: 'success' },
    { skillName: 'Node JS', value: 60, color: 'warning' },
    { skillName: 'Express JS', value: 60, color: 'info' },
    { skillName: 'Next JS', value: 70, color: 'secondary' },
    { skillName: 'GIT', value: 80, color: 'success' }
];
