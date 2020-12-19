import React from 'react'
import { connect } from 'react-redux'

export class News extends React.Component {
    render() {
        return (
            <div>
                <h1>News</h1>
            </div>
        )
    }
}

export default connect()(News) 

