import React, { Component } from 'react';

import reducer from '../reducers/reducer';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        }

        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action){
        this.setState((prevState) => reducer(prevState, action));
    }

    render(){
        return (

        );
    }
}