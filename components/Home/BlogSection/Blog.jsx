import Link from 'next/link';
import style from './Blog.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export default function Blog({ blogData, showSkeletonForBlogSection }) {
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
                            {showSkeletonForBlogSection ? (
                                <>
                                    {[1, 2, 3, 4].map((elm, i) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} key={i}>
                                                <Skeleton variant="rounded" height={250} sx={{ bgcolor: 'grey.800' }} />
                                            </Grid>
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    {blogData?.slice(0, 4).map((elem, index) => {
                                        return (
                                            <Grid item xs={12} sm={12} md={6} key={index}>
                                                <Link href={`/blog/${elem.postId}`}>
                                                    <a>
                                                        <div className={style['container']} style={{ borderTop: '4px solid #efd81d' }}>
                                                            <span className={style['topic']}>{elem.questionType}</span>
                                                            <h3 className={style['sub-heading']}>{elem.tittle}</h3>
                                                            <p className={style['description']}>{elem.metaDescription}</p>
                                                            <p className={style['read-more']}>Read More</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </Grid>
                                        );
                                    })}
                                </>
                            )}
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
                            See&nbsp;More!
                        </a>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
