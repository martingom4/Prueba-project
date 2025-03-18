// vamos a empezar a hacer el componente Header inicio: 18/03/2025
import {Link } from "react-router-dom";
const links = [
    {name: "Home", href: "/"},
    {name: "Ordena Online", href: "#"},
    {name: "Productos", href: "#"},
    {name: "Contacto", href: "#"},
    {name: "Location", href: "#"},
    {name: "Sobre Nosotros", href: "#"}
]
export default function (){
    return (
         <header className=" bg-gray-900 text-white p-6 text-center" >
            <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 text-sm">
                {links.map((link)=>
                    <Link to={link.href} key={link.name} className="hover:underline">
                     {link.name} <span aria-hidden="true"></span>
                    </Link>

                )}
            </div>
         </header>

    )
}
