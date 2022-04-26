import React, { Fragment } from 'react'
import { Alert, TouchableOpacity} from 'react-native'
import NFTCollectionItem from './NFTCollectionItem'

class NFTListComponent extends React.Component{
    render(){
        return  <Fragment>
                    {this.props.data.map((collection, index) => (
                        <TouchableOpacity
                            key = {index}
                            style = {this.props.style}
                            onPress = {() => Alert.alert(collection['title'], collection['description'])}>
                            <NFTCollectionItem nftItem={collection} />
                        </TouchableOpacity>
                    ))}
                </Fragment>
    }
}

export default NFTListComponent