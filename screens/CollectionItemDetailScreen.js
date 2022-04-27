import React  from 'react'
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native'

class CollectionItemDetailScreen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
                <View style={styles.item}>
                   <TouchableHighlight>
                        <Text style={styles.title}>{this.props.route.params.title}</Text>
                    </TouchableHighlight>   
                    <TouchableHighlight>
                        <Text style={styles.description}>{this.props.route.params.description}</Text>   
                    </TouchableHighlight>
                </View>     
        )
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'column',
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

export default CollectionItemDetailScreen