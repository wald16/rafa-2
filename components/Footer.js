export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Mi Empresa de Publicidad. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
