import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

class EmptyResultsComponent extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Sorry, we couldn't find any results.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    message: {
        fontSize: 22
    }
})

export default EmptyResultsComponent