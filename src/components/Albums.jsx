import React from 'react';
import { Album } from './Album';

const albums = [
    { title: 'Unknown Pleasures', artist: 'Joy Division' },
    { title: 'The Ooz', artist: 'King Krule' },
    { title: 'Hold your Colour', artist: 'Pendulum' },
    { title: 'Goodie Bag', artist: 'Still Woozy' }
]

export const Albums = () => {
    const renderAlbums = () => albums.map((a, i) => <Album key={i} title={a.title} artist={a.artist}/>);

    return (
        <section id="albumList">
            <h2>My albums</h2>
            <ol>
                { renderAlbums() }
            </ol>
        </section>
    )
}