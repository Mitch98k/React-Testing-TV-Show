import React from 'react';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

test('App renders', () => {
    render(<App />);
});

// test('selecting season gets and renders season data', async () => {
//     render(<App />);
//     mockFetchShow.mockResolvedValueOnce({
//         data: [
//             { episode_id: 'episode 1', episode_name: 'episode one'},
//             { episode_id: 'episode 2', episode_name: 'episode two'}
//         ]
//     })
//     userEvent.click(screen.getByRole('dropdown'));
//     const episodes = await waitFor(() => screen.getAllBy)
// })

