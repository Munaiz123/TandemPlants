import React from "react";
import plants from "../Plants.json";
import "../index.css";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import moment from 'moment'

let dayOne = moment().year(2019).month(11).date(16)
plants.forEach(plant => plant['dates'] = [dayOne])
plants.forEach(plant => plant['frequency'] = parseInt(plant.water_after.split(' ')[0]) )



plants.forEach(plant =>{
  let firstDay = moment().year(2019).month(11).date(16)
  console.log("firstDay", firstDay)
  let lastDay = moment().year(2019).month(12).date(16).add(7.5,'weeks')
  let {dates} = plant

  let currentDate = moment(firstDay)

  while(currentDate < lastDay){
    let nextDate = moment(currentDate).add(plant.frequency,'days')

    if(nextDate._d.getDay() === 0) nextDate = moment(nextDate).add(1,'d')
    if(nextDate._d.getDay() === 6) nextDate = moment(nextDate).subtract(1,'d')

    dates.push(nextDate)
    currentDate = moment(nextDate)
  }

})

class OfficePlants extends React.Component {
  render() {
    // console.log(plants);
    return (
      <div className="container" >
        <div className='row justify-content-md-center'>
          <div className="col-3">
            {plants.map((plant, i) => (
              <Card key={i} className="row">
                <Card.Title>
                <Link to={`/plants/${plant.name}`}>{plant.name}</Link>
                </Card.Title>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OfficePlants;
