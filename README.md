# Banking tech test

- I have written this in vanilla Javascript

## Testing
- This uses the Jest fraemwork for unit tests
- To run the unit tests:
  - `npm install` (install Jest)
  - `npm test` (run unit tests)
- To run the feature tests
  - `node` to initiate the node REPL
  -  `.load tests/featureTests.js`

## To run the code
- install the dependencies - `npm install`
- `.load` lib/app.js

## How to interact with the program
```
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
