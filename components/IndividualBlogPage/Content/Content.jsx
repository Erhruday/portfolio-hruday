import style from './Content.module.css';
import Container from '@mui/material/Container';

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
