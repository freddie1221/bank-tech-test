const Transaction = require("../lib/transaction")

var creditTransaction = new Transaction(10, 0)
var debitTransaction = new Transaction(0, -20)
var dateToday = new Date().getDate()

describe('credit',() => {
  test('it has a credit',() => {
    expect(creditTransaction.credit).toBe(10)
  });
  test('it has no debit',() => {
    expect(creditTransaction.debit).toBe(0)
  });
  test('it has a date',() => {
    expect(creditTransaction.date.getDate()).toBe(dateToday)
  });
});

describe('debit',() => {
  test('it has a debit',() => {
    expect(debitTransaction.debit).toBe(-20)
  });
  test('it has no credit',() => {
    expect(debitTransaction.credit).toBe(0)
  });
  test('it has a date',() => {
    expect(debitTransaction.date.getDate()).toBe(dateToday)
  });
});



