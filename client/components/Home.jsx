import { connect } from 'react-redux'
import React from 'react'


export class Home extends React.Component {
 


  render () {
    return (
      <div>
      <div>
        <img src="/images/facebook_cover_photo_2_cropped.jpg" className='homeLogo'/>
      </div>    
</div>
    )
  }
}

// function mapStateToProps (globalState) {
//   return {
  
//   }
// }

export default connect()(Home)