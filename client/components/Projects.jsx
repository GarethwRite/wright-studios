import React from 'react'
import { connect } from 'react-redux'

export class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
            </div>
        )
    }
}

export default connect()(Projects) 
