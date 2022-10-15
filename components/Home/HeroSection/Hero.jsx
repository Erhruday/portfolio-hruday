import style from './Hero.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Hero() {
    return (
        <div className={style['hero-wrapper']}>
            <Container maxWidth="md" className={style['hero-container']}>
                <Grid container>
                    <Grid item xs={12}>
                        <div>
                            <h1 className={style['hero-heading']}>H</h1>
                            <h1 className={style['hero-heading']}>i</h1>
                            <h1 className={style['hero-heading']}>,</h1>
                            <br />
                            <h1 className={style['hero-heading']}>I</h1>
                            <h1 className={style['hero-heading']}>’</h1>
                            <h1 className={style['hero-heading']}>m</h1>
                            <h1 className={`${style['hero-heading']} ${style['highlight']} ${style['shadaw']}`}>&nbsp;H</h1>
                            <h1 className={style['hero-heading']}>r</h1>
                            <h1 className={style['hero-heading']}>u</h1>
                            <h1 className={style['hero-heading']}>d</h1>
                            <h1 className={style['hero-heading']}>a</h1>
                            <h1 className={style['hero-heading']}>y</h1>
                            <h1 className={style['hero-heading']}>,</h1>
                            <br />
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>w</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>e</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>b</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>&nbsp;d</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>e</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>v</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>e</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>l</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>o</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>p</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>e</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>r</h1>
                            <h1 className={`${style['hero-heading']} ${style['heading2']}`}>.</h1>
                        </div>
                        <p className={style['hero-sub-heading']}>FRONTEND ENTHUSIAST</p>
                        <a
                            href="tel:9078796479"
                            className="btn"
                            onClick={() => {
                                navigator.clipboard.writeText('9078796479');
                            }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Contact&nbsp;me!
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
