import React, { useState, useEffect } from 'react';
import './lyrics.css';
import axios from 'axios';

export const Lyrics = ({ artist, track }) => {
    const [ lyrics, setLyrics ] = useState([]);

    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                let lyricData = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${track}`);
                setLyrics(lyricData.data.lyrics)
            } catch(err) {
                console.log(err)
            }
        }
        fetchLyrics();
    }, [artist, track])
    return (
        <>
            <article className='backgroundCover'>
                <section className='lyricDisplay'>
                    <p>{lyrics}</p>
                </section>
            </article>
        </>
    );
  };