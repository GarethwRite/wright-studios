import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { fetchFruits } from '../actions'

import Home from './Home'
import Navbar from './Navbar'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <>
      <div className='app'>
      <Router>
        <Navbar/>
      <Route exact path='/' component={Home} /> 
      </Router>
      </div>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)

{/* <ul>
  {this.props.fruits.map(fruit => (
    <li key={fruit}>{fruit}</li>
  ))}
</ul> */}