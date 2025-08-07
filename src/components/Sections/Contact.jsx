import React, { useState, useRef } from 'react';
import './Contact.css';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import emailjs from '@emailjs/browser';
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaGithub, 
    FaLinkedin,
} from 'react-icons/fa'


const Contact = () => {
    const [captchaToken, setCaptchaToken] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const captchaRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!captchaToken) {
            alert('Please complete the CAPTCHA verification.');
            return;
        }

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                'h-captcha-response': captchaToken
            };

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setCaptchaToken('');
            captchaRef.current.resetCaptcha();
        } catch (error) {
            console.error('EmailJS error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCaptchaVerify = (token) => {
        setCaptchaToken(token);
    };

    const handleCaptchaExpire = () => {
        setCaptchaToken('');
    };

    const handleCaptchaError = (err) => {
        console.error('hCaptcha error:', err);
        setCaptchaToken('');
    };

    return (
        <div className="contact-container" id="contact">
            <div className="contact-title">
                Contact me
            </div>

            <div className="contact-contents">
                <div className="left-side">
                    <div className="left-side-contact">
                        Contact Information
                    </div>

                    <div className="contact-information-group">
                        <div className="contact-location">
                            <FaMapMarkerAlt className='contact-icon'/>
                            <div className="contact-detail">
                                Iligan City, Philippines
                            </div>
                        </div>

                        <div className="contact-email">
                            <FaEnvelope className='contact-icon'/>
                            <div className="contact-detail">
                                pinedazeusmorley@gmail.com
                            </div>
                        </div>

                        <div className="contact-number">
                            <FaPhoneAlt className='contact-icon'/>
                            <div className="contact-detail">
                                +63-976-308-8043
                            </div>
                        </div>
                    </div>

                    <div className="left-side-profiles">
                        Profiles
                    </div>

                    <div className="contact-profile-group">
                        <a className="social-icon-profile" 
                            href="https://github.com/ZeusMorley"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub />
                        </a>

                        <a className="social-icon-profile" 
                            href="https://www.linkedin.com/in/zeus-morley-pineda-801007194"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>

                        <a className="social-icon-profile" 
                            href="mailto:pinedazeusmorley@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <form className="right-side" onSubmit={handleSubmit}>
                    <div className="name field">
                        <div className="field-label">
                            Name
                        </div>
                        <input 
                            className="input-field" 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="email field">
                        <div className="field-label">
                            Email
                        </div>
                        <input 
                            className="input-field" 
                            type="email" 
                            name="email"
                            placeholder="Your email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="subject field">
                        <div className="field-label">
                            Subject
                        </div>
                        <input 
                            className="input-field" 
                            type="text" 
                            name="subject"
                            placeholder="Subject of the message" 
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="message field">
                        <div className="field-label">
                            Message
                        </div>
                        <textarea 
                            className="input-field" 
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div className="captcha field">
                        <div className="captcha-container">
                            <HCaptcha
                                ref={captchaRef}
                                sitekey={process.env.NODE_ENV === 'development' ? '10000000-ffff-ffff-ffff-000000000001' : process.env.REACT_APP_HCAPTCHA_SITEKEY}
                                onVerify={handleCaptchaVerify}
                                onExpire={handleCaptchaExpire}
                                onError={handleCaptchaError}
                                theme="dark"
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;