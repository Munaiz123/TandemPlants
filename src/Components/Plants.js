import React from "react";
import plants from "../Plants.json";
import "../index.css";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'


class OfficePlants extends React.Component {
  render() {
    console.log(plants);
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
