// Here we are lazy loading the components based on routes. That is, only when user goes to a specific route, will we be loading code required to render component on that route.

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./Homepage";
import { lazy } from 'react';
const Component1 = lazy(() => import('./Comp1'))
const Component2 = lazy(() => import('./Comp2'))

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} exact/>
            <Route path='/comp1' element={<Component1/>}/>
            <Route path='/comp2' element={<Component2/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router