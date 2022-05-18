import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CollectionListScreen from './screens/CollectionListScreen';
import CollectionItemDetailScreen from './screens/CollectionItemDetailScreen';
import {Provider} from 'react-redux'
import store from './store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App({navigation}) 
{
    return(
        <Provider store={store}>
            <NavigationContainer theme={DefaultTheme}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={CollectionListScreen} options={{ title: 'Collections' }} navigation={navigation} />
                    <Stack.Screen name="Details" component={CollectionItemDetailScreen} options={{ title: 'Collection Details' }} navigation={navigation} />
                </Stack.Navigator>
            </NavigationContainer> 
        </Provider>
    );
}

export default App;
