import React, {Fragment} from 'react';
import {Text, ActivityIndicator, TextInput, Switch, Button, Alert, TouchableHighlight, Linking, Image, View, ScrollView} from 'react-native';

const containerStyle = {
    padding: 20,
    backgroundColor: "red"
}

class ExampleUI extends React.Component{
    render(){
        return(
            <ScrollView style={containerStyle}>
                <Text>This is an example Text</Text>
                <Text>Lorem impsum sit dolor amet</Text>

                <Text>Activity Indicator</Text>
                <ActivityIndicator/>

                <Text>Example Text Input</Text>
                <TextInput placeholder='Insert your text here...'/>

                <Text>Example Switch Component</Text>
                <Switch />

                <Text>Example Button</Text>
                <Button color={'green'} title='Press here' onPress={() => Alert.alert('Click in Button', 'I just clicked on the button')}/>

                <TouchableHighlight underlayColor={"#e1e1e1"}  onPress={() => Linking.openURL('http://google.com')}>
                    <Text>This is a text with touch Highlight</Text>
                </TouchableHighlight>

                <Image source={{uri: "https://picsum.photos/250"}} style={{width: 250, height: 250}}></Image>

                <Text>Example Local Image</Text>
                <Image source={require('../resources/images/img1.jpeg')} style={{width: 250, height: 250}}></Image> 
            </ScrollView>            
        )
    }
}

export default ExampleUI