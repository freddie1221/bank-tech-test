const Account = require("./bank")
var account = new Account


describe('first tests', function(){
  
  beforeEach(() => {
    account.reset()
  })

  test('returns a balance', function(){
    expect(account.balance).toBe(0)
  });

  test('can make a deposit',() => {
    account.deposit(10)
    expect(account.balance).toBe(10)
  });

  test('can make a withdrawal',() => {
    account.withdraw(10)
    expect(account.balance).toBe(-10)
  });

  test('can wipe an account',() => {
    account.reset()
    expect(account.balance).toBe(0)
  });
});


