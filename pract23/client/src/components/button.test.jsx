import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './button';

describe('Button Component', () => {
  it('renders with correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText(/Click Me/i)).toBeDefined();
  });

  it('handles click event', () => {
    const handleClick = vi.fn(); // Vitest mock function
    render(<Button label="Click Me" onClick={handleClick} />);

    const button = screen.getByText(/Click Me/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
