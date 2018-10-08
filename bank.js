
function Account(){
  this.balance = 0
}

Account.prototype.deposit = function(amount){
  this.balance += amount
}

Account.prototype.withdraw = function(amount){
  this.balance -= amount
}

Account.prototype.reset = function(){
  this.balance = 0
}

module.exports = Account
