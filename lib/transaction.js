
function Transaction(credit, debit){
  this.credit = credit
  this.debit = debit
  this.balance = 0
  this.date = new Date()
}

module.exports = Transaction