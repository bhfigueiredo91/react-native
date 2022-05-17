import React from 'react'
import { TouchableOpacity, View} from 'react-native'
import NFTCollectionItem from './NFTCollectionItem'

function NFTListComponent({data, style, navigation}) {
    return(
            <View>
                {data.map((collection, index) => (
                    <TouchableOpacity
                        key = {index}
                        style = {style} onPress = {() => navigation.navigate('Details', collection)}>
                        <NFTCollectionItem nftItem={collection} />
                    </TouchableOpacity>
                ))}
            </View>
    );
}

export default NFTListComponent