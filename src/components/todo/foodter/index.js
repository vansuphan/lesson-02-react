import React, { Component } from 'react';
import './index.scss';
class FoodterItem extends Component {
    render() {
        const {itemsUndone} = this.props;
        console.log(itemsUndone)
        return (
            <div className="todo-foodter">
                <span className="foodter-item-letf count-items-undone"> {itemsUndone} item left</span>
                <span className="foodter-item all-items"
                    // onClick= {onClickAllItems}
                >All</span>
                <span className="foodter-item active-items"
                    //onClick= {onClickActiveItems}
                >Actives</span>
                <span className="foodter-item complete-items"
                    //onClick={onClickCompleteItems}
                >Complete</span>
            </div>
        );
    }
}

export default FoodterItem;