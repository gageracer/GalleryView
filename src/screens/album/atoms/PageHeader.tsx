import React from 'react'
import { Header, View, Button, Icon } from 'native-base'
import { StyleSheet } from 'react-native'

export const PageHeader: React.FC = () => { 
    return(
        <View>
            <Header androidStatusBarColor={"#303055"} style={styles.header}/>
            <View style={styles.right}>
                <Button transparent>
                    <Icon style={styles.icon} name='menu' />
                </Button>
            </View>
        </View>
        )
}


const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#303055'
    },
    right: {
        flexDirection: 'row-reverse',
    },
    icon: {
        color: 'black'
    }
})