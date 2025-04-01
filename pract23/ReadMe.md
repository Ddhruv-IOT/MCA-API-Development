# Unit Test: Testing React Components using Vitest

- For unit testing in a React app using Vite, you typically use Vitest, which is a fast and efficient testing framework built specifically for Vite. Here's how to set up and write unit tests for your Vite-based React app.


###  Frontend (Vite + React) Setup
``` sh
npm create vite@latest client -- --template react
cd client
npm install
npm run dev
```

### Install Vitest and React Testing Library
```sh
npm install --save-dev vitest @testing-library/react
```

### Configure Vitest in Vite
- Modify ```vite.config.js``` to add the test property.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Required for React component testing
  },
});
```

### Create a Sample Component
- Make a file button.jsx in folder componenets under src: ```src/components/button.jsx```
```js
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

### Write a Unit Test
- Create a test file for the button component in folder componenets under src: ```src/components/button.test.jsx```
```js
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

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

export default Button;
```

### Run the Tests
- Use the command as ```npx vitest```

## Refrence
[VITest Guide](https://vitest.dev/guide/)