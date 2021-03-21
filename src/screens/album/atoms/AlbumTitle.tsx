import React from 'react'
import { Text } from 'native-base'
import { StyleSheet, TextStyle } from 'react-native'
interface props {
    data: string
} 

export const AlbumTitle: React.FC<props> = ({ data }) => (
    <Text style={styles.text}>
        {data}
    </Text>
)

const styles = StyleSheet.create({
    text: {
        marginLeft:  25,
        fontSize: 18,
    } as TextStyle,
})