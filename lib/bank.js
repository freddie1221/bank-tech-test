
function Account(transactionType = Transaction){
  this.transactions = []
  this.Transaction = transactionType
}

Account.prototype.addTransaction = function(amount){
  var t = new this.Transaction(amount)
  this.transactions.push(t)
}


Account.prototype.reset = function(){
  this.balance = []
}

module.exports = Account
