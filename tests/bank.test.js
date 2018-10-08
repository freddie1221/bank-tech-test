const Account = require("../lib/bank")


function MockTransactionType(){}
var account = new Account(MockTransactionType)


describe('first tests', function(){
  
  afterAll(() => {
    account.reset()
  });

  test('can add a transaction',() => {
    account.addTransaction(10)
    expect(account.transactions.length).toBe(1)
  });



});


