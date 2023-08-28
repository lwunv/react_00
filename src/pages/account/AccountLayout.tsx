import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Login, Register } from '.'

function AccountLayout() {
    const auth = useSelector((x: any) => x?.auth?.value)

    // redirect to home if already logged in
    if (auth) {
        return <Navigate to="/" />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export { AccountLayout }
