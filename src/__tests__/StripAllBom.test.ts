import stripAllBom from '../index';

test('Strip all BOM from string', () => {
  expect(stripAllBom('\uFEFF🙈\uFEFF🙉\uFEFF🙊')).toBe('🙈🙉🙊');
});

test('Throw error on faulty input', () => {
  try {
    stripAllBom(true as any);
    expect(true).toBe(false);
  } catch (e) {
    expect(e.message).toBe('Expected a string');
  }
});
