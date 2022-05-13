import React from 'react';
import {Line} from 'react-chartjs-2';
import './../styles/linechart.css';
import {Row,Col} from "react-bootstrap";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
     
    ]
  };
//   var options = {
//     title: "This is a test",
//     xAxes: {
//         title: "time",
//         gridThickness: 2,
//         unit: "day",
//         unitStepSize: 1000,
//         type: 'time',
//         time: {
//             displayFormats: {
//                 millisecond: 'MMM DD',
//                 second: 'MMM DD',
//                 minute: 'MMM DD',
//                 hour: 'MMM DD',
//                 day: 'MMM DD',
//                 week: 'MMM DD',
//                 month: 'MMM DD',
//                 quarter: 'MMM DD',
//                 year: 'MMM DD',
//             }
//         }
//     }
// }
function linechart() {
  return (
      <div>
    <Row className='linechart1'>
        <Col md ={4} sm={6} >
        <Line  data={data} /></Col>
        <Col md ={4} sm={6}>
        <Line  data={data} /></Col>
        <Col md ={4} sm={6}>
        <Line  data={data} /></Col>
        </Row>
        
        <Row className='linechart1'>
        <Col md ={4} sm={6}>
        <Line  data={data} /></Col>
        <Col md ={4} sm={6}>
        <Line data={data} /></Col>
        </Row>
    </div>
  )
}

export default linechart