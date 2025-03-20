/*
You are building a banking system where multiple bank accounts can exist. Each account has an
accountNumber, holderName, and balance. Implement the following methods:

• deposit(amount): Adds money to the balance.
• withdraw(amount): Deducts money but prevents overdraft.
• transfer(amount, targetAccount): Transfers money from one account to another if the balance
allows it.
• Implement BankAccount constructor with accountNumber, holderName, and balance.
• Attach deposit(amount), withdraw(amount), and transfer(amount, targetAccount) methods
to the prototype.
*/

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  return (this.balance += amount);
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (this.balance >= amount) {
    return (this.balance -= amount);
  }
  return this.balance;
};

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, targetAccount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    targetAccount.balance += amount;
  }
  return;
};
