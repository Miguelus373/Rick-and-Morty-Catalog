import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../Filter';

let eventCount = 0;
const mockEventHandler = () => { eventCount += 1; };

beforeEach(() => {
  eventCount = 0;
  render(<Filter name="" handleChange={mockEventHandler} />);
});

describe('Filter Component', () => {
  it('Renders Correctly', () => {
    expect(screen.getByText(/Add Filters:/)).toBeInTheDocument();
  });

  it('Handles filter change for the input', () => {
    fireEvent.change(screen.getByPlaceholderText(/Character Name/i), {
      target: { value: 'rick' },
    });

    expect(eventCount).toBe(1);
  });

  it('Hanldes filter change for the select', () => {
    fireEvent.change(screen.getByDisplayValue('Status'), {
      target: { value: 'All' },
    });

    expect(eventCount).toBe(1);
  });

  it('Hanldes both filter changes', () => {
    fireEvent.change(screen.getByDisplayValue('Status'), {
      target: { value: 'Alive' },
    });

    fireEvent.change(screen.getByPlaceholderText(/Character Name/i), {
      target: { value: 'morty' },
    });

    expect(eventCount).toBe(2);
  });
});
