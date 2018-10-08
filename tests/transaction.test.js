const Transaction = require("../lib/transaction")

var transaction = new Transaction(10)

test('it has an amount',() => {
  expect(transaction.value).toBe(10)
});

test('it has a date',() => {
  var dateToday = new Date().getDate()
  expect(transaction.date.getDate()).toBe(dateToday)
});
