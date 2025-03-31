import {Link} from "react-router-dom";


export default function Uilogo(){
    return (
        <div>
            <Link to="/">
                <img
                    src="../../images/Logo.png"
                    alt="Logo"
                    className="h-12 w-12 rounded-full object-cover"
                />

            </Link>
        </div>
    )

}
