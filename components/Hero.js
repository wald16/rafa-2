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
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col items-center justify-center text-center"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 -z-10"></div>

            {/* Logo principal (grande) */}
            <div
                className={`${isVisible ? "absolute z-10 pointer-events-auto items-center" : "fixed z-[-1] pointer-events-auto "
                    } ${isVisible
                        ? "top-1/5  md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"
                        : "top-0 left-0 md:scale-[0.4] scale-[0.3] md:translate-x-[-20%] translate-x-[-25%] translate-y-[-20%]"
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

            {/* Logo pequeño (oculto en móviles) */}
            {!isVisible && (
                <div
                    className="fixed top-7 left-8 md:left-12 z-50 opacity-0 md:block " // Visible solo en pantallas >= md
                >
                    <Image
                        src="/images/logo-blanco.png"
                        alt="CR Group Logo"
                        width={90}
                        height={150}
                        className="object-contain cursor-default md:cursor-pointer" // Desactiva clic en móviles
                        onClick={scrollToTop}
                    />
                </div>
            )}
        </section>
    );
}
