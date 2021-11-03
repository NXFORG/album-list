import React from 'react';
import { Album } from './Album';
import './albums.css'

const albums = [
    { title: 'Unknown Pleasures', artist: 'Joy Division', tracklist: [
        'Disorder',
        'Day of the Lords',
        'Candidate',
        'Insight',
        'New Dawn Fades',
        "She's Lost Control",
        'Shadowplay',
        'Wilderness',
        'Interzone',
        'I Remember Nothing'
    ]
    , image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg' },
    { title: 'The Ooz', artist: 'King Krule', tracklist: [
        'Biscuit Town',
        'The Locomotive',
        'Dum Surfer',
        'Slush Puppy',
        'Bermondsey Bosom (Left)',
        'Logos',
        'Sublunary',
        'Lonely Blue',
        'Cadet Limbo',
        'Emergency Blimp',
        'Czech One',
        'A Slide In (New Drugs)',
        'Vidual',
        'Bermondsey Bosom (Right)',
        'Half Man Half Shark',
        'The Cadet Leaps',
        'The Ooz',
        'Midnight 01 (Deep Sea Diver)',
        'La Lune'
    ], image: 'https://media.pitchfork.com/photos/59d6ab987855fa6c9a16f2f1/1:1/w_600/the%20ooz_king%20krule.jpg' },
    { title: 'Hold your Colour', artist: 'Pendulum', tracklist: [
        'Prelude',
        'Slam',
        'Plasticworld',
        'Fasten Your Seatbelt',
        'Through the Loop',
        'Sounds of Life',
        'Girl in the Fire',
        'Tarantula',
        'Out Here',
        'Hold Your Colour',
        'The Terminal',
        'Streamline',
        'Another Planet',
        'Still Grey',
        'Blood Sugar',
        'Axle Grinder'
    ], image: 'https://img.discogs.com/YL1yLCi0RuIwmqvq9_qCzDGX_eo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-494991-1370354662-8819.jpeg.jpg' },
    { title: 'Goodie Bag', artist: 'Still Woozy', tracklist: [
        'Goodie Bag'
    ], image: 'https://m.media-amazon.com/images/I/81Q9b+cFbvL._SS500_.jpg' }
]

export const Albums = () => {
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