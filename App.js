import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CollectionListScreen from './screens/CollectionListScreen';
import CollectionItemDetailScreen from './screens/CollectionItemDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default class MainComponent extends React.Component {  
    render() {  
        return(
            <NavigationContainer theme={DefaultTheme}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={CollectionListScreen} options={{ title: 'Collections' }} navigation={this.props.navigation} />
                    <Stack.Screen name="Details" component={CollectionItemDetailScreen} options={{ title: 'Collection Details' }} navigation={this.props.navigation} />
                </Stack.Navigator>
            </NavigationContainer> 
        );  
    }  
}
