import style from './Hero.module.css';
import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });
import Link from 'next/link';

import React from 'react';

function Hero({ data }) {
    //{ data }
    // console.log(data, '%%%%');
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
