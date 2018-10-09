
function Account(transactionType = Transaction) {
  this.transactions = [];
  this.Transaction = transactionType;
}

Account.prototype.addCredit = function(amount) {
  const t = new this.Transaction(amount, 0);
  this.transactions.push(t);
  t.balance = this.balance();
};

Account.prototype.addDebit = function(amount) {
  const t = new this.Transaction(0, amount);
  this.transactions.push(t);
  t.balance = this.balance();
};

Account.prototype.balance = function() {
  let balance = 0;
  for (let x = 0; x < this.transactions.length; x++) {
    balance += this.transactions[x].credit;
    balance -= this.transactions[x].debit;
  }
  return balance;
};

module.exports = Account;
