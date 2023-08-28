import { useSelector } from 'react-redux'

function Loading() {
    const loading = useSelector((x: any) => x.common.loading)

    if (loading > 0) {
        return (
            <div className="loading" style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, zIndex: 99 }}>
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>
        )
    }
}

export { Loading }
