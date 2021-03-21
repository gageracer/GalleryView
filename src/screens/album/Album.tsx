import React from 'react'
import { Container } from 'native-base'
import { StyleSheet, ViewStyle, FlatList } from 'react-native'
import { CameraButton } from './atoms/CameraButton'
import { PageHeader } from './atoms/PageHeader'
import { PhotoAlbum } from './organisms/PhotoAlbum'
import { data } from '../../lib/albumData'

export const Album = () => {
    return (
        <Container style={styles.container}>
            <PageHeader/>
            <CameraButton/>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.title + index}
                renderItem={({ item }) => <PhotoAlbum item={item} />}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#f2f2f7',
    } as ViewStyle,
})