import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginView from './views/LoginView'
import AuthLayout from './components/AuthLayouts'
import './Index.css'
import HeaderLayout from './components/HeaderLayout'



export default function Router(){
    return (<BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginView />} />
            </Route>
            <Route element={<HeaderLayout />}>
                <Route path='/auth/login' element = {<LoginView/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
