import { useEffect } from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { recordActions } from 'stores'

export { Column }

function Column() {
    const records = useSelector(x => x.records.list)
    const showLoadMore = useSelector(x => x.records.more)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(recordActions.getAll({ page, type: 0 }))
    }, [page])

    const loadMore = () => {
        setPage(page + 1)
    }

    return (
        <div className='column container'>
            <div className='section section-1'>
                <div className='banner'>
                    <div>
                        <h3>RECOMMENDED COLUMN</h3>
                        <hr />
                        <a href="/">オススメ</a>
                    </div>
                </div>
                <div className='banner'>
                    <div>
                        <h3>RECOMMENDED DIET</h3>
                        <hr />
                        <a href="/">ダイエット</a>
                    </div>
                </div>
                <div className='banner'>
                    <div>
                        <h3>RECOMMENDED BEAUTY</h3>
                        <hr />
                        <a href="/">美容</a>
                    </div>
                </div>
                <div className='banner'>
                    <div>
                        <h3>RECOMMENDED HEALTH</h3>
                        <hr />
                        <a href="/">美容</a>
                    </div>
                </div>
            </div>
            <div className='section section-2'>
                <div className='blogs'>
                    {records?.value?.map((record, index) => (
                        <div className='blog' key={index}>
                            <div>
                                <div className='image' key={index}>
                                    <img src={'./images/m01.png'} alt={record.title} />
                                    <span className='time'>
                                        {record.time}
                                    </span>
                                </div>
                                <div className='content'>
                                    <a href="/" className='title'>
                                        {record.title}
                                    </a>
                                    <div className='tags'>
                                        <a href="/">#魚料理</a>
                                        <a href="/">#和食</a>
                                        <a href="/">#DHA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={records.loading ? 'loading load-more' : 'load-more'}>
                    {showLoadMore.value ? <button onClick={loadMore} className='btn btn-load-more'>{records.loading ? '...' : 'コラムをもっと見る'}</button> : ''}
                </div>
            </div>
        </div>
    )
}
