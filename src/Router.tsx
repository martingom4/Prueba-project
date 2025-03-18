
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './Index.css'
import HomeLayout from './loyouts/HomeLayout'
import Home from './views/Home'


export default function Router(){
    return (<BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path='/' element = {<Home/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
