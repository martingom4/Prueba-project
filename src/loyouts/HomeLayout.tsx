import { Outlet } from "react-router-dom"
import { Toaster } from "sonner" // esto es para las notificaciones


import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"


export default function HomeLayout(){
    return(
        <>
            <Header/>
            <div >
                <div>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
