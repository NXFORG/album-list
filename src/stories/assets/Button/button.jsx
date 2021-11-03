import React, { useState } from 'react';
import './button.css';
import { Lyrics } from '../lyrics/lyrics';

export const Button = ({ artist, track }) => {
    const [ albumTracks, setTracks ] = useState(false);

    const buttonClick = () => {
        setTracks((prevState) => !prevState);
    }

    return (
        <>
            <button className="trackButton" onClick={buttonClick}>Show Lyrics</button>
            { albumTracks && <Lyrics artist={artist} track={track}/> }
        </>
    );
  };