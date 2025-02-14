'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { Home } from 'lucide-react'; // Icon for the floating button

export default function Contact() {
    const formRef = useRef();
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Configure EmailJS
            await emailjs.sendForm(
                'service_lleltyl', // Replace with your EmailJS Service ID
                'template_nf5urmd', // Replace with your EmailJS Template ID
                formRef.current,
                'mKnp7mDaG9uGhSWjD' // Replace with your EmailJS Public Key
            );

            setIsSent(true);
        } catch (error) {
            console.error('Error sending form:', error);
        }
    };

    return (
        <div className="relative min-h-screen bg-black text-gray-300 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto max-w-4xl bg-gray-800 p-8 rounded-lg shadow-2xl"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-center text-red-500 mb-8">
                    Contact Us
                </h1>

                {!isSent ? (
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                placeholder="Enter your name"
                                className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Enter your message"
                                className="w-full border border-gray-600 rounded-lg p-3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition"
                        >
                            Send
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-400">
                            Message Sent Successfully!
                        </h2>
                        <p className="text-gray-400 mt-4">
                            Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                    </div>
                )}
            </motion.div>

            {/* Floating Home Button */}
            <motion.div
                className="fixed bottom-8 right-8 bg-red-500 text-white rounded-full shadow-lg p-4 cursor-pointer hover:bg-red-600 transition"
                whileHover={{ scale: 1.1 }}
            >
                <Link href="/" aria-label="Go back home">
                    <Home className="w-6 h-6" />
                </Link>
            </motion.div>
        </div>
    );
}
