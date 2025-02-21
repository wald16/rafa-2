'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
    const [showTransform, setShowTransform] = useState(true);
    const [showImage, setShowImage] = useState(true);

    const { ref: transformRef, inView: transformInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const { ref: enhanceRef, inView: enhanceInView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    React.useEffect(() => {
        if (transformInView) {
            setTimeout(() => setShowTransform(false), 2000);
        }
    }, [transformInView]);

    React.useEffect(() => {
        if (enhanceInView) {
            setTimeout(() => setShowImage(false), 2000);
        }
    }, [enhanceInView]);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-full md:h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source
                        src="/videos/mobile4.mp4"
                        media="(max-width: 768px)" /* Video para dispositivos móviles */
                        type="video/mp4"
                    />
                    <source
                        src="/videos/background4.mp4" /* Video para pantallas más grandes */
                        media="(min-width: 769px)"
                        type="video/mp4"
                    />
                    Tu navegador no soporta videos.
                </video>
                <Hero />
            </div>


            {/* Transform Section */}
            <div ref={transformRef} className="relative h-[100vh]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-screen h-full object-cover scale-y-110 -z-10"
                >
                    <source src="/videos/background5.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="relative z-10 flex items-center justify-center h-screen md:h-screen">
                    <AnimatePresence mode="wait">
                        {showTransform ? (
                            <motion.div
                                key="transform"
                                initial={{ opacity: 0, scale: 1.4 }}
                                animate={{ opacity: 1, scale: 1.4 }}
                                exit={{ opacity: 0, scale: 1.4 }}
                                transition={{
                                    duration: 0.1,
                                    delay: 2,
                                }}
                                className="absolute"
                            >
                                <h1 className="text-black text-4xl md:text-6xl font-bold">Transform</h1>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="full-phrase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute"
                            >
                                <h1 className="text-black text-2xl md:text-4xl font-bold text-center">
                                    Transform your product
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Enhance Section */}
            <div ref={enhanceRef} className="relative h-[50vh] md:h-screen">
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
                                    duration: 0.1,
                                    delay: 2,
                                }}
                                className="absolute"
                            >
                                <h1 className="text-white text-4xl md:text-6xl font-bold">Image</h1>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="full-phrase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute"
                            >
                                <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
                                    Enhance your image
                                </h1>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Red Section */}
            <div className="relative bg-[rgb(255,0,0)] py-40 px-6 text-left">
                <div className="container mx-auto">
                    <h2 className="text-white text-6xl md:text-5xl font-bold leading-none">
                        Lorem Ipsum amb<br />
                        la rabla al consequat
                    </h2>
                    <p className="text-black text-base md:text-xl font-black mt-4">
                        Lorem ipsum amb el rabla magnis<br />
                        dis parturient montes, nascetur<br />
                        ridiculus mus donec quam felis.
                    </p>
                </div>
            </div>

            {/* Video Section */}
            <div className="relative h-[60vh] md:h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover scale-y-110 -z-10"
                >
                    <source src="/videos/background6.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>


            {/* We Do Section */}
            <div className="bg-black py-20 px-10 md:px-40 text-left">
                <h2 className="text-[rgb(255,0,0)] text-7xl md:text-[9rem] font-extrabold tracking-tight">We do</h2>
                <p className="text-[rgb(255,0,0)] text-lg md:text-3xl font-medium leading-relaxed mr-[200px]">
                    Lorem ipsum amb al rabia magnis dis parturient montes, nascetur ridiculus mus donec qu felis donec pede justo,
                    fringilla vel, aliquet nec, vulputate. Eget, arcu. In enim justo, rhonc Aenean eleifend tellus enean leo ligula,
                    porttitor eu consequat vitae eleifend ac amb la rabia al consequats.
                </p>
            </div>



            {/* Team Section */}
            <div id="us-section" className="us-section bg-black py-10 px-40">
                <h2 className="text-7xl md:text-[9rem] text-[rgb(255,0,0)] font-extrabold">Us</h2>
            </div>
            <div id="us-section" className="us-section bg-black py-10 px-60">
                <div className="team-container grid grid-cols-2 md:grid-cols-4 gap-20">
                    {[
                        { id: 1, name: "Cristian Pastrian", desc: "Experto en desarrollo web y UI/UX." },
                        { id: 2, name: "Paulo Lorems", desc: "Especialista en branding y diseño gráfico." },
                        { id: 3, name: "Rafael Pastrian", desc: "Desarrollador Full Stack con enfoque en React." },
                        { id: 4, name: "Juana Pérez", desc: "Diseñadora de experiencia de usuario." },
                        { id: 5, name: "Ana González", desc: "Fotógrafa y creadora de contenido visual." },
                        { id: 6, name: "Miguel Torres", desc: "Desarrollador de aplicaciones móviles." },
                        { id: 7, name: "Laura Méndez", desc: "Especialista en ilustración digital." },
                        { id: 8, name: "Carlos Ramírez", desc: "Estratega en marketing digital." }
                    ].map((person) => (
                        <div key={person.id} className="team-member text-left">
                            <Image
                                src={`/images/person${person.id}.jpg`}
                                alt={person.name}
                                className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
                                width={300}
                                height={300}
                            />
                            <h3 className="text-red-500 text-xl md:text-2xl font-bold mb-2">{person.name}</h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {person.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
