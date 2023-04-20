export { Circle }

function Circle(props) {
    const dashoffset = 2 * 3.14 * 85
    const dashArray = dashoffset * (100 - props.percent) / 100

    return (
        <div className="circle">
            <svg width="180" height="180">
                <circle cx="90" cy="90" r="85" fill="none" stroke="#fff" strokeWidth="5"
                    strokeDasharray={dashoffset} strokeDashoffset={dashArray} />
            </svg>
            <div className="circle-text">
                <span>{props.content}</span>
                <span className="percent">{`${props.percent}%`}</span>
            </div>
        </div>
    )
}
