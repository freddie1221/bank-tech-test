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

  xtest('it can return its balance',() => {
    expect(account.transactions[0].credit).toHaveBeenCalled()
  });
});

// I can't yet work out how to mock the transaction

// The thing that confuses me about update balance is, I would normally expect this to
// be a private method

