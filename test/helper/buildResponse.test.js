const { buildResponse } = require("../../src/helper/buildResponse")

test(' ', () => {
    expect(buildResponse (res, status, message)).toBe(res, 200, message);
  })

// const sum = require("../../src/helper/buildResponse");

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });