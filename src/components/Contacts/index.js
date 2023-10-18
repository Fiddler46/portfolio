import './index.scss';
import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_njp0dxg', 'template_jis8shf', refForm.current, 'o5cr4XTLLbdiKW_Mr')
        .then((result) => {
            console.log(result.text);
            alert('Message sent!');
            window.location.reload(false);
        }, (error) => {
            alert('Sorry, your message was not sent. Please try again');
            console.log(error.text);
        });
    }
    return (
        <>
            <Sidebar />
            <div className='container contact-page' >

                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                        If you're interested in working together, please feel free to reach out. We can bond over a nice cup of coffee
                        and maybe discuss D&D, or just have a chat!  ☕
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send' />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Contact