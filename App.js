import React from 'react';
import {SafeAreaView} from 'react-native';
import ExampleComponent1 from './components/ExampleComponent1';
import ExampleUI from './components/ExampleUI';
import CollectionListScreen from './screens/CollectionListScreen';

class MainComponent extends React.Component {
    render(){
        return (
            <SafeAreaView>
                {/* <ExampleUI /> */}
                <CollectionListScreen />
            </SafeAreaView>            
        )
    }
}

export default MainComponent
