import {Routes, Route, Navigate} from 'react-router-dom'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<p> Pagina Incial</p>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}