import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Cover } from '../stories/assets/covers/Covers';
import { Counter } from '../stories/assets/likeCounter/counter';
import { Tracks } from '../stories/assets/tracks/tracks';
import { deleteAlbum } from '../actions/index';
import './album.css';

export const Album = ({title, artist, tracklist, image}) => {
    const [tracks , setTracksShow ] = useState(false);
    const dispatch = useDispatch();

    const removeAlbum = () => {
        //let album = {title:title, artist:artist, tracklist:tracklist, image:image}
        let album = title;
        dispatch(deleteAlbum(album));
    }

    const handleClick = () => setTracksShow((prevState) => !prevState);

    return (
        <section>
            <figure>
                <Cover image={image} />
                <figcaption><strong>{title}</strong> - <em>{artist}</em></figcaption>
            </figure>
            <button className='deleteButton' onClick={removeAlbum}>X</button>
            <button className="trackButton" onClick={handleClick}>Show Tracks</button>
            <br></br>
            <Counter />
            { tracks && <Tracks artist={artist} tracklist={tracklist}/> }
        </section>
    )
}