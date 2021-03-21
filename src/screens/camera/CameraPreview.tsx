import React from 'react'
import { View } from 'native-base'
import { ImageBackground } from 'react-native'

export const CameraPreview = ({ photo }: any) => {
    return (
        <View
            style={{
                backgroundColor: 'transparent',
                flex: 1,
                width: '100%',
                height: '100%'
            }}
        >
            <ImageBackground
                source={{ uri: photo && photo.uri }}
                style={{
                    flex: 1
                }}
            />
        </View>
    )
}