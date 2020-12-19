import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { fetchFruits } from '../actions'

import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import About from './About'
import News from './News'

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
      <Switch>
      <Route exact path='/' component={Home} /> 
      <Route exact path='/Projects' component={Projects} /> 
      <Route exact path='/About' component={About} /> 
      <Route exact path='/News' component={News} /> 
      </Switch>
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