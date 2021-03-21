import React from 'react'
import { Text } from 'native-base'
import { StyleSheet } from 'react-native'

export const LinkText: React.FC = () => (
    <Text style={styles.text}>SELECT PHOTO</Text>
)

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
})