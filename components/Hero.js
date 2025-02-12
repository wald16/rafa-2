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
            behavior: 'smooth' // Añade un efecto de desplazamiento suave
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
                className={`${isVisible ? "absolute z-10" : "fixed z-[-1]"
                    } ${isVisible ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "top-0 left-[-60] scale-[0.4]"}`}
            >
                <Image
                    src="/images/logo-blanco.png"
                    alt="CR Group Logo"
                    width={300}
                    height={150}
                    className="object-contain cursor-pointer" // Añade cursor-pointer para indicar que es clickeable
                    onClick={scrollToTop} // Vincula la función de scroll al evento onClick
                />
            </div>
        </section>
    );
}
