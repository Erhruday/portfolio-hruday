import style from './Hero.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function Hero({ data, showSkeletonForIndividualBlog }) {
    return (
        <div className={style['wrapper']}>
            <Container maxWidth="md" className={style['container']}>
                {showSkeletonForIndividualBlog ? (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ margin: '20px 0', width: '100%' }}>
                            <Skeleton variant="rounded" height={60} sx={{ bgcolor: 'grey.400' }} />
                        </div>
                        <div>
                            <Skeleton variant="rounded" height={60} width={250} sx={{ bgcolor: 'grey.400' }} />
                        </div>
                        <div style={{ width: '100%', marginTop: '50px' }}>
                            <Skeleton variant="rounded" height={60} sx={{ bgcolor: 'grey.400' }} />
                        </div>
                    </div>
                ) : (
                    <>
                        {data?.map((elem, index) => {
                            return (
                                <>
                                    <Grid container className={style['heading-meta-desc-container']}>
                                        <h2 className="stand-out high-light text-center">{elem.tittle}</h2>
                                        {/* <Grid item xs={2}></Grid> */}
                                        <div className={style['meta-description-container']}>
                                            <p className={style['meta-description']}>{elem.metaDescription}</p>
                                        </div>
                                    </Grid>
                                </>
                            );
                        })}
                    </>
                )}
            </Container>
        </div>
    );
}

export default Hero;
