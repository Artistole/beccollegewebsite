import '/src/pages/Placements/Placements.css'
import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";
import Donutchart from '/src/components/Charts/DonutChart.jsx'
import Donutchart1 from '/src/components/Charts/DonutChart1.jsx'
import { getPlacementData } from "/src/config/services.js";


let YearWisePlacements=() =>{
  const [resultsPerPage, setResultsPerPage] = React.useState(3);
  const [data, setData] = useState([])
  const newdata = []

	const getData = () => {
		getPlacementData().then(res =>
			  //setData(res.data)
      setData(res.data.flatMap(x => x.placementData))
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	useEffect(() => {
		getData()
	}, [])


  const getChartData = () =>{
    let uniqueCount = data.map(x=>x.academicyear)
    let duplicateCount = {};
uniqueCount.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
let result = Object.keys(duplicateCount).map(e => 
  {
    return {year:e, count:duplicateCount[e]}
  });
  return result
  }
  const getPieChartData = ()=>{
    const counts = {};
    for (const datum of data) {
      const k = `${datum.academicyear}_${datum.company}`;
    
      (counts[k] || (counts[k] = { ...datum, count: 0 })).count += 1;
      }
    
    const result = Object.values(counts)
    return result
    }
  
    return(
        <>  

    <>
    <React.Fragment>
      {console.log(getChartData())}
      <div className="BarChart container-fluid mb-5">

        <Chart
          type="bar"
          width={900}
          height={500}
          series={[
            {
              name: "No of Offers",
              data: getChartData().map(y=>y.count),
            },
          ]}
          
          options={{
            title: {
              text: "YearWise Placements",
              style: { fontSize: 30 },
              align:"center",
            },
            xaxis: {
              tickPlacement: "on",
              categories: getChartData().map(y=>y.year),
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "No of Offers",
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
            colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8','#9C27B0', '#0EEAE0', '#0C3EE8'],
            
          }}
        ></Chart>
      </div>
    </React.Fragment>
    
  
    </>
    
    
    <div className='ml-[64rem]'>
      <select value={resultsPerPage} onChange={(event) => setResultsPerPage(event.target.value)}>
          <option value={3}>Last 3years</option>
          <option value={4}>Last 4years</option>
          <option value={5}>Last 5years</option>
          <option value={7}>Last 7years</option>
          <option value={10}>Show All</option>
      </select>
      {/* <p>Results per page: {resultsPerPage}</p> */}
    </div>
    {/* {isClicking && ( */}
      <div className='donutchart flex p-1'>Placements 2022-2023  
      <div className='pl-72'>Max sal : 5.5LPA, avg sal : 3.5LPA, min sal : 2.5LPA</div>
      </div>
    <Donutchart />
    {/* )} */}
    
    {/* {isClicking && ( */}
      <div className='donutchart flex p-1'>Placements 2022-2023
      <div className='pl-72'>Max sal : 5.5LPA, avg sal : 3.5LPA, min sal : 2.5LPA</div>
      </div>
    <Donutchart1 />
    {/* )} */}
    
        
        </>
    )
}
export default YearWisePlacements