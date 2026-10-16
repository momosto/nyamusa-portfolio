import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from './App.jsx';
import { projects, menu } from './data.js';

beforeEach(() => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: true });
  Element.prototype.scrollIntoView = vi.fn();
});

describe('portfolio', () => {
  it('renders a card linking to each project repo', () => {
    render(<App />);
    for (const p of projects) {
      expect(screen.getByRole('link', { name: p.name })).toHaveAttribute('href', p.repo);
    }
  });

  it('every menu entry points at a section that exists', () => {
    const { container } = render(<App />);
    for (const m of menu) {
      expect(container.querySelector(`#${m.target}`)).not.toBeNull();
    }
  });

  it('shows the pressed key in the USSD reply line', () => {
    render(<App />);
    fireEvent.keyDown(window, { key: '3' });
    expect(document.querySelector('.lcd-input').textContent).toBe('3');
  });
});

describe('live sites', () => {
  it('links each live site', async () => {
    const { sites } = await import('./data.js');
    render(<App />);
    for (const s of sites) {
      expect(screen.getByRole('link', { name: s.name })).toHaveAttribute('href', s.url);
    }
  });
});
