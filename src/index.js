import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import App from './App';

let seedState = {
    albums: [{ title: 'Unknown Pleasures', artist: 'Joy Division', tracklist: [
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
}

function albumReducer(state=seedState, action){
    switch(action.type){
        case 'ADD_ALBUM':
            return{ ...state, albums: [...state.albums, action.payload] }
        case 'DELETE_ALBUM':
            const updateAlbums = state.albums.filter(a => a.title !== action.payload)
            console.log(updateAlbums)
            return {...state, albums:updateAlbums}
        default:
            return state;
    }
}

let albumStore = createStore(albumReducer, devToolsEnhancer());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={albumStore}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
