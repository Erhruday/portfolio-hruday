import style from './Blog.module.css';
import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });
import Link from 'next/link';

export default function Blog() {
    return (
        <div className={style['blog-wrapper']}>
            <Container maxWidth="md" className={style['main-container']}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2}>
                        <h2 className={`${style['heading']} stand-out`}>
                            Blog <span className={style['bar']}>&nbsp;</span>
                        </h2>
                    </Grid>

                    <Grid item xs={12} sm={12} md={10}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Link href="/blog">
                                    <a>
                                        <div className={style['container']} style={{ borderTop: '4px solid #efd81d' }}>
                                            <span className={style['topic']}>JAVASCRIPT</span>
                                            <h3 className={style['sub-heading']}>React JS Questions & Answers (Part 1) 2021</h3>
                                            <p className={style['description']}>What is JSX? JSX is a superset of JavaScript that allows...</p>
                                            <p className={style['read-more']}>Read More</p>
                                        </div>
                                    </a>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <Link href="/blog">
                                    <a>
                                        <div className={style['container']} style={{ borderTop: '4px solid #efd81d' }}>
                                            <span className={style['topic']}>JAVASCRIPT</span>
                                            <h3 className={style['sub-heading']}>Javascript Interview Questions & Answers (Part 1)</h3>
                                            <p className={style['description']}>What is JSX? JSX is a superset of JavaScript that allows...</p>
                                            <p className={style['read-more']}>Read More</p>
                                        </div>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Link href="/blog">
                                    <a>
                                        <div className={style['container']} style={{ borderTop: '4px solid rebeccapurple' }}>
                                            <span className={style['topic']}>HTML & CSS</span>
                                            <h3 className={style['sub-heading']}>Ultimate Guide to CSS Grid Layout (Part 1)</h3>
                                            <p className={style['description']}>What is JSX? JSX is a superset of JavaScript that allows...</p>
                                            <p className={style['read-more']}>Read More</p>
                                        </div>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Link href="/blog">
                                    <a>
                                        <div className={style['container']} style={{ borderTop: '4px solid rebeccapurple' }}>
                                            <span className={style['topic']}>HTML & CSS</span>
                                            <h3 className={style['sub-heading']}>How to use System Fonts in CSS to improve your site?</h3>
                                            <p className={style['description']}>What is JSX? JSX is a superset of JavaScript that allows...</p>
                                            <p className={style['read-more']}>Read More</p>
                                        </div>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link href={`/blog`}>
                        <a className="btn" style={{ margin: '40px' }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            See&nbsp;More!..
                        </a>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
