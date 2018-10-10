const Account = require("./lib/account")
const Statement = require("./lib/statement")
const Transaction = require("./lib/transaction")

account = new Account()
statement = new Statement(account)