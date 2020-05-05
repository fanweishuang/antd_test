import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        document.querySelector('title').innerHTML = "欢迎home"
        console.log(document.querySelector('title'))
    }
    render() {
        return (
            <div>
                home页
            </div>
        )
    }
}
