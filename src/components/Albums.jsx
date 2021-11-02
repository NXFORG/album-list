import React from 'react';
import { Album } from './Album';
import './albums.css'

const albums = [
    { title: 'Unknown Pleasures', artist: 'Joy Division', image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg' },
    { title: 'The Ooz', artist: 'King Krule', image: 'https://media.pitchfork.com/photos/59d6ab987855fa6c9a16f2f1/1:1/w_600/the%20ooz_king%20krule.jpg' },
    { title: 'Hold your Colour', artist: 'Pendulum', image: 'https://img.discogs.com/YL1yLCi0RuIwmqvq9_qCzDGX_eo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-494991-1370354662-8819.jpeg.jpg' },
    { title: 'Goodie Bag', artist: 'Still Woozy', image: 'https://m.media-amazon.com/images/I/81Q9b+cFbvL._SS500_.jpg' }
]

export const Albums = () => {
    const renderAlbums = () => albums.map((a, i) => <Album key={i} title={a.title} artist={a.artist} image={a.image}/>);

    return (
        <main id="albumGrid">
            <h2>My albums</h2>
            <article>
                {renderAlbums()}
            </article>
        </main>
    )
}