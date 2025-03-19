import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
    { name: "Home", href: "/"},
    { name: "Ordena Online", href: "#"},
    { name: "Productos", href: "#"},
    { name: "Contacto", href: "#"},
    { name: "Location", href: "#"},
    { name: "Sobre Nosotros", href: "#"},
];
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo alineado */}
                <div className="flex items-center pl-4">
                    <img
                        src="https://i.pinimg.com/550x/24/66/31/246631bd1587502733043b5840419310.jpg"
                        alt="Logo"
                        className="h-12 w-auto flex-shrink-0 ml-[-10px]"
                    />
                </div>


                {/* Menú en escritorio */}
                <nav className="hidden md:flex flex-1 justify-center gap-12">
                    {links.map((link) => (
                        <Link
                            to={link.href}
                            key={link.name}
                            className="relative text-white transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-200 hover:opacity-80"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Botón menú móvil */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
                    {links.map((link) => (
                        <Link
                            to={link.href}
                            key={link.name}
                            className="py-2 text-white text-lg transition-all duration-300 ease-out hover:scale-110 hover:text-yellow-200 hover:opacity-80"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
