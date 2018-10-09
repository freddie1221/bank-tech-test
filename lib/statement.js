
function Statement(account) {
  this.account = account;
}

Statement.prototype.print = function() {
  console.table(this.account.transactions);
};

module.exports = Statement;
