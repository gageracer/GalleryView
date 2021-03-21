import React from 'react'
import { NativeRouter, Route, BackButton  } from 'react-router-native'
import { Album } from '../screens/album/Album'
import { Demo } from '../screens/demo/Demo'
import { OpenCamera } from '../screens/camera/Camera'


export const Router = () => {

    return (
        <NativeRouter>
            <BackButton>
                <Route exact path="/" component={Demo}/>
                <Route exact path="/album" component={Album}/>
                <Route exact path="/camera" component={OpenCamera} />
            </BackButton>
        </NativeRouter>
        )
}
