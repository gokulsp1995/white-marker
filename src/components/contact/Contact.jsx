import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Button } from '../../components';

const Contact = () => {
    return (
        <section className='contact' id='contact' data-aos='zoom-out'>
            <div className='contact__grid'>
                <div className='contact__col'>
                    <Link to='#' className='contact__link'>WHITEMARKER, Kudu Building, Main Road, Mannarkad, Palakad, Kerala, Mannarkkad, India, Kerala</Link>
                    <Link to='#' className='contact__link'>+91 964 50 13 281</Link>
                    <Link to='#' className='contact__link large'>whitemakers@gmail.com</Link>
                    <div className='contact__map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.596048400457!2d76.46169657539245!3d10.993832289168491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87f1b5b48cf8d%3A0xc921cdc8583f1662!2sWhiteMarker%20Skillshare!5e0!3m2!1sen!2sin!4v1707757535144!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='contact__col'>
                    <Form className='contact__form'>
                        <Input
                            type='text'
                            id='name'
                            name='name'
                            label='What is Your Name?'
                        />
                        <Input
                            type='tel'
                            id='phone'
                            name='phone'
                            label='Your Phone Number'
                        />
                        <Input
                            type='email'
                            id='email'
                            name='email'
                            label='Your Email'
                        />
                        <TextArea
                            id='message'
                            name='message'
                            label='Your Message'
                        />
                        <Button type='submit' className='form__submit'>Send Message</Button>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Contact;