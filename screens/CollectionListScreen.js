import React, {useState, useEffect} from 'react'
import {ScrollView, Text, TextInput, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import SearchCollectionComponent from '../components/SearchCollectionComponent';
import * as collections from '../store/collections.duck';

function CollectionListScreen({navigation}){
    
    const [searchInput, setSearchInput] = useState('')

    const dispatcher = useDispatch()

    const collectionsData = useSelector(state => state.collections.items);

    useEffect(() => {
        dispatcher(collections.actions.filterCollections(searchInput))
    }, [searchInput])

    return(
        <ScrollView>
            <TextInput style={styles.search} placeholder='Search for a collection here...' onChangeText={text => setSearchInput(text)} defaultValue={searchInput}/>
            {searchInput ? <Text style={styles.resultSearch}>Search results for: {searchInput}</Text> : <Text/>}
            <SearchCollectionComponent navigation={navigation} collection={collectionsData} />
        </ScrollView>
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
    },
    resultSearch: {
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        textAlign: 'center'
    },
    search: {
        ...baseStyle,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 100,
        textAlign: 'center'    
    }
})

export default CollectionListScreen