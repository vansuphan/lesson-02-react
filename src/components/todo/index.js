import React, { Component } from 'react';
import './index.scss'
import Item from './item/index';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            TodoItem: [
                {
                    miniContent : "Dan gau di choi",
                    isComplete : false,
                },
                {
                    miniContent : "Dan gau di cong vien",
                    isComplete : false
                },
                {
                    miniContent : "Dan gau di khach san",
                    isComplete : true
                }
            ],
            newItem : ""
        }
        this.onKeyUp= this.onKeyUp.bind(this);
        this.onChange= this.onChange.bind(this);
    }
    onItemClick(item){
        return (event) =>{
            const {TodoItem} = this.state;
            const index = TodoItem.indexOf(item);
            this.setState({
                TodoItem: [
                    ...TodoItem.slice(0,index),
                    {
                        ...item, isComplete: !item.isComplete
                    },
                    ...TodoItem.slice(index +1)
                ]
            })
            //console.log("hi", TodoItem);
        }
    }
    onKeyUp(event){
        let value = event.target.value;
        if(event.keyCode === 13 && value.trim() !== ""){ // Enter up
            const {TodoItem} = this.state;
            this.setState({
                TodoItem: [
                    {
                        miniContent : value,
                        isComplete: false
                    },
                    ...TodoItem
                ],
                newItem : ""
            })
        }
    }
    onChange(event){
        this.setState({
            newItem: event.target.value
        })
    }
    render() {
        const {TodoItem, newItem} = this.state;
        return (
            <div id="todolist">
                <h3 className = 'h3-title'>Todo List</h3>
                <input 
                    type='text' 
                    className="input-add-item" 
                    placeholder="Add item"
                    value={newItem} 
                    onKeyUp={this.onKeyUp}
                    onChange= {this.onChange}>
                </input>
                {/* <Item content="Dat Gau di choi"></Item>*/
                TodoItem.length > 0 && TodoItem.map((item,index)=>(
                    <Item 
                        content={item} 
                        key={index} 
                        onClick = {this.onItemClick(item)}>
                    </Item>
                    ))
                }
                {TodoItem.length === 0 && <p>Nothig here</p>}
            </div>
        );
    }
}

export default TodoItem;