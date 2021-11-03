import React, { useState, useEffect } from 'react'
import { Cover } from '../stories/assets/covers/Covers';
import { Counter } from '../stories/assets/likeCounter/counter';
import { Tracks } from '../stories/assets/tracks/tracks';
import './album.css';

export const Album = ({title, artist, tracklist, image}) => {
    const [tracks , setTracksShow ] = useState(false);

    const handleClick = () => setTracksShow((prevState) => !prevState);

    return (
        <section>
            <figure>
                <Cover image={image} />
                <figcaption><strong>{title}</strong> - <em>{artist}</em></figcaption>
            </figure>
            <Counter />
            <button className="trackButton" onClick={handleClick}>Show Tracks</button>
            { tracks && <Tracks artist={artist} tracklist={tracklist}/> }
        </section>
    )
}