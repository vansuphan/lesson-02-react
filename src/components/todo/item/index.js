import React, { Component } from 'react';
import './index.scss';
import success from '../../../imgs/success.svg';
import successed from '../../../imgs/successed.svg';
import cancel from '../../../imgs/cancel.svg';
class Item extends Component {
    render() {
        const {content, onClickDone, onClickCancel} = this.props;
        let className = "mini-item";
        let url = success;
        if(content.isComplete){
            className += " mini-item-done";
            url = successed;
        }
        return (
            <div className={className}>
                <img 
                    src={url} 
                    onClick={onClickDone}
                    className='img-done'>
                </img>
                <span>
                    {content.miniContent} 
                </span>
                <img 
                    onClick={onClickCancel}
                    src={cancel}
                    className= 'img-cancel'>
                </img>
            </div>
        );
    }
}

export default Item;