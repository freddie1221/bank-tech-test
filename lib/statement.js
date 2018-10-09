
function Statement(account){
  this.account = account
  this.array = []
}

Statement.prototype.print = function(){
  console.table(this.account.transactions)
}



module.exports = Statement


// for each object in the array
// make it an array like [date, amount, running total] 

// with process here, I want to make some private functions
// so having a test which looks for the printed outcome seems a long way offs