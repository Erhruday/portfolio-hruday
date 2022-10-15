import style from './BlogPage.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';

export default function BlogPage({ blogData, showSkeleton }) {
    return (
        <div className={style['blog-wrapper']}>
            <span className={style.bg}>Blog</span>
            <Container maxWidth="md" className={style['main-container']}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2}>
                        <h2 className={`${style['heading']} stand-out`}>
                            Blog <span className={style['bar']}>&nbsp;</span>
                        </h2>
                    </Grid>

                    <Grid item xs={12} sm={12} md={10}>
                        <Grid container spacing={6}>
                            {blogData?.map((elem, index) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} key={index}>
                                        {showSkeleton ? (
                                            <Skeleton variant="rounded" width={330} height={200} />
                                        ) : (
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
                                        )}
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
