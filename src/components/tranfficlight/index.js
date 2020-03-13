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
            {color : "red"},
            {color : "yellow"},
            {color : "green"}
        ]
        this.state = {
            lightActive : 'red'
        };
        setInterval(() => {
            this.setState({
                lightActive: this.getNextColor(this.state.lightActive),    
            });
        }, 1500);
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
            <div className="traffic-light">
                <h3>Tranffic Light</h3>
                {
                    this.lightColor.map((value,index)=>
                        <Light 
                        lightActive = {value.color === this.state.lightActive ? this.state.lightActive : null} 
                        lightColor = {value} key={index}>
                        </Light>
                    )
                }
            </div>
        );
    }
}

export default TrafficLight;