import React from "react"
import { Text, View, Image, Linking } from "react-native"
import Card from "./Card"
import CardItem from "./CardItem"
import Button from "./Button"

const AlbumDetail = (props) => {

    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = props.album;

    const {
        headerContainerStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerContentStyle,
        coverImageStyle
    } = styles;
    
    return (
        <Card>

            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContainerStyle}>
                    <Text style={headerContentStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image
                    source={{ uri: image }}
                    style={coverImageStyle}
                />
            </CardItem>

            <CardItem>
                <Button handlePress={() => Linking.openURL(url)}>
                    Buy this album on Amazon.com
                </Button>
            </CardItem>
        </Card>
    )

}

const styles = {
    headerContainerStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerContentStyle: {
        fontSize: 18,
        fontWeight:"bold"

    },
    thumbnailStyle: {
        width: 64,
        height: 64,
        borderRadius: 64,
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    coverImageStyle: {
        height: 300,
        flex: 1,
        width: null,
        borderRadius:15
    }
}


export default AlbumDetail;