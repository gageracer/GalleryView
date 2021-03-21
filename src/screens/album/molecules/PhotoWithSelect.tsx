import React from 'react'
import { Photo } from '../atoms/Photo'
import { StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native'
import { CheckBox, View } from 'native-base'
interface props {
    data: ImageSourcePropType
}

export const PhotoWithSelect: React.FC<props> = ({ data }) => {
    return(
        <View style={styles.container} >
            <Photo data={data} />
            <CheckBox color={'#c7cdd9'} style={styles.checkbox}/>
        </View>
)
}
const styles = StyleSheet.create({
    container: {
        height: 90,
        width: 95,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    } as ViewStyle,
    checkbox: {
        borderRadius: 50,
        bottom: 25,
        left: 65,
    }
})