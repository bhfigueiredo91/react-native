import React, { Fragment }  from 'react'
import { View, Text} from 'react-native'

class NFTCollectionItemDetails extends React.Component{
    render(){
        return (
            <Fragment>
                <View style={styles.item}>
                   <Text>Selected index: {this.props.index}</Text>  
                </View>               
            </Fragment>
        )
    }
}


export default NFTCollectionItemDetails