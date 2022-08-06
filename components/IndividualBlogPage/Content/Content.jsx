import style from './Content.module.css';
import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });
import Link from 'next/link';

import React from 'react';

function Content({ data }) {
    return (
        <div className={style['wrapper']}>
            <Container maxWidth="md" className={style['container']}>
                <div
                    className={style['content']}
                    dangerouslySetInnerHTML={{
                        __html: data?.map((elem, index) => {
                            return elem.content;
                        })
                    }}
                />
            </Container>
        </div>
    );
}

export default Content;
