/* import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Album } from './Album';

describe('FaveButton ', () => {
    beforeEach(() => {
        render(<Album />)
    });

    test('renders span with * in', () => {
        let star = screen.queryByRole('switch');
        expect(star.textContent).toContain('★');
    });

    test('changes colour of star when clicked', () => {
        let star = screen.queryByRole('switch');
        let starColour = star.style.color;
        userEvent.click(star);
        let newStarColour = star.style.color;
        expect(newStarColour).not.toBe(starColour);
        userEvent.click(star);
        let nextStarColour = star.style.color;
        expect(nextStarColour).toBe(starColour);
    })
}); */