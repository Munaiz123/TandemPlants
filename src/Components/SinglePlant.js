import React from "react";

class SinglePlant extends React.Component{


  render(){
    console.log('URL?',this.props.match.params)
    return(
      <div>
        Single Plant
      </div>
    )
  }
}

export default SinglePlant
