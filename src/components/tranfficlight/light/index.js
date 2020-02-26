import React, { Component } from 'react';
import './index.scss';
class Ligth extends Component {
    render() {
        const {lightColor} = this.props;
        const {lightActive} = this.props;
        //console.log(lightActive);
        let className = "light " + lightColor.color;
        if(lightActive === lightColor.color){
            className += " active";
        }
        return (
            <div className={className}>
               
            </div>
        );
    }
}

export default Ligth;