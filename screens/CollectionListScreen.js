import React from 'react'
import {ScrollView, Text, TextInput, StyleSheet} from 'react-native'
import NFTListComponent from '../components/NFTListComponent'
import data from '../source/data.json'

const nftCollectionsList = data.collectionList;

class CollectionListScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <Text style={styles.header}>Collections</Text>
                <TextInput style={styles.search} placeholder='Search for a collection here...'/>
                <NFTListComponent data={nftCollectionsList} style={styles.container} />
            </ScrollView>
        )
    }
}

const baseStyle = {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000'
}

const styles = StyleSheet.create({
    container: {
        ...baseStyle
    },
    header: {
        ...baseStyle,
        marginVertical: 0,
        fontSize: 32       
    },
    search: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 20,
        width: '90%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 100,
        textAlign: 'center'    
    }
})

export default CollectionListScreen