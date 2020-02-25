import React, { Component } from 'react';
import './index.scss'
class Item extends Component {
    render() {
        const {content} = this.props;
        let className = "mini-item";
        if(content.isComplete){
            className += " mini-item-done"
        }
        return (
            <div className={className}>
                <span>{this.props.content.miniContent}</span>
                <input type="checkbox"></input>
            </div>
        );
    }
}

export default Item;