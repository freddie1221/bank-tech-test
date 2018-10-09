
function Account(transactionType = Transaction){
  this.transactions = []
  this.Transaction = transactionType
}

Account.prototype.addCredit = function(amount){
  var t = new this.Transaction(amount,0)
  this.transactions.push(t)
}

Account.prototype.addDebit = function(amount){
  var t = new this.Transaction(0,amount)
  this.transactions.push(t)
}

Account.prototype.balance = function(){
  
  var balance = 0
  for(x = 0; x < this.transactions.length; x++) {
    balance += this.transactions[x].credit
    balance -= this.transactions[x].debit
  }
  return balance
}
  

module.exports = Account
