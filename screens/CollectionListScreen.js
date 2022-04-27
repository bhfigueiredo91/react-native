import React from 'react'
import {ScrollView, Text, TextInput, StyleSheet} from 'react-native'
import EmptyResultsComponent from '../components/EmptyResultsComponent';
import NFTListComponent from '../components/NFTListComponent'
import data from '../source/data.json'

const nftCollectionsList = data.collectionList;
let filteredNftCollectionsList = [];

class CollectionListScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    renderNFTListComponent() {
        filteredNftCollectionsList = nftCollectionsList;
        
        if(this.state.searchInput !== ''){
            filteredNftCollectionsList = nftCollectionsList.filter((e) => {
                return e.title.indexOf(this.state.searchInput) !== -1;
            }).map(x => {
                return x;
            });
        }


        if(filteredNftCollectionsList.length > 0){
            return(
                <NFTListComponent data={filteredNftCollectionsList} style={styles.container} navigation={this.props.navigation} />
            ) 
        }else{
            return(
                <EmptyResultsComponent />
            )
        }               
    }

    

    render(){
        return(
            <ScrollView>
                <TextInput style={styles.search} placeholder='Search for a collection here...' onChangeText={text => this.setState({searchInput : text})}/>
                {this.renderNFTListComponent()}
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
        ...baseStyle,
    },
    search: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 100,
        textAlign: 'center'    
    }
})

export default CollectionListScreen