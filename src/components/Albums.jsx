import React from 'react';
import { Album } from './Album';
import { useSelector } from 'react-redux';
import './albums.css'

export const Albums = () => {
    const albums = useSelector((store) => store.albums);
    const renderAlbums = () => albums.map((a, i) => <Album key={i} title={a.title} artist={a.artist} tracklist={a.tracklist} image={a.image}/>);

    return (
        <main id="albumGrid">
            <h2>My albums</h2>
            <article>
                {renderAlbums()}
            </article>
        </main>
    )
}