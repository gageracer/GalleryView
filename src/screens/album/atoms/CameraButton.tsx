import React from 'react'
import { View } from 'native-base'
import { StyleSheet } from 'react-native'
import { useHistory } from "react-router-dom"

import { MaterialCommunityIcons } from '@expo/vector-icons';


export const CameraButton: React.FC = () => {
    const history = useHistory()

    const goCamera = () => {
        history.push("/camera")
    }
    
    return (
        <View  style={styles.button}>
            <MaterialCommunityIcons onPress={goCamera} name="camera-plus" size={32} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        zIndex: 10,
        position: 'absolute',
        bottom: 45,
        right: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2c51',
        width: 64,
        height: 64,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
})