import { greet } from '../src/index';

describe('greet', () => {
  it('greets properly', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
