import React, { Component } from 'react';
import './index.scss';
class FoodterItem extends Component {
    render() {
        const {itemsUndone} = this.props;
        console.log(itemsUndone)
        return (
            <div>
                <span className="count-item-undone"> {itemsUndone} item left</span>
            </div>
        );
    }
}

export default FoodterItem;