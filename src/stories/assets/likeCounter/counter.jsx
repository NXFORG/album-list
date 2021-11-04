import React, { useState } from 'react';
import './counter.css';
//import PropTypes from 'prop-types';

export const Counter = () => {
    const [ liked, setLiked ] = useState(true);
    const [ disliked, setDisliked ] = useState(true);

    const [ likeValue, setLikeValue ] = useState(0);
    const [ dislikeValue, setDislikeValue ] = useState(0);

    const updateLikes = () => {
        setLiked((prevState) => !prevState);
        liked ? setLikeValue((prevLikes) => prevLikes + 1) : setLikeValue((prevLikes) => prevLikes - 1); 
    }

    const updateDislikes = () => {
        setDisliked((prevState) => !prevState);
        disliked ? setDislikeValue((prevDislikes) => prevDislikes + 1) : setDislikeValue((prevDislikes) => prevDislikes - 1); 
    }


    return (
        <>
            <button value="👍" onClick={updateLikes} disabled={!disliked}>👍</button>
            <span>{ likeValue }</span>
            <button value="👎" onClick={updateDislikes} disabled={!liked}>👎</button>
            <span>{ dislikeValue }</span>
        </>
    );
  };