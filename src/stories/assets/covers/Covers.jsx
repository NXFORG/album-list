import React, { useState } from 'react';
import './covers.css';
//import PropTypes from 'prop-types';

export const Cover = (cover) => {
    const [ coverPicture, setCoverPicture ] = useState(false);

    const changeCoverPicture = () => setCoverPicture((prevPicture) => !prevPicture);

    return (
        <img
            src={ cover.image }
            onClick={changeCoverPicture}
            className={coverPicture ? 'large' : 'small'}
        />
    );
  };
