import React, { Component } from 'react';
import './index.scss'
import Item from './item/index';
import FoodterItem from './foodter/index';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            TodoItem: [],  //data { miniContent : " Dắt gấu đi chơi ", isComplete: false }
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
    onClickCancel(item){
        return (event)=>{
            const {TodoItem} = this.state;
            const index = TodoItem.indexOf(item);
            this.setState({
                TodoItem: [
                    ...TodoItem.slice(0,index),
                    ...TodoItem.slice(index +1)
                ]
            })
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
                <h2 className = 'h2-title'>Todos</h2>
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
                        onClickDone = {this.onItemClick(item)}
                        onClickCancel ={this.onClickCancel(item)}
                    >
                    </Item>
                    ))
                }
                {
                    TodoItem.length === 0 && <p className="nothing-here">Nothing here</p>
                }
                {
                    TodoItem.length > 0 && 
                    <FoodterItem
                        itemsUndone={(TodoItem.map((value)=>value.isComplete===false)).length}
                    >
                    </FoodterItem>
                }
            </div>
        );
    }
}

export default TodoItem;