import React from "react";
import plants from "../Plants.json";
import '../index.css';
import {Card} from 'react-bootstrap'
import Navbar from './Navbar'




class OfficePlants extends React.Component {
  render() {
    console.log(plants)
    return (
      <div className='main'>
        <div className='allPlants'>
        {plants.map((plant,i) => (
          <Card key={i}>
            <h4>Plant NAMESSSSSSS: {plant.name}</h4>
            <h6> Water Cycle: {plant.water_after}</h6>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}

export default OfficePlants;
