import React from "react";



export default class Calendar extends React.Component{
  render(){
    let today = new Date().toLocaleDateString(undefined,{
      day:'2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    console.log(today)



    return(
      <div>
        <h1>Calender</h1>
      </div>
    )
  }
}


