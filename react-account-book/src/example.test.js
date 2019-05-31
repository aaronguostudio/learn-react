test('test equal', () => {
  expect(2 + 2).toBe(4)
})

test('test not equal', () => {
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(3).toBeGreaterThan(2);
  expect(3).toBeLessThan(4);
})

test('test object', () => {
  expect({ name: 'test' }).toEqual({ name: 'test' });
  expect({ name: 'test', age: 30 }).toEqual({ name: 'test', age: 30 });
})