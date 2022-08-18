import logo from './logo.svg';
import './App.css';
import imgs from './back7.jpg';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [name,setName]=useState("Vadodara")
    const [temp,setTemp]=useState("")
    const [icon,setIcon]=useState("")
    const [text,setText]=useState("")
    const [hum,setHum]=useState("")
    const [cname,setCname]=useState("")
    const [cloud,setCloud]=useState("")

    const [c,setC]=useState("")
    const [cou,setCou]=useState("")
    const [wind,setWind]=useState("")
    const [dir,setDir]=useState("")

    useEffect(()=>{

        axios.get("http://api.weatherapi.com/v1/current.json?key=b5fef2042fbb497faeb182122220505&q=" + name + "&aqi=no")
            .then((res)=>{
                console.log(res)

                setTemp(res.data.current.temp_c)
                setCloud(res.data.current.cloud)
                setWind(res.data.current.wind_kph)
                setDir(res.data.current.wind_dir)
                setCname(res.data.location.name)
                setC(res.data.location.region)
                setCou(res.data.location.country)
                setIcon(res.data.current.condition.icon)
                setText(res.data.current.condition.text)
                setHum(res.data.current.humidity)




            })
    })
    const myStyle={
        backgroundImage: "url(/back7.png)",

        marginTop:'-70px',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };







    const names=(e)=>{
        e.preventDefault()
        if(!e.target.value){
            window.location.reload(false)

        }

    }




  return (
      <div style={{backgroundImage:`url(${imgs})`}}>

          <section className="vh-100">
              <div className="container py-5 h-100">

                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-md-8 col-lg-6 col-xl-4">

                          <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
                          <p align="center" color="red"> *Please refresh the page After use</p>

                          <div className="input-group rounded mb-3">
                              <input type="search" className="form-control rounded" placeholder="City"
                                     aria-label="Search"
                                     aria-describedby="search-addon" onChange={e=>{
                                         setName(e.target.value)



                              }}/>

                          </div>



                          <div className="card shadow-0 border">
                              <div className="card-body p-4">

                                  <h1 className="mb-1 sfw-normal" align="center">{cname} </h1>
                                  <h3 className="mb-1 sfw-normal" align="center">Region:  {c} <br /> Country:  {cou}</h3>
                                  <hr />

                                  <p className="mb-2">Current temperature: <strong>{temp}°C</strong></p>
                                  <p>Humidity: <strong>{hum}</strong></p>
                                  <p>Cloud: <strong>{cloud}</strong></p>
                                  <p>Wind KPH:  <strong>{wind}</strong></p>
                                  <p>Wind Direction :  <strong>{dir}</strong></p>

                                  <div className="d-flex flex-row align-items-center">
                                      <p className="mb-0 me-4" >{text}</p>
                                      <img src={icon}/>
                                  </div>

                              </div>
                          </div>

                      </div>
                  </div>

              </div>
          </section>




      </div>
  );
}

export default App;
