import React from 'react'
import { TouchableOpacity, View} from 'react-native'
import NFTCollectionItem from './NFTCollectionItem'

class NFTListComponent extends React.Component{
    render(){
        return  <View>
                    {this.props.data.map((collection, index) => (
                        <TouchableOpacity
                            key = {index}
                            style = {this.props.style} onPress = {() => console.log(this.props.navigation.navigate('Details', collection))}>
                            <NFTCollectionItem nftItem={collection} />
                        </TouchableOpacity>
                    ))}
                </View>
    }
}

export default NFTListComponent