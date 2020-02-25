import React, { Component } from 'react';

class Update extends Component {
    constructor(props){
        super(props);
    }
    // componentDidUpdate(){
    //     console.log(this.props.status,'update')
    // }
    render() {
        const {dataChild} = this.props
        console.log(dataChild,'did')
        return (
            <div> Update</div>,
            <button>Button con</button>
          
        );
    }
}

export default Update;