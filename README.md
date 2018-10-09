# Banking tech test

- I have written this in vanilla Javascript

## Testing
- This uses the Jest fraemwork for unit tests


## How to run the code
- in the console, go to the directory
- install the dependencies - `npm install`
- `node` to initiate the node REPL
- `.load` lib/bank.js, lib/statement.js, lib/transaction.js

## How to interact with the program
```
// instantiate the account and statement
account = new Account()
statement = new Statement(account)

// add credits / debits to the account
account.addCredit(40)
account.addDebit(30)

// print out the statement
statement.print()

```


## Requirements
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

> The output of balance printing should look like this

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
