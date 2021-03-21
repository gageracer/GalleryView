import React from 'react'
import { AlbumTitle } from '../atoms/AlbumTitle'
import { StyleSheet, ViewStyle } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { View } from 'native-base'

interface props {
    title: string
} 

export const AlbumLink: React.FC<props> = ({title}) => (
    <View style={styles.text}>
        <AlbumTitle data={title}/>
        <Entypo style={styles.icon} name="chevron-right" size={20} color="#cdd1f1" />
    </View>
)

const styles = StyleSheet.create({
    text: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: "100%"
    } as ViewStyle,
    icon: {
        marginRight: 12,
    }
})