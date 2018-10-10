const Account = require("../lib/account")
const Statement = require("../lib/statement")
const Transaction = require("../lib/transaction")

account = new Account()
statement = new Statement(account)

account.addCredit(10)
account.addCredit(50)
account.addDebit(15)
statement.print()