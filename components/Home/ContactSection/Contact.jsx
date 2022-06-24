import style from './Contact.module.css';
import dynamic from 'next/dynamic';
const Container = dynamic(() => import('@mui/material/Container/Container'), { ssr: false });
const Grid = dynamic(() => import('@mui/material/Grid/Grid'), { ssr: false });

export default function Contact() {
    return (
        <div className={style['contact-wrapper']}>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} sx={{ pr: { md: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 className={`${style['contact-heading']} stand-out`}>Get In Touch</h2>
                        <p className={style.description}>
                            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to
                            say hi, I’ll try my best to get back to you!
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ mt: { xs: 2 } }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <input type="text" className={style.inputbox} placeholder="Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <input type="text" className={style.inputbox} placeholder="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <input type="text" className={style.inputbox} placeholder="Subject" />
                            </Grid>
                            <Grid item xs={12}>
                                <textarea type="text" rows="5" className={style.inputbox} placeholder="Message..." />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <a href="#" className="btn" style={{ float: 'right', margin: '40px 0px' }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Send&nbsp;Message!
                </a>
            </Container>
        </div>
    );
}
