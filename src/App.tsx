import { useNavigate, useLocation } from 'react-router-dom'
import { history } from 'helpers'
import { Header, Alert, Footer, BackToTop } from 'components'
import { Routers } from 'routers'
import { Loading } from 'components/Loading'

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate()
    history.location = useLocation()

    return (
        <div className="app-container bg-light">
            <Loading />
            <Header />
            <Alert />
            <BackToTop />
            <div className="main">
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export { App }
