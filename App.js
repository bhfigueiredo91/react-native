import React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import CollectionListScreen from './screens/CollectionListScreen';
import CollectionItemDetailScreen from './screens/CollectionItemDetailScreen';

const Stack = createNativeStackNavigator(); 

export default class MainComponent extends React.Component {  
    render() {  
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={CollectionListScreen} options={{ title: 'Collections' }} navigation={this.props.navigation} />
                    <Stack.Screen name="Details" component={CollectionItemDetailScreen} options={{ title: 'Collection Details' }} navigation={this.props.navigation} />
                </Stack.Navigator>
            </NavigationContainer> 
        );  
    }  
}
