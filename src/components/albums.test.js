import { render, screen } from '@testing-library/react';
import { Album } from './Album';

describe('Display Album', () => {
    let album;

    beforeEach(() => {
        album = { title: 'Unknown Pleasures', artist: 'Joy Division', image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg' };
        render(<Album key="1" title={album.title} artist={album.artist} image={album.image}/>)
    });
    test('render album', () => {
        let newAlbum = screen.getByText('Joy Division');
        expect(newAlbum.textContent).toBe(album.artist);
    });
});