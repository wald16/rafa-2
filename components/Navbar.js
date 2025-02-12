'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Animaciones con Framer Motion
    const menuVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        },
    };

    const linkVariants = {
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.5 },
        }),
        closed: (i) => ({
            opacity: 0,
            x: 50,
            transition: { delay: i * 0.05, duration: 0.3 },
        }),
    };

    return (
        <div className="absolute top-0 right-0 z-30">
            {/* Botón de menú hamburguesa */}
            <motion.div
                className="p-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div
                    className={`w-8 h-1 bg-white mb-2 transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""
                        }`}
                ></div>
                <div
                    className={`w-8 h-1 bg-white mb-2 ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                ></div>
                <div
                    className={`w-8 h-1 bg-white ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                        }`}
                ></div>
            </motion.div>

            {/* Menú lateral desplegable */}
            <motion.div
                className="fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-90 p-6"
                variants={menuVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
            >
                {/* Logo en el menú */}
                <div className="mb-8">
                    <Image
                        src="/images/logo.png"
                        alt="CR Group Logo"
                        width={120}
                        height={60}
                        className="cursor-pointer"
                    />
                </div>

                {/* Enlaces del menú */}
                <nav className="flex flex-col space-y-6 text-white text-lg">
                    {["Inicio", "Portafolio", "Servicios", "Contacto"].map(
                        (link, index) => (
                            <motion.a
                                key={link}
                                href={`/${link.toLowerCase()}`}
                                variants={linkVariants}
                                custom={index}
                                className="hover:text-primary"
                            >
                                {link}
                            </motion.a>
                        )
                    )}
                </nav>

                {/* Botón de cerrar */}
                <motion.div
                    className="absolute top-4 right-4 cursor-pointer text-white text-2xl"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    &times;
                </motion.div>
            </motion.div>
        </div>
    );
}
