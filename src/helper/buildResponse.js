function buildResponse(res, status, message) {
  res.status(status).send(message);
}

module.exports = { buildResponse };

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
