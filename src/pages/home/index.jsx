import React, { Component } from 'react'
import axios from "axios"

export default class Home extends Component {
    componentDidMount() {
        document.querySelector('title').innerHTML = "欢迎home"
        console.log(document.querySelector('title'))
        axios({
            method: 'get',
            url: 'http://localhost:8080/data',
        }).then(res => { console.log(res) })

    }
    render() {
        return (
            <div>
                home页
            </div>
        )
    }
}
