import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginView from './views/LoginView'
import AuthLayout from './layouts/AuthLayouts'
import './Index.css'



export default function Router(){
    return (<BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginView />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
