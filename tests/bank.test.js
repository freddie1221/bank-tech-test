const Account = require("../lib/bank")


const MockTransactionType = jest.fn()
var account = new Account(MockTransactionType)


describe('first tests', function(){
  
  test('can add a credit',() => {
    account.addCredit(30)
    expect(account.transactions.length).toBe(1)
  });

  test('it can add a debit',() => {
    account.addDebit(10)
    expect(account.transactions.length).toBe(2)
  });

});
