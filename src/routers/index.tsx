import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { history } from 'helpers'
import { PrivateRoute } from './PrivateRoute'
import { Home } from 'pages/Home'
import { AccountLayout } from 'pages/account'
import { Record } from 'pages/Record'
import { Column } from 'pages/Column'

function Routers() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate()
    history.location = useLocation()

    return (
        <Routes>
            {/* private */}
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="records" element={<Record />} />
            </Route>
            {/* public */}
            <Route path="columns" element={<Column />} />
            <Route path="account/*" element={<AccountLayout />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export { Routers }
