import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import CharacterCard from '../CharacterCard';

describe('CharacterCard Component', () => {
  it('Renders correctly', () => {
    render(<CharacterCard name="Jerry" status="Alive" image="img.com" />);

    expect(screen.getByText(/Jerry/i)).toBeInTheDocument();
  });

  it('Uses name prop as text for the h4', () => {
    render(<CharacterCard name="Beth" status="Alive" image="img.com" />);

    expect(screen.getByRole('heading').textContent).toBe('Beth');
  });

  it('Uses status prop as a class for the container', () => {
    render(<CharacterCard name="Summer" status="Alive" image="img.com" />);

    expect(screen.getByRole('heading').parentElement).toHaveClass('Alive');
  });

  it('Uses image prop as src for the img', () => {
    render(<CharacterCard name="Beth" status="Alive" image="img.com" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'img.com');
  });
});
