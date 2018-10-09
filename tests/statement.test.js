const Statement = require("../lib/statement")

var mockAccount = {}
var statement = new Statement(mockAccount)

test('it can print out a statement', () => {
  expect(statement.print()).notToBeNull
});
