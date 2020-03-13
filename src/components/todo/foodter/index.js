import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
class FoodterItem extends Component {
    render() {
        const {itemsUndone} = this.props;
        console.log(itemsUndone)
        return (
            <div className="todo-foodter">
                <span className="foodter-item-letf count-items-undone"> {itemsUndone} item left</span>
                <span className="foodter-item all-items"
                    // onClick= {onClickAllItems}
                ><Link to='/todos/'>All</Link>
                </span>
                <span className="foodter-item active-items"
                    //onClick= {onClickActiveItems}
                ><Link to='/todos/active'>Actives</Link>
                </span>
                <span className="foodter-item complete-items"
                    //onClick={onClickCompleteItems}
                ><Link to='/todos/complete'>Completes</Link>
                </span>
            </div>
        );
    }
}

export default FoodterItem;