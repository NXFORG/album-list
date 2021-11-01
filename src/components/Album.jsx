import React from 'react'
import { Cover } from '../stories/Covers';

export const Album = ({title, artist, image}) => {
    return (
        <li>
            <figure>
                <Cover image={image}/>
                <figcaption><strong>{title}</strong> - <em>{artist}</em></figcaption>
            </figure>
        </li>
    )
}