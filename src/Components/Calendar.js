import React from "react";
import Calendar from "react-calendar";

export default class CalendarView extends React.Component {
  render() {
    let today = new Date().toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    console.log(today);

    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Calendar />
      </div>
    );
  }
}
