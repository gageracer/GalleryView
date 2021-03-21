import React from 'react'
import { Text, View } from 'native-base'
import { StyleSheet, TextStyle } from 'react-native'


export const ImageText: React.FC = () => (
    <View style={styles.container}>
        <Text style={styles.text}>
            Select a photo to start
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }as TextStyle,
})