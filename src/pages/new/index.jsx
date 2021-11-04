import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum } from '../../actions/index';
import './style.css';

export const NewAlbum = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target[0].value;
        let artist = e.target[1].value;
        let tracklist = e.target[2].value;
        let splitTrack = tracklist.split(',');
        let image = e.target[3].value;

        let albumEntry = {title:title, artist:artist, tracklist:splitTrack, image:image };
        dispatch(addAlbum(albumEntry))
    }
    return(
        <>
            <h1 className='newAlbumTitle'>New Album</h1>
            <section className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input name='title' type='text' required/>
                    <label htmlFor='artist'>Artist</label>
                    <input name='artist' type='text' required/>
                    <label htmlFor='tracklist'>Tracklist</label>
                    <textarea name='tracklist' rows='5' placeholder='Please enter each track followed by a comma' required></textarea>
                    <label htmlFor='image'>Album Cover URL (optional)</label>
                    <input name='image' type='text'/>
                    <input type='submit' value='Submit'/>
                </form>
            </section>
        </>
    )
}