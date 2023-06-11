import { cls } from './classNames';

describe('classNames', () => {
  test('with only first params', () => {
    expect(cls('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass test1 test2';
    expect(cls('someClass', {}, ['test1', 'test2'])).toBe(expected);
  });

  test('with mods true', () => {
    const expected = 'someClass test1 test2 hovered scroll';
    expect(cls('someClass', { hovered: true, scroll: true }, ['test1', 'test2'])).toBe(expected);
  });

  test('with mods true', () => {
    const expected = 'someClass test1 test2 hovered';
    expect(cls('someClass', { hovered: true, scroll: false }, ['test1', 'test2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass test1 test2 hovered';
    expect(cls(
      'someClass',
      { hovered: true, scroll: undefined },
      ['test1', 'test2'],
    )).toBe(expected);
  });
});
