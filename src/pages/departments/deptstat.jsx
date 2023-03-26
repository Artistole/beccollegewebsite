import React, { useEffect, useState } from 'react'
import { getDepartmentsGraphData } from '../../config/services'
import Chart from "react-apexcharts";

export const DeptStats = () => {
    const [data, setData] = useState([])
    const [graphData, setGraphData] = useState([])

    const [years, setYears] = useState([])
    const [selectedYear, setSelectedYear] = useState((new Date().getFullYear() - 1).toString() + '-' + (new Date().getFullYear()).toString())


    const getYears = () => {
        setYears([...new Set(data.map(x => x.academicyear))])
    }

    useEffect(() => {
        getDepartmentsGraphData().then(res =>
            setData(res.data)
        )
            .catch(err =>
                console.log("SomethingWent Wrong!!!", err)
            )

    }, [])

    useEffect(() => {
        getYears()
    }, [data])

    useEffect(() => {
        setGraphData(data.filter(x => x.academicyear == selectedYear))
    }, [data, selectedYear])

    return (
        <div className='d-flex container mt-5 justify-around'>
            <div className="my-4" style={{ border: "3px solid #0060b1" }}>
                <Chart
                    className="deptStats"
                    type="bar"
                    width={700}
                    height={300}
                    series={[
                        {
                            name: "",
                            data: data.map(y => y.passpercent),
                        },
                    ]}

                    options={{
                        title: {
                            text: "Overview Stats",
                            style: { fontSize: 30 },
                            align: "center",
                        },
                        xaxis: {
                            tickPlacement: "on",
                            categories: data.map(y => y.academicyear),
                            offsetX: 25
                        },

                        yaxis: {
                            labels: {
                                formatter: (val) => {
                                    return `${val}`;
                                },
                                style: { fontSize: "15", colors: ["black"] },
                            },
                            title: {
                                text: "",
                                style: { color: "black", fontSize: 15 },
                            },
                        },
                        plotOptions: {
                            bar: {
                                distributed: true,
                                vertical: true,
                            },
                        },
                        legend: {
                            show: true,
                            position: "right",
                        },
                        colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8', '#9C27B0', '#0EEAE0', '#0C3EE8'],

                    }}
                />
            </div>
            <div className="flex flex-col mx-2 my-4" style={{ border: "3px solid #0060b1" }}>
                <div className='flex justify-between'>
                    <span className='m-2' style={{ fontSize: "20px", fontWeight: "bolder" }}>Pass Percentage of year {selectedYear}</span>
                    <select name="SelectYear" id="select" className="ml-auto my-2 mr-2" onChange={(e) => setSelectedYear(e.target.value)}>
                        <option val={""} selected>Select a Year</option>
                        {years.map(y =>
                            <option val={y}>{y}</option>
                        )}
                    </select>
                </div>
                {!!data && !!graphData && <Chart
                    className="deptStats"
                    type="donut"
                    width={700}
                    height={300}
                    series={[graphData[0]?.distinction, graphData[0]?.first, graphData[0]?.second]}
                    options={{
                        labels: ["Destinction", "First", "Second"],
                        colors: ['#F44336', '#9C27B0', '#462626'],
                        title: {
                            text: '',
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: true,
                                        }
                                    }
                                }
                            }

                        },
                        dataLabels: {
                            enabled: true,
                        }
                    }}
                />
                }
            </div>
        </div>
    )
}
