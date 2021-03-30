import { StripAllBom } from '../index';

test('Strip all BOM from string', () => {
  expect(StripAllBom('\uFEFF🙈\uFEFF🙉\uFEFF🙊')).toBe('🙈🙉🙊');
});

test('Throw error on faulty input', () => {
  try {
    StripAllBom(true as any);
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe('Expected a string');
  }
});
