import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import OfferingTithesList from './OfferingTithesList'
import NewTitheOffering from './NewTitheOffering'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
          	<Route exact path='/' component={OfferingTithesList} />
          	<Route path='/create' component={NewTitheOffering} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))