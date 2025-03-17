import { Outlet } from 'react-router-dom'
import { Toaster} from 'sonner'

export default function AuthLayout(){
    return (
        <>
        <div className=' bg-slate-800 min-h-screen'>
            <div className='max-w-lg mx-auto pt-10 px-5'>
                <img src = '/logo.svg' alt='logo tipo de la app'/>
                <h1 className=''> aca siempre ira un h1 </h1>
                <div className='py-10'>
                    <Outlet/>
                </div>
            </div>
        </div>
        <Toaster/>
    </>
    )
}
