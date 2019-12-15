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
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <img src={currentPlantObj.img} style={{ width: "35%" }} />
          <h6>Water every {currentPlantObj.water_after}</h6>
        </div>
      </div>
    );
  }
}

export default SinglePlant;
