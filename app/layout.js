import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "CR Group - Publicidad de Impacto",
    description: "Creamos campañas creativas para potenciar tu marca.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="relative min-h-screen">
                {/* Navbar */}
                <Navbar />
                {/* Contenido dinámico */}
                {children}
            </body>
        </html>
    );
}
