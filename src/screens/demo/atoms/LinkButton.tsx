import React from 'react'
import { Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { useHistory } from "react-router-dom"
import * as ImagePicker from 'expo-image-picker'

interface props {
    children: React.ReactNode
} 

export const LinkButton: React.FC<props> = ({children}) => {
    const history = useHistory()
    
    const selectImage = async() => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

        if(permissionResult.granted === false){
            alert('Permission to access camera roll is required!')
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        if(!pickerResult.cancelled)
            history.push("/album")

    }

    return(
        <Button block style={styles.button} onPress={selectImage} >
            {children}
        </Button>
    )
}


const styles = StyleSheet.create({
    button: {
        flex: 0.7, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cacef1',
        width: '100%',
        height: 80,
        borderRadius: 15,
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