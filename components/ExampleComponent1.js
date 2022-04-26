import React from 'react';
import {Text} from 'react-native';

class ExampleComponent1 extends React.Component{
    render(){
        return (
            <Text>{this.props.message}</Text>
        )
    }
}

export default ExampleComponent1