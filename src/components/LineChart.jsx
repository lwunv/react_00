import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'


export { LineChart }

function LineChart(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    const options = {
        responsive: true,
        backgroundColor: 'rgba(0,0,0,0)',
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
                align: 'start',
                color: '#fff',
            },
            title: {
                display: false,
                text: 'BODY RECORD 2021.05.21',
                position: 'top',
                align: 'start',
                color: '#fff',
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                    color: '#fff',
                },
                grid: {
                    drawBorder: false,
                    display: true,
                    color: '#777'
                },
                border: {
                    display: false
                }
            },
            y: {
                ticks: {
                    display: false,
                    beginAtZero: false,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                    color: '#fff',
                },
                border: {
                    display: false
                }
            },
        },
    }

    let labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月']
    let data1 = [65, 59, 80, 120, 56, 55, 40, 81, 56, 55, 40]
    let data2 = [65, 23, 70, 81, 56, 110, 150, 81, 56, 99, 69]
    if (props.type === 1) {
        labels = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日']
        data1 = [81, 56, 55, 40, 81, 56, 55, 40, 65, 59, 80]
        data2 = [65, 59, 80, 81, 40, 81, 56, 55, 40, 56, 55]
    }
    if (props.type === 2) {
        labels = ['1週', '2週', '3週', '4週', '5週', '6週', '7週', '8週', '9週', '10週', '11週']
        data1 = [65, 59, 80, 81, 56, 56, 55, 40, 55, 40, 81]
        data2 = [81, 56, 65, 59, 80, 55, 40, 81, 56, 55, 40]
    }
    if (props.type === 3) {
        labels = ['1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年', '11年']
        data1 = [65, 56, 55, 40, 59, 140, 81, 81, 56, 55, 40]
        data2 = [56, 55, 40, 65, 59, 80, 81, 56, 56, 88, 22]
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data1,
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
            },
            {
                label: 'Dataset 2',
                data: data2,
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
            },
        ],
    }

    return (
        <Line options={options} data={data} width={'650px'} />
    )
}
