'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";

export default function Home() {
    const [showTransform, setShowTransform] = useState(true);
    const [showImage, setShowImage] = useState(true);

    // Hook to detect when the Transform section is in view
    const { ref: transformRef, inView: transformInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    // Hook to detect when the Enhance section is in view
    const { ref: enhanceRef, inView: enhanceInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    React.useEffect(() => {
        if (transformInView) {
            setTimeout(() => setShowTransform(false), 2000); // Keep "Transform" for 2 seconds
        }
    }, [transformInView]);

    React.useEffect(() => {
        if (enhanceInView) {
            setTimeout(() => setShowImage(false), 2000); // Keep "image" for 2 seconds
        }
    }, [enhanceInView]);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-screen object-cover z-10"
                >
                    <source src="/videos/background4.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <Hero />
            </div>

            {/* Section with Animated Text for Transform */}
            <div ref={transformRef} className="relative h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/videos/background5.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <AnimatePresence mode="wait">
                        {showTransform ? (
                            <motion.div
                                key="transform"
                                initial={{ opacity: 0, scale: 1.4 }}
                                animate={{ opacity: 1, scale: 1.4 }}
                                exit={{ opacity: 0, scale: 1.4 }}
                                transition={{
                                    duration: 0.1, // Fast exit
                                    delay: 2, // Delay before exit
                                }}
                                className="absolute"
                            >
                                <h1 className="text-black text-6xl font-bold">Transform</h1>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="full-phrase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute"
                            >
                                <h1 className="text-black text-4xl font-bold">
                                    Transform your product
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Section with Animated Text for Enhance */}
            <div ref={enhanceRef} className="relative h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/videos/background3.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <AnimatePresence mode="wait">
                        {showImage ? (
                            <motion.div
                                key="image"
                                initial={{ opacity: 0, scale: 1.4 }}
                                animate={{ opacity: 1, scale: 1.4 }}
                                exit={{ opacity: 0, scale: 1.4 }}
                                transition={{
                                    duration: 0.1, // Fast exit
                                    delay: 2, // Delay before exit
                                }}
                                className="absolute"
                            >
                                <h1 className="text-white text-6xl font-bold">Image</h1>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="full-phrase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute"
                            >
                                <h1 className="text-white text-4xl font-bold">
                                    Enhance your image
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Red Section with Text */}
            <div className="relative bg-red-600 py-10 px-6 text-left">
                <div className="container mx-4 h-80">
                    <h2 className="text-white text-5xl font-bold leading-none">
                        Lorem Ipsum amb<br />
                        la rabla al consequat
                    </h2>
                    <p className="text-black text-xl font-black mt-4">
                        Lorem ipsum amb el rabla magnis<br />
                        dis parturient montes, nascetur<br />
                        ridiculus mus donec quam felis.
                    </p>
                </div>
            </div>
            <div className="relative h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/videos/background6.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>

            {/* Diagonal Split Background with About Us */}
            <div className="relative min-h-screen">
                {/* About Us Content */}
                <div className="relative z-10 container mx-auto py-20 px-6 text-center">
                    <h2 className="text-5xl font-extrabold text-white">
                        About Us
                    </h2>
                    <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>

                    {/* About Us Slider */}
                    <div className="relative min-h-screen"></div>
                </div>
            </div>
        </div>
    );
}