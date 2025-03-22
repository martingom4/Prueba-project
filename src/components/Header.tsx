import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import UiShopingCart from "./Ui/UiShopingCart";
import UiLogo from "./Ui/UiLogo";

// en vez de el home se tiene que dejar poner en el component de la imagen o logo
const links = [
    { name: "Inicio", href: "/"},
    { name: "Ordena Online", href: "#"},
    { name: "Productos", href: "#"},
    { name: "Contacto", href: "#"},
    { name: "Localización", href: "#"},
    { name: "Sobre Nosotros", href: "#"}
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="bg-amber-200 text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <UiLogo/>

            {/* Menú de navegacion  */}
            <nav className="hidden md:flex flex-1 justify-start space-x-18">
                {links.map((link) => (
                <Link
                    to={link.href}
                    key={link.name}
                    className="relative hover-effect"
                >
                    {link.name}
                </Link>
                ))}
            </nav>

             {/* icono de el carrito  */}
             <UiShopingCart/>

            {/* Botón menú móvil */}
            <button
                className="md:hidden text-white focus:outline-none ml-2"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
            </div>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
            <div className="md:hidden flex flex-col items-center bg-[color:var(--color-secundary-black)] py-4">
                {links.map((link) => (
                <Link
                    to={link.href}
                    key={link.name}
                    className="py-2 text-white text-lg hover-effect"
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
