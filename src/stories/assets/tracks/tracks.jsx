import React, { useState, useEffect } from 'react';
import './tracks.css';
import { Button } from '../button/button';

export const Tracks = ({ artist, tracklist }) => {

    const displayTracks = () => {
        return (
            tracklist.map((track, i) => (
                <li key={i}>
                    {track}
                    <Button artist={artist} track={track} />
                </li>
            ))
        )
    }
    
    return (
        <>
            <ol>
                { displayTracks() }
            </ol>
        </>
    );
  };