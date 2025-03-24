import { Outlet } from "react-router-dom"
import { Toaster } from "sonner" // esto es para las notificaciones 


import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"



export default function HomeLayout(){
    return(
        <>
            <Header/>
            <div className=' bg-gradient-to-b from-primary-red to-primary-yellow min-h-screen'>
                <div className='py-10 text-center'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
