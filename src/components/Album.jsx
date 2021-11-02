import React from 'react'
import { Cover } from '../stories/assets/covers/Covers';
import { Counter } from '../stories/assets/likeCounter/counter';
import './album.css';

export const Album = ({title, artist, image}) => {
    return (
        <section>
            <figure>
                <Cover image={image} />
                <figcaption><strong>{title}</strong> - <em>{artist}</em></figcaption>
            </figure>
            <Counter />
        </section>
    )
}