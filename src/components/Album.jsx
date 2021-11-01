import React from 'react'

export const Album = ({title, artist}) => {
    return (
        <li>
            <strong>{title}</strong> by <em>{artist}</em>
        </li>
    )
}