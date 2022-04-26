import React  from 'react'
import { View, Text} from 'react-native'

class NFTCollectionItemDetails extends React.Component{
    render(){
        return (
                <View style={styles.item}>
                   <Text>Selected index: {this.props.index}</Text>  
                </View>               
        )
    }
}


export default NFTCollectionItemDetails