import style from './Hero.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Hero({ data }) {
    return (
        <div className={style['wrapper']}>
            <Container maxWidth="md" className={style['container']}>
                {data?.map((elem, index) => {
                    return (
                        <>
                            <h2 className="stand-out high-light text-center">{elem.tittle}</h2>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8}>
                                    <p className={style['meta-description']}>{elem.metaDescription}</p>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </>
                    );
                })}
            </Container>
        </div>
    );
}

export default Hero;
