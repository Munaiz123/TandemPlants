import React from "react";
import plants from "../Plants.json";

class SinglePlant extends React.Component {
  render() {
    let currentPlantObj = plants
      .filter(plant => plant.name === this.props.match.params.plantName)
      .pop();
    console.log(currentPlantObj);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <h1>{currentPlantObj.name}</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <img
            src={currentPlantObj.img}
            style={{ width: "35%", height: "35%", padding: "10px" }}
          />
          <div>
            <h6>Water every {currentPlantObj.water_after}</h6>
            <div>
              <p>The Dates that this plants needs watering:</p>
              {currentPlantObj.dates.map(date => (
                <li>{String(date._d)}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePlant;
