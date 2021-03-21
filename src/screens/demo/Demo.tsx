import React from 'react'
import { Container } from 'native-base'
import { StyleSheet, ViewStyle } from 'react-native'
import { DemoContent } from './organisms/DemoContent'

export const Demo = () => {

    return (
        <Container style={styles.container}>
            <DemoContent/>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f2f2f7',
    }as ViewStyle,
})