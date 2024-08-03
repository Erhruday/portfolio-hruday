import Container from '@mui/material/Container';

function ContactHero() {
    return (
        <div style={{ marginBottom: '100px' }}>
            <Container maxWidth="md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239487.1321267159!2d85.68036496061782!3d20.300828422913696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1659163656105!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: '0', borderRadius: '5px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Container>
        </div>
    );
}

export default ContactHero;
