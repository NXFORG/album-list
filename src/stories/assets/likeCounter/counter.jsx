import React, { useState } from 'react';
import './counter.css';
//import PropTypes from 'prop-types';

export const Counter = () => {
    const [ likeValue, setLikeValue ] = useState(0);
    const [ dislikeValue, setDislikeValue ] = useState(0);

    const incrementLikeValue = () => setLikeValue((prevLikes) => prevLikes + 1);
    const incrementDislikeValue = () => setDislikeValue((prevDislikes) => prevDislikes + 1);

    return (
        <form>
            {/* <label htmlFor="like">👍</label> */}
            <button value="👍" onClick={incrementLikeValue} disabled={dislikeValue || likeValue > 0 ? true : false }>👍</button>
            <span>{ likeValue }</span>
            {/* <label htmlFor="dislike">👎</label> */}
            <button value="👎" onClick={incrementDislikeValue} disabled={likeValue || dislikeValue > 0 ? true : false }>👎</button>
            <span>{ dislikeValue }</span>
        </form>
    );
  };