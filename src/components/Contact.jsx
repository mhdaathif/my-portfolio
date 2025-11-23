import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_xz13mid",
            "template_le3bi7o",
            form.current,
            "rZPqtvsoqAQchck6p"
        ).then(
            () => {
                alert("Message sent Successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message, please try again.");
            }
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple'> Touch</span>
                </h2>
                <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

                {/* Form and Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact From */}
                    <div>
                        <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className='block text-gray-400 mb-2'>Your Name</label>
                                <input
                                    name='full_name'
                                    required
                                    placeholder='Your Name'
                                    type="text"
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className='block text-gray-400 mb-2'>Email Address</label>
                                <input
                                    name='user_email'
                                    required
                                    placeholder='Email Address'
                                    type="email"
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>

                            {/* mobile */}
                            <div>
                                <label htmlFor="mobile" className='block text-gray-400 mb-2'>Mobile Number</label>
                                <input
                                    name='user_mobile'
                                    required
                                    placeholder='Mobile Number'
                                    type="tel"
                                    className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className='block text-gray-400 mb-2'>Your Message</label>
                                <textarea
                                    name='message'
                                    required
                                    placeholder='Your Message'
                                    type="text"
                                    className='w-full bg-dark-300 border h-40 border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>

                            <button
                                type="submit"
                                className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8'>
                        {/* Location */}
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>Location</h3>
                                <p className='text-gray-400'>71, Thakkiya Road, Mawanella</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>Email</h3>
                                <a href="mailto:aathif0714@gmail.com" className='text-gray-400'>aathif0714@gmail.com</a>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>Phone</h3>
                                <a href='tel:+94779782443' className='text-gray-400'>+94 77 978 2443</a>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="flex items-start">
                            <div className="text-purple text-2xl mr-4">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>Whatsapp</h3>
                                <a href='https://wa.me/94779782443' className='text-gray-400'>+94 77 978 2443</a>
                            </div>
                        </div>

                        {/* Follow Me  */}
                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                {/* Github */}
                                <a
                                    href="https://github.com/mhdaathif"
                                    className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple 
                                hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                {/* Linkedin */}
                                <a
                                    href="https://www.linkedin.com/in/mhd-aathif/"
                                    className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-600
                                hover:bg-blue-600 hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://web.facebook.com/mhdaathif0714"
                                    className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 
                                hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaFacebook />
                                </a>

                                <a
                                    href="https://www.instagram.com/mhd_aathif_/"
                                    className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink 
                                hover:bg-pink hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Contact