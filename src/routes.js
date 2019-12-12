import React, {Component} from 'react'
import {withRouter, BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Plants from './Components/Plants'
import Calendar from './Components/Calendar'
import SinglePlant from './Components/SinglePlant'

class Routes extends Component {
  render(){
    return(
      <>
      {/* <Switch> */}
        <Route path="/plants/:plantName" component={SinglePlant} />
        <Route exact path="/plants" component={Plants} />
        <Route path="/calendar" component={Calendar} />
      {/* </Switch> */}
      </>
    )
  }
}

export default withRouter(Routes)
