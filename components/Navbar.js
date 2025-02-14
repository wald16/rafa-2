'use client';

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image for the close button image
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

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

    const handleScrollToSection = (sectionId, event) => {
        // Prevent the default action of the anchor tag
        event.preventDefault();

        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 0; // Adjust based on the height of your navbar
            const top = section.offsetTop - offset; // Use absolute offset

            window.scrollTo({
                top,
                behavior: 'smooth',
            });

            setIsOpen(false); // Close the menu after scrolling
        }
    };


    return (
        <div className="fixed top-0 right-0 z-30">
            {/* Hamburger Button */}
            <motion.div
                className="p-8 cursor-pointer z-40"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div
                    className={`w-10 h-1 bg-white mb-2 transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
                ></div>
                <div
                    className={`w-10 h-1 bg-white mb-2 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></div>
                <div
                    className={`w-10 h-1 bg-white ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                ></div>
            </motion.div>

            {/* Side Menu */}
            <motion.div
                className="fixed top-0 right-0 w-3/4 md:w-2/6 h-full bg-black bg-opacity-90 flex flex-col justify-center items-start pl-10"
                variants={menuVariants}
                animate={isOpen ? "open" : "closed"}
                initial="closed"
            >
                {/* Close Button */}
                <motion.div
                    className="absolute top-4 right-5 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image
                        src="/images/xcierre.png" // Replace with your uploaded image path
                        alt="Close"
                        width={40}
                        height={40}
                    />
                </motion.div>

                {/* Links */}
                <nav className="flex flex-col items-start space-y-8">
                    <motion.a
                        href="#"
                        onClick={() => handleScrollToSection("we-do-section", event)}
                        variants={linkVariants}
                        custom={0}
                        className="text-red-500 font-bold text-3xl tracking-wide cursor-pointer"
                        style={{ fontFamily: "Campton, sans-serif" }}
                        whileHover={{ scale: 1.1, color: "#fff" }}
                    >
                        We do
                    </motion.a>
                    <motion.a
                        href="#"
                        onClick={() => handleScrollToSection("us-section", event)}
                        variants={linkVariants}
                        custom={1}
                        className="text-red-500 font-bold text-3xl tracking-wide cursor-pointer"
                        style={{ fontFamily: "Campton, sans-serif" }}
                        whileHover={{ scale: 1.1, color: "#fff" }}
                    >
                        Us
                    </motion.a>
                    <motion.a
                        href="/contact"
                        variants={linkVariants}
                        custom={2}
                        className="text-red-500 font-bold text-3xl tracking-wide cursor-pointer"
                        style={{ fontFamily: "Campton, sans-serif" }}
                        whileHover={{ scale: 1.1, color: "#fff" }}
                    >
                        Contact
                    </motion.a>

                </nav>
            </motion.div>
        </div>
    );
}
