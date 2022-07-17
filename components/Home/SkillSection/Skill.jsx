import style from './Skill.module.css';
import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });
const LinearProgress = dynamic(() => import('@mui/material/LinearProgress/LinearProgress'), { ssr: false });

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
                    Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and
                    collaborated with talented people to create web products for both business and consumer use.
                </p>
                <p className={style['description']}>
                    I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is
                    front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive
                    layouts.
                </p>
                <p className={style['description']}>
                    Visit my{' '}
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
                        <a href="tel:9078796479">Contact</a>
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
                        <a href="https://www.synergiesoftware.com/" target={'_blank'} rel="noreferrer">
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ p: { xs: 5, sm: 5, md: 0 } }}>
                        <a href="https://tabgraf.com/" target={'_blank'} rel="noreferrer">
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
