import style from './Content.module.css';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';

function Content({ data, showSkeletonForIndividualBlog }) {
    return (
        <div className={style['wrapper']}>
            <Container maxWidth="md" className={style['container']}>
                {showSkeletonForIndividualBlog ? (
                    <>
                        {[0, 1, 3].map((elm, i) => {
                            return (
                                <div key={i}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <Skeleton variant="rounded" height={60} sx={{ bgcolor: 'grey.400' }} />
                                    </div>

                                    <div style={{ marginBottom: '30px' }}>
                                        <Skeleton variant="rounded" height={150} sx={{ bgcolor: 'grey.400' }} />
                                    </div>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <div
                        className={style['content']}
                        dangerouslySetInnerHTML={{
                            __html: data?.map((elem, index) => {
                                return elem.content;
                            })
                        }}
                    />
                )}
            </Container>
        </div>
    );
}

export default Content;
