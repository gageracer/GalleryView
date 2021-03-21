import React from 'react'
import { Text, View } from 'native-base'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export const FooterText: React.FC = () => (
    <View style={styles.container}>
        <Text style={styles.baseText}>
            by selecting a photo you agree to our
            <Text style={styles.bold}> Terms and Service</Text> and 
            <Text style={styles.bold}> Privacy policy</Text> 
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    baseText: {
        fontSize: 8,
        color: '#b2b9c3',
        textAlign: 'center',
    } as TextStyle,
    bold: {
        fontWeight: 'bold',
        fontSize: 8,
        color: '#acb2bc',
    }as TextStyle
})