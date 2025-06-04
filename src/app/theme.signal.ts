import { signal } from '@angular/core';

export const theme = signal<'light' | 'dark'>('light');

export function toggleTheme() {
  theme.update((t) => (t === 'light' ? 'dark' : 'light'));
}
