import React from 'react'
import { View } from 'native-base'
import { StyleSheet, FlatList,ImageSourcePropType } from 'react-native'
import { AlbumLink } from '../molecules/AlbumLink'
import { PhotoWithSelect } from '../molecules/PhotoWithSelect'

interface props {
    item: {
        title: string
        data: ImageSourcePropType[]
    }
} 

export const PhotoAlbum: React.FC<props> = ({item}) => {
    
    return (
        <View style={styles.container}>
            <AlbumLink title={item.title}/>
            <FlatList style={styles.container}
                horizontal
                data={item.data}
                keyExtractor={(item, index) => "PHOTO" + index}
                renderItem={({ item }) => <PhotoWithSelect data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        minHeight: 100,
        paddingHorizontal: '2%',
        marginVertical: '2%',
    },
})