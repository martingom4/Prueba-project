import { Link } from "react-router-dom";

export default function UiLogo() {
    return (
        <>
        <div className="flex items-center pl-4">
            <Link to="/">
            <img
                src="https://i.pinimg.com/550x/24/66/31/246631bd1587502733043b5840419310.jpg"
                alt="Logo"
                className="h-12 w-auto flex-shrink-0 mr-30"
                />
            </Link>
        </div>

        </>
    )
}
