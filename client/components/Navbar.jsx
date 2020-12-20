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
            <Link to="/" className="navbar-home-link" onClick={this.closeMobileMenu}>
              WS
            </Link>
            <div className='menu-icon' onClick={this.handleClick}>
              <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>

             
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
                    Home
                </Link>
                </li>
              
                <li className='nav-item'>
                  <Link to='/Projects' className='nav-links' onClick={this.closeMobileMenu}>
                    Projects
                </Link>
                </li>
              
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={this.closeMobileMenu}>
                 About
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/News' className='nav-links' onClick={this.closeMobileMenu}>
                 News
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