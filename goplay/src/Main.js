import Carousel from "./Carousel"
import {seriesService} from "./api/SeriesService"
import React, { useState, useEffect } from "react"
import "./Main.scss"
import play4 from "./assets/Play4_2021.png"
import play5 from "./assets/Play5_2021.png"
import play6 from "./assets/Play6_2021.png"
import play7 from "./assets/Play7_2021.png"

function GetDiscover() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    seriesService.getDiscoverSeries().then(response => {
      console.log(response.data.results)
      setSeries(response.data.results)
    })
  }, [])

  return (
    <Carousel title="Play 4" data={series} img={play4}/>
  );
}

function GetTrending() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    seriesService.getTrendingSeries().then(response => {
      console.log(response.data.results)
      setSeries(response.data.results)
    })
  }, [])

  return (
    <Carousel title="Play 5" data={series} img={play5}/>
  );
}

function GetNetflix() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    seriesService.getNetflixOriginals().then(response => {
      console.log(response.data.results)
      setSeries(response.data.results)
    })
  }, [])

  return (
    <Carousel title="Play 6" data={series} img={play6}/>
  );
}
function GetTopMovies() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    seriesService.getTopMovies().then(response => {
      console.log(response.data.results)
      setSeries(response.data.results)
    })
  }, [])

  return (
    <Carousel title="Play 7" data={series} img={play7}/>
  );
}

function Main() {
  return (
    <div className="main">
      <div className="tabs">
        <div className="dateContainer left">
          <p> arrow left </p>
        </div>
        <div className="dateContainer">
          <p>eergisteren</p>
          <p> <strong> 03 aug</strong></p>
        </div>
        <div className="dateContainer">
          <p>gisteren</p>
          <p> <strong> 03 aug</strong></p>
        </div>
        <div className="dateContainer today">
          <p>vandaag</p>
          <p> <strong> 03 aug</strong></p>
        </div>
        <div className="dateContainer">
          <p>morgen</p>
          <p> <strong> 03 aug</strong></p>
        </div>
        <div className="dateContainer">
          <p>overmorgen</p>
          <p> <strong> 03 aug</strong></p>
        </div>
        <div className="dateContainer right">
        <p>arrow right</p>

        </div>
      </div>
      
      <div className="flex">
        <GetDiscover/>
        <GetTrending/>
        <GetNetflix/>
        <GetNetflix/>
      </div>
      {/* <GetTopMovies/> */}
    </div>
  )
}
export default Main;