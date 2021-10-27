import { render, screen } from '@testing-library/react';
import HomePage from '.';

test('renders learn react link', () => {
    render(<HomePage />);
    const paragraph = screen.getByText("The file /assets/config.json was fetch and its settings loaded, before running the app.");
    expect(paragraph).toBeInTheDocument();
});
