import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { recordActions } from 'stores'
import { LineChart } from 'components'
import { Circle } from 'components'
import { ReactComponent as Knife } from '../assets/svgs/icon_knife.svg'
import { ReactComponent as Cup } from '../assets/svgs/icon_cup.svg'

const Home = () => {
    const auth = useSelector((x: any) => x.auth.value)
    const records = useSelector((x: any) => x.records.list)
    const showLoadMore = useSelector((x: any) => x.records.more)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [type, setType] = useState(0)

    useEffect(() => {
        dispatch(recordActions.getAll({ page, type }) as any)
    }, [page, type])

    const loadMore = () => {
        setPage(page + 1)
    }

    const filter = (type: number) => {
        setType(type)
        setPage(1)
    }

    // only show nav when logged in
    if (!auth) return null

    return (
        <div className='home'>
            <div className='section section-1'>
                <div className='section-left'>
                    <img src="./images/home1.png" alt="home1" />
                    <div className='content'>
                        <Circle percent={75} content="05/21" />
                    </div>
                </div>
                <div className='section-right'>
                    <LineChart />
                </div>
            </div>
            <div className='container section section-2'>
                <div className='hexagon item' onClick={() => filter(1)}>
                    <div>
                        <Knife />
                        <div>Morning</div>
                    </div>
                </div>
                <div className='hexagon item' onClick={() => filter(2)}>
                    <div>
                        <Knife />
                        <div>Lunch</div>
                    </div>
                </div>
                <div className='hexagon item' onClick={() => filter(3)}>
                    <div>
                        <Knife />
                        <div>Dinner</div>
                    </div>
                </div>
                <div className='hexagon item' onClick={() => filter(4)}>
                    <div>
                        <Cup />
                        <div>Snack</div>
                    </div>
                </div>
            </div>
            <div className='container section section-3'>
                <div className='records'>
                    {records?.value?.map((record: { image: string | undefined; title: string | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                        <div className='record' key={index}>
                            <img src={record.image} alt={record.title} />
                            <span className='content'>
                                {record.content}
                            </span>
                        </div>
                    ))}
                </div>
                <div className={records.loading ? 'loading load-more' : 'load-more'}>
                    {showLoadMore.value && <button onClick={loadMore} className='btn btn-load-more'>{records.loading ? '...' : '記録をもっと見る'}</button>}
                </div>
            </div>
        </div>
    )
}

export { Home }
