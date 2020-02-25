import React, { Component } from 'react';
import './index.scss'
import Item from './item/index';
class TodoItem extends Component {
    constructor(){
        super();
        this.TodoItem = [
            {
                miniContent : "Dat Gau di choi",
                isComplete : false
            },
            {
                miniContent : "Dat Gau di cong vien",
                isComplete : false
            },
            {
                miniContent : "Dat Gau di khach san",
                isComplete : true
            }
        ]
    }
    render() {
        return (
            <div id="todolist">
                <h3>Todo List</h3>
                {/* <Item content="Dat Gau di choi"></Item>
                <Item content="Dat Gau di cong vien"></Item>
                <Item content="Dat Gau di khach san"></Item> */
                this.TodoItem.length > 0 && this.TodoItem.map((item,index)=>(
                    <Item content={item} key={index}></Item>
                    ))
                }
                {this.TodoItem.length === 0 && <p>Nothig here</p>}
            </div>
        );
    }
}

export default TodoItem;