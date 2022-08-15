import "./Item.scss"
import { useState, useEffect } from "react"; 
import { DotPulse } from '@uiball/loaders'
import { seriesService } from "./api/SeriesService";

function Item(props) {

  const [isLoading, setLoading] = useState(true);
  const [serie, setSerie] = useState([]);
  const [highlight, setClass] = useState('itemData');

    useEffect(() => {
        seriesService.getSerie(props.id).then(data => {
            setLoading(false);
            setSerie(data.data)
            if (data.data.vote_average > 8.5) {
              setClass('highlight')
            }
        })
    }, [])

  if (isLoading) {
    return (
      <div className={highlight} key={props.index}>
        <div className="informationContainer">
          <div className="centerAnimation">
          <DotPulse 
          size={40}
          speed={0.3} 
          color="#6DECCA" 
          />
          </div>
        </div>
      </div>

    )
  } else {
  
      return (
          <div className={highlight} key={props.index}>
            <div className="informationContainer">
              <div>
                <p className="time">00:12</p>
              </div>
              <div className="programma">
                <h2>
                {serie.name}
                </h2>
                <p className="overview">
                  {serie.overview}
                </p>
              </div>
            </div>              
          </div>
      )
    }

}
export default Item;