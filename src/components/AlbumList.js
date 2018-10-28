import React, { Component } from "react"
import { ScrollView } from "react-native"
import axios from "axios";
import AlbumDetail from "./AlbumDetail"

class AlbumList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        }

    }

    componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then((res) => this.setState({ albums: res.data }))
            .catch((err) => next(err.message))
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail album={album} key={album.title}/>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )

    }
}

export default AlbumList;