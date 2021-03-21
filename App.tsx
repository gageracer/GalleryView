import React,{ useState, useEffect } from 'react';
import { Router } from './src/routers/Router'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'native-base';

const App = () =>{
  const [isReady, setIsReady] = useState(false)
  useEffect( () => {
      (async () => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
      setIsReady(true)
      })() 
  },[])

  if(!isReady){
    return (<View></View>)
  }

  return (
    <Router />
  )
}

export default App