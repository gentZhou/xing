import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Son extends Component {
    static propTypes = {
        b: PropTypes.number.isRequired
    }
    

    render() {
        const {b}=this.props
        console.log('Son重新渲染了')
        return (
            <div>
                <h1>Son</h1>
                <span>b:{b}</span>
            </div>
        )
    }
}
