import React, { Component,Fragment } from 'react'
import Child from './Child'

import nameContext from './context/nameContext'

const {Consumer} = nameContext

export default class Father extends Component {
    render() {
        return (
            <Fragment>
                <h1>Father...</h1>
                <Consumer >
                    {
                        (name)=>{
                            return <p>Father:{name}</p>
                        }
                    }
                </Consumer>
                <Child />
            </Fragment>
        )
    }
}
