import  { ShoppingCartIcon} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function UiShopingCart() {
    return (
        <>
        {/* Icono del carrito alineado a la derecha */}
        <Link to="/cart" className="ml-auto relative">
            <ShoppingCartIcon className="h-7 w-7 hover-effect" />
        </Link>
    </>
    )
}
