import React, { Component } from 'react';
import './style.scss'
import Update from './update/update.js';
import AppAPI from '../../services/index.js';
class Body extends Component {
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this)
        this.state = {
            status : false,
            value : [1,2,3,4,5],
            dataRender : null
        }
    }
    changeStatus(){
        this.setState({
            status : !this.state.status
        });
    }
    componentDidMount(){
        console.log(this.state.dataRender,'data');
        // dung cho function chay 1 lan
    }
    componentWillMount(){
        /// dung de call api
        AppAPI.getProducts((err, result)=>{
            if(result)
            {
                console.log(result,'result');
                this.setState({
                    dataRender : result
                })
            }
        })
    }
    componentDidUpdate(){
        // update thay doi state
    }
    render() {
        const {status,value, dataRender} = this.state
        return (
            <div>Body
                <button onClick = {this.changeStatus}>Button</button>
                 <Update status = {status} dataChild = {dataRender && dataRender.data}></Update>
                {
                    dataRender && dataRender.data.map((item,index)=>(
                        <p key = {index}>{item.TenPhim}</p>
                    ))
                }
            </div>
        );
    }
}

export default Body;