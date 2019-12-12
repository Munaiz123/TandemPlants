import React, {Component} from 'react'
import {withRouter, BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Plants from './Components/Plants'
import Calendar from './Components/Calendar'

class Routes extends Component {
  render(){
    return(
      // <Switch>
      <>
        <Route path="/plants" component={Plants} />
        <Route path="/calendar" component={Calendar} />
      {/* </Switch> */}
      </>
    )
  }
}

export default withRouter(Routes)
