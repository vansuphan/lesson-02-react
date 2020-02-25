import React, { Component } from 'react';
import './index.scss';
class Ligth extends Component {
    render() {
        const {lightColor} = this.props;
        const {lightActive} = this.props;
        console.log(lightColor,'light');
        console.log(lightActive, "active")
        let className = "light " + lightColor.color;
        //lightActive === lightColor ? className = "light " + lightColor.color + " active" :  className = "light " + lightColor.color
        //console.log(lightColor);
        return (
            <div className={className}>
               
            </div>
        );
    }
}

export default Ligth;