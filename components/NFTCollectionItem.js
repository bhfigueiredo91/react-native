import React, { Fragment }  from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'

class NFTCollectionItem extends React.Component{
    render(){
        return (
            <Fragment>
                <View style={styles.item}>
                    <Image source={{uri: this.props.nftItem.image}} style={styles.image} resizeMode={"cover"} />
                    <View>
                        <TouchableHighlight>
                            <Text style={styles.title}>{this.props.nftItem.title}</Text>
                        </TouchableHighlight>   
                        <TouchableHighlight>
                            <Text style={styles.description}>{this.props.nftItem.description}</Text>   
                        </TouchableHighlight>
                    </View>                        
                </View>               
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
    },
    title: {
        padding: 2,
        textAlign: 'right',
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