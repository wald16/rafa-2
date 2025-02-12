'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        description: 'Lidera la visión estratégica de la compañía.',
        image: '/images/john.jpg',
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        description: 'Encargada de la tecnología y la innovación.',
        image: '/images/jane.jpg',
    },
    {
        name: 'Sam Brown',
        role: 'Designer',
        description: 'Diseña experiencias memorables para nuestros usuarios.',
        image: '/images/sam.jpg',
    },
    {
        name: 'Emily Davis',
        role: 'Marketing',
        description: 'Conecta nuestra marca con el mundo.',
        image: '/images/emily.jpg',
    },
];

export default function AboutUsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-red-700 via-red-900 to-black">
            {/* Slider Container */}
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute w-3/4 h-3/4 flex flex-col items-center text-center bg-gradient-to-b from-red-800 to-black rounded-xl shadow-lg p-6"
            >
                <img
                    src={teamMembers[currentIndex].image}
                    className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-red-600"
                />
                <h3 className="text-2xl text-white font-bold">
                    {teamMembers[currentIndex].name}
                </h3>
                <p className="text-lg text-gray-300 mb-2">
                    {teamMembers[currentIndex].role}
                </p>
                <p className="text-gray-400 text-sm">
                    {teamMembers[currentIndex].description}
                </p>
            </motion.div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-6 bg-red-700 hover:bg-red-600 text-white p-2 rounded-full"
            >
                ⬅️
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 bg-red-700 hover:bg-red-600 text-white p-2 rounded-full"
            >
                ➡️
            </button>
        </div>
    );
}
