import React,{useEffect,useState} from 'react';
import {Line} from 'react-chartjs-2';
import './../styles/linechart.css';
import {Row,Col} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";
import {FaGrinWink} from 'react-icons/fa';

import {
    Chart as ChartJS, //look at documentation for chart js if you want to import more things
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
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const config = {
    responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'some title here', //edit the title before using
    },
  },
  };
  export const config2 = {
    responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'some title here', //edit the title before using
    },
  },
  };
  export const config3 = {
    responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'some title here', //edit the title before using
    },
  },
  };
  export const config4 = {
    responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'some title here', //edit the title before using
    },
  },
  };
  export const configtemp = {
    responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'some title here',
    },
  },
  };

function Linechart({selectedEB},{loadgraph}) {
    const {user} = useAuth0();
    useEffect(() => {
        
        const fetchdata = async () => {
            console.log({selectedEB})
          const res = await fetch(BASE_URL+'exps/id?email='+user.email+'&Eggsbeeid=' + {selectedEB}.selectedEB) //retrieve info of eggsbee owned by user that is logged in
          const data = await res.json()
          console.log(data)
          setNose1({ //retrieve sensor 1 info
              labels:data[0].TimeArray.map((milisec)=>new Date(milisec).getHours()),
              datasets: [{
                  label:"Nose Reading 1",
                  data: data[0].Nosereading1,
                  backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"}]
          })
          setNose2({ //retrieve sensor 2 info
            labels:data[0].TimeArray.map((milisec)=>new Date(milisec).getHours()),
            datasets: [{
                label:"Nose Reading 2",
                data: data[0].Nosereading2,
                backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"}]
        })
        setNose3({ //retrieve sensor 3 info
            labels:data[0].TimeArray.map((milisec)=>new Date(milisec).getHours()),
            datasets: [{
                label:"Nose Reading 3",
                data: data[0].Nosereading3,
                backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"}]
        })
        setNose4({ //retrieve sensor 4 info
            labels:data[0].TimeArray.map((milisec)=>new Date(milisec).getHours()),
            datasets: [{
                label:"Nose Reading 4",
                data: data[0].Nosereading4,
                backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"}]
        })
        setTemp({ //retrieve temperature sensor info
            labels:data[0].TimeArray.map((milisec)=>new Date(milisec).getHours()),
            datasets: [{
                label:"Temperature",
                data: data[0].Temp,
                backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)"}]
        })
          setFetcheddata(true)
        }

        fetchdata()
      }, {loadgraph})
      const [nose1, setNose1] = useState({})
      const [nose2, setNose2] = useState({})
      const [nose3, setNose3] = useState({})
      const [nose4, setNose4] = useState({})
      const [temp, setTemp] = useState({})
      const [Fetcheddata,setFetcheddata]=useState(false)
  return (
      <div>
          {Fetcheddata ? <div><Row className='linechart1'>
        <Col md ={4} sm={6} >
        <Line  data={nose1} options={config} /></Col>
        <Col md ={4} sm={6}>
        <Line  data={nose2} options={config2}/></Col>
        <Col md ={4} sm={6}>
        <Line  data={nose3} options={config3}/></Col>
        </Row>
        
        <Row className='linechart1'>
        <Col md ={4} sm={6}>
        <Line  data={nose4} options={config4}/></Col>
        <Col md ={4} sm={6}>
        <Line data={temp} options={configtemp}/></Col>
        </Row></div> : <div> <h4><FaGrinWink/> No Experiment Running</h4> </div> }
       
    </div>
  )
}

export default Linechart