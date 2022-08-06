import { useState } from 'react';
import style from './NavBar.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Git from '../SVGS/SocialMediaIcons/Git';
import Instagram from '../SVGS/SocialMediaIcons/Instagram';
import LinkedIn from '../SVGS/SocialMediaIcons/LinkedIn';
import Twitter from '../SVGS/SocialMediaIcons/Twitter';
import Codepen from '../SVGS/SocialMediaIcons/Codepen';
import LargeLogo from '../SVGS/Logo/LargeLogo';
const Box = dynamic(() => import('@mui/material/Box/Box'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });

export default function NavBar() {
    const [navbarExpandIsToggle, setNavbarExpandIsToggle] = useState(false);
    return (
        <div className={style['navbar-wrapper']}>
            <Grid container sx={{ pr: 5, pl: { xs: 2, sm: 5 }, mt: 3 }}>
                <Grid item xs={1} sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                    {navbarExpandIsToggle ? (
                        <img src={`/images/cross-line.svg`} alt="cross" className={style['navbar-three-line']} onClick={() => setNavbarExpandIsToggle(false)} />
                    ) : (
                        <img src={`/images/three-line.svg`} alt="logo" className={style['navbar-three-line']} onClick={() => setNavbarExpandIsToggle(true)} />
                    )}
                </Grid>
                <Grid item xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Link href={`/`}>
                        <a>
                            <LargeLogo />
                        </a>
                    </Link>
                </Grid>
                <Grid item xs={7} sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                    <ul style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <li className={style['nav-li']}>
                            <Link href={`/about`}>
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={style['nav-li']}>
                            <Link href={`/experience`}>
                                <a>Experience</a>
                            </Link>
                        </li>
                        <li className={style['nav-li']}>
                            <Link href={`/work`}>
                                <a>Work</a>
                            </Link>
                        </li>
                        <li className={style['nav-li']}>
                            <Link href={`/contact`}>
                                <a>Conatct</a>
                            </Link>
                        </li>
                        <li className={style['nav-li']}>
                            <Link href={`/blog`}>
                                <a>Blog</a>
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href={`/images/resume-hruday.pdf`} download="resume-hruday">
                        <button className={style['btn-resume']}>Resume</button>
                    </a>
                </Grid>
            </Grid>
            <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
                {navbarExpandIsToggle && (
                    <div className={style['nav-menu-smaller-screen']}>
                        <ul>
                            <li className={style['navli-smaller-screen']}>
                                <Link href={`/about`}>
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className={style['navli-smaller-screen']}>
                                <Link href={`/experience`}>
                                    <a>Experience</a>
                                </Link>
                            </li>
                            <li className={style['navli-smaller-screen']}>
                                <Link href={`/work`}>
                                    <a>Work</a>
                                </Link>
                            </li>
                            <li className={style['navli-smaller-screen']}>
                                <Link href={`/contact`}>
                                    <a>Conatct</a>
                                </Link>
                            </li>
                            <li className={style['navli-smaller-screen']}>
                                <Link href={`/blog`}>
                                    <a>Blog</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <div className={style['socialmeadia-icons-container']}>
                    <a href="https://github.com/Erhruday/Hello-World" target={'_blank'} rel="noreferrer" className={style.a}>
                        {/* <img src={`${BASE_URL}/images/github.svg`} alt="git-logo" className={style['logo']} /> */}
                        <Git dynamicClass={`${style['logo']}`} />
                    </a>
                    <a href="https://www.instagram.com/h_r_u_d_a_y_.r_a_n_j_a_n/" target={'_blank'} rel="noreferrer" className={style.a}>
                        <Instagram dynamicClass={`${style['logo']}`} />
                    </a>
                    <a href="https://www.linkedin.com/in/hrudayranjan" target={'_blank'} rel="noreferrer" className={style.a}>
                        <LinkedIn dynamicClass={`${style['logo']}`} />
                    </a>
                    <a href="https://twitter.com/Er_hruday" target={'_blank'} rel="noreferrer" className={style.a}>
                        <Twitter dynamicClass={`${style['logo']}`} />
                    </a>
                    <a href="https://codepen.io/hruday-ranjan/pens/public" target={'_blank'} rel="noreferrer" className={style.a}>
                        <Codepen dynamicClass={`${style['logo']}`} />
                    </a>
                </div>
                <div className={style['left-bar']}></div>
                <p className={style.email}>
                    <Link href="mailto: hrudayranjan8@gmail.com" target={'_blank'} rel="noreferrer">
                        <a>hrudayranajan8@gmail.com</a>
                    </Link>
                </p>
                <div className={style['right-bar']}></div>
            </Box>
        </div>
    );
}
