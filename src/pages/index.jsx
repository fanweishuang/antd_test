import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Index extends Component {
    render() {
        return (
            <div>
                首页
                <NavLink to={'/home'}>home</NavLink>
            </div>
        )
    }
}
