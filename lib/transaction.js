
function Transaction(credit, debit) {
  this.date = new Date();
  this.credit = credit;
  this.debit = debit;
  this.balance = 0;
}

module.exports = Transaction;
