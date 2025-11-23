import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About
                    <span className='text-purple'> Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

                {/* Image + My Journey */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.profileImg}
                            alt="Profile Image"
                        />
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>
                                My journey in technology began with a deep curiosity for how digital systems work and a passion for 
                                creating meaningful solutions. What started with simple HTML and CSS pages gradually evolved into 
                                building full-stack applications using Java, Spring Boot, React, and modern development practices. 
                                Over the years, I’ve grown from experimenting with small projects to engineering production-level 
                                software, managing freelance projects, and contributing to real-world business systems. Every 
                                challenge strengthened my problem-solving skills and shaped me into a versatile developer who 
                                loves turning ideas into high-impact digital experiences.
                            </p>
                            <p className='text-gray-300 mb-12'>
                                Beyond coding, I constantly explore emerging technologies, experiment with new tools, and 
                                contribute to the tech community through knowledge sharing and collaboration. Whether working 
                                on Java-based backend systems, designing user-friendly web platforms, or optimizing business processes, 
                                I strive to learn continuously and push the limits of what I can build. Technology is more than a career 
                                for me—it’s a journey of creativity, innovation, and lifelong growth.
                            </p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div
                                            key={index}
                                            className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                                        >
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </motion.div>
    )
}

export default About