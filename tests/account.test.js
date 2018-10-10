const Account = require("../lib/account")
const Transaction = require("../lib/transaction")
jest.mock("../lib/transaction.js");

var account = new Account(Transaction)

describe('first tests', function(){
  
  test('can add a credit',() => {
    account.addCredit(30)
    expect(account.transactions.length).toBe(1)
  });

  test('it can add a debit',() => {
    account.addDebit(10)
    expect(account.transactions.length).toBe(2)
  });

  xtest('it can check the balance', () => {
    account.balance()
    expect()
  });

});
// unit test for check balance
// How should I approach this?
// the balance method uses properties of the transaction class
// so I want to say "transaction object should receive this message"
// The problem is, the transaction object is instantiated by the Account method. So how can I
// get the class to instantiate a mock object
