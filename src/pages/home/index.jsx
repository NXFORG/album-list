import React, { useState } from 'react';
import { Welcome } from '../../components/Welcome';
import { Albums } from '../../components/Albums'
import './style.css';

export const Home = () => {
    return(
        <>
            <Welcome />
            <Albums />
        </>
    )
}