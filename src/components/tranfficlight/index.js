import React, { Component } from 'react';
import Light from "./light/index";
import './index.scss'
const red = "red";
const yellow = "yellow";
const green = "green";
class TrafficLight extends Component {
    constructor(props){
        super(props);
        this.lightColor = [
            {color : "red", status : "off"},
            {color : "yellow", status : "off"},
            {color : "green", status : "off"}
        ]
        this.state = {
            lightActive : red
        };
        this.getNextColor = this.getNextColor.bind(this);
        setInterval(()=>{
            this.state.lightActive = this.getNextColor(this.state.lightActive);
            
        },1000);
    }

    getNextColor(color){
        switch(color){
            case red:
                return yellow;
            case yellow:
                return green;
            default:
                return red;
        }
    }
    render() {
        return (
            console.log(this.state.lightActive),
            <div className="traffic-light">
                <h3>Tranffic Light</h3>
                {
                    this.lightColor.map((value,index)=>
                        <Light lightActive = {this.state.lightActive} lightColor = {value} key={index}></Light>
                    )
                }
            </div>
        );
    }
}

export default TrafficLight;