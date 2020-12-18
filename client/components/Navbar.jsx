import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'


class Navbar extends React.Component {

  state = {
    click: false,
    button: true
  }

  handleClick = () => {
    this.setState({ click: !this.state.click })
  }

  closeMobileMenu = () => {
    this.setState({ click: false })
  }

  showButton = () => {
    if (window.innerWidth <= 960) {
      this.setState({ button: false })
    } else {
      this.setState({ button: true })
    }
  }

  componentDidMount() {
    this.showButton()
  }

  render() {

    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
              WS <i className='fas fa-gamepad' />
            </Link>
            <div className='menu-icon' onClick={this.handleClick}>
              <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>

             
                <li className='nav-item'>
                  <Link to='/events/new' className='nav-links' onClick={this.closeMobileMenu}>
                    Create Event
                </Link>
                </li>
              

             
                <li className='nav-item'>
                  <Link to='/events' className='nav-links' onClick={this.closeMobileMenu}>
                    View Events
                </Link>
                </li>
              

             
              <li className='nav-item'>
                <Link to='/users/active' className='nav-links' onClick={this.closeMobileMenu}>
                 
                </Link>
              </li>
    
                <li className='nav-item'>
                  <Link to='' className='nav-links' onClick={() => {
                    this.closeMobileMenu()
                    this.props.dispatch(removeActiveUser())
                  }}>
                    Logout
                  </Link>
                </li>
    
                <li className='nav-item'>
                  <Link to='/users/new' className='nav-links' onClick={this.closeMobileMenu}>
                    Sign up!
                </Link>
                </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
function ms2p(globalState) {
  return {
    
  }
}
export default connect(ms2p)(Navbar)