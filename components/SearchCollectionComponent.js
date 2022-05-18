import React from 'react';
import {StyleSheet} from 'react-native'
import EmptyResultsComponent from '../components/EmptyResultsComponent';
import NFTListComponent from '../components/NFTListComponent'

function SearchCollectionComponent({collection, navigation}){
    let view = <EmptyResultsComponent />

    if(collection != null){
        view = <NFTListComponent data={collection} style={styles.container} navigation={navigation} />
    }

    return(
        view
    )
}

const baseStyle = {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000'
}

const styles = StyleSheet.create({
    container: {
        ...baseStyle,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width: '100%'
    }
});

export default SearchCollectionComponent