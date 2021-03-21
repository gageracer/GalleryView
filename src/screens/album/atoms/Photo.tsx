import React from 'react'
import { StyleSheet, Image, ImageStyle, ImageSourcePropType } from 'react-native'
interface props {
    data: ImageSourcePropType
} 

export const Photo: React.FC<props> = ({data}) => {
    return (
        <Image
        style={styles.image}
            source={data} />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 2,
        width: '100%',
        resizeMode: 'contain',
    } as ImageStyle,
    
})