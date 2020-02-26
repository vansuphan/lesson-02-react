import React, { Component } from 'react';
import './index.scss';
import success from '../../../imgs/success.svg';
import successed from '../../../imgs/successed.svg';
class Item extends Component {
    render() {
        const {content, onClick} = this.props;
        let className = "mini-item";
        let url = success;
        if(content.isComplete){
            className += " mini-item-done";
            url = successed;
        }
        return (
            <div className={className}>
                <img src={url} onClick={onClick}></img>
                <span>
                    {content.miniContent} 
                </span>
            </div>
        );
    }
}

export default Item;