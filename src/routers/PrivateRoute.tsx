import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { history } from 'helpers'

function PrivateRoute() {
    const auth = useSelector((x: any) => x.auth.value)

    if (!auth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/account/login" state={{ from: history.location }} />
    }

    // authorized so return outlet for child routes
    return <Outlet />
}

export { PrivateRoute }
