'use client';

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(true);
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col items-center justify-center text-center"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 -z-10"></div>

            {/* Logo */}
            <div
                className={`${isVisible ? "absolute z-10 pointer-events-auto" : "fixed z-[-1] pointer-events-none"
                    } ${isVisible
                        ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        : "top-0 left-[-60] scale-[0.4]"
                    }`}
            >
                <Image
                    src="/images/logo-blanco.png"
                    alt="CR Group Logo"
                    width={300}
                    height={150}
                    className="object-contain cursor-pointer"
                    onClick={scrollToTop}
                />
            </div>

            {/* Invisible Clickable Logo */}
            {!isVisible && (
                <div
                    className="fixed top-12 left-6 z-50 cursor-pointer opacity-0 visibility-hidden"
                    onClick={scrollToTop}
                >
                    <Image
                        src="/images/logo-blanco.png"
                        alt="CR Group Logo"
                        width={130}
                        height={150}
                        className="object-contain"
                    />
                </div>
            )}
        </section>
    );
}
