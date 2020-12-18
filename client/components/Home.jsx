import { connect } from 'react-redux'
import React from 'react'


export class Home extends React.Component {
 


  render () {
    return (
      <div>
        <img src="/images/facebook_cover_photo_2.png" className='homeLogo'/>

      </div>
    )
  }
}

// function mapStateToProps (globalState) {
//   return {
  
//   }
// }

export default connect()(Home)