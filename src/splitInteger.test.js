'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(9, 3);

  expect(result).toEqual([3, 3, 3]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  const result = splitInteger(8, 1);

  expect(result).toHaveLength(1);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(17, 4);
  const expectFirst = [4, 4, 4, 5];

  expect(result).toEqual(expectFirst);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(6, 10);
  const expectSecond = [ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ];

  expect(result).toEqual(expectSecond);
});
