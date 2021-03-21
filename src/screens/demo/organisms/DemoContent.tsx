import React from 'react'
import { View } from 'native-base'
import { StyleSheet } from 'react-native'
import { OpenAlbum } from '../molecules/OpenAlbum'
import { TitleText } from '../atoms/TitleText'
import { ImageText } from '../atoms/ImageText'
import { DemoImage } from '../atoms/DemoImage'
import { FooterText } from '../atoms/FooterText'

export const DemoContent = () => {
    return (
        <View style={styles.container}>
            <TitleText/>
            <DemoImage/>
            <ImageText/>
            <OpenAlbum/>
            <FooterText/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: '10%',
        backgroundColor: '#f2f2f7',
    },
})