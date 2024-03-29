import React from "react";
import plants from "../Plants.json";
// import * as EventCalendar from 'react-event-calendar'

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
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent:'space-between',
          paddingTop:'35px'

        }}
      >
        <img
          alt="plantPic"
          src={currentPlantObj.img}
          style={{
            width: "35%",
            height: "35%",
            padding: "10px",
            paddingLeft:'20px',
            paddingRigt:'20px'
          }}
        />
        <div>
          <div style={{paddingLeft:'15px'}}>
            <h1>{currentPlantObj.name}</h1>
            <h4 style={{ paddingBottom: "25px" }}>
              Water this plant every {currentPlantObj.water_after}
            </h4>
            <div>
              <h6>The Dates that this plants needs watering:</h6>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center"
                }}
              >
                {currentPlantObj.dates.map((date, i) => (
                  <li style={{ padding: "3.5px" }} key={i}>
                    {String(date._d)
                      .split(" ")
                      .slice(0, 4)
                      .join(" ")}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePlant;
