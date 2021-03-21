import React, { useState, useEffect } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Camera, CameraCapturedPicture } from 'expo-camera'
import { CameraPreview } from './CameraPreview'

// insipred from here:
// https://docs.expo.io/versions/latest/sdk/camera/
export const OpenCamera: React.FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState<boolean>(false)
    const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture | null>(null)

    let camera: Camera | null

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted');
        })()
    }, [])

    // Takes a photo
    const takePicture = async() =>{
        if(!camera) return
        const photo = await camera.takePictureAsync()
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {previewVisible && capturedImage ? (
                <CameraPreview photo={capturedImage} />
            ) : (
            <Camera style={styles.camera} type={type} ref={(r) => {camera = r}} >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.take}>
                    <View style={styles.takePic}>
                        <View style={styles.takePicIn}>
                            <TouchableOpacity
                                onPress={takePicture}
                                style={styles.takePicTouch}/>
                        </View>
                    </View>
                </View>
            </Camera>)}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '50%'
    },
    camera: {
        flex: 1,
        width: '100%'
    },
    buttonContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        width: "100%",
        bottom: 10
    },
    button: {
        
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    take: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    takePic: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    takePicIn:{
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    takePicTouch: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    }
});