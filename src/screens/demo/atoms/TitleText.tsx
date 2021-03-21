import React from 'react'
import { Text } from 'native-base'
import { StyleSheet, TextStyle } from 'react-native'


export const TitleText: React.FC = () => (
    <Text style={styles.text}>
        Professional retouching.{"\n"}
        Powered by A.I.
    </Text>
)

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 26,
        width: '100%',
        fontWeight: 'bold',
        marginTop: '15%',
    }as TextStyle,
})