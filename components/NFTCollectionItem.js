import React from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'

function NFTCollectionItem({nftItem}) {
    return(
        <View style={styles.item}>
            <Image source={{uri: nftItem.image}} style={styles.image} resizeMode={"cover"} />
            <View>
                <TouchableHighlight>
                    <Text style={styles.title}>{nftItem.title}</Text>
                </TouchableHighlight>   
                <TouchableHighlight>
                    <Text style={styles.description}>{nftItem.description}</Text>   
                </TouchableHighlight>
            </View>                        
        </View> 
    );
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
    },
    title: {
        padding: 2,
        textAlign: 'left',
        fontSize: 26
    },
    description: {
        padding: 4,
        fontSize: 15
    },
    image: {
        width: 100, 
        height: 100,
        borderRadius: 75
    }
});

export default NFTCollectionItem