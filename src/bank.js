
class BankAccount {
  // private balance
  #balance = 0;

  // static private counter for total accounts
  static #totalNumberOfAccounts = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;

    // count new account
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    // fix: must update private #balance, not this.balance
    this.#balance += amount;
    console.log(`Deposited $${amount}. New Balance: ${this.#balance}`);
    return this.#balance;
  }

  withdraw(amount) {
    // fix: must compare against #balance
    if (amount > this.#balance) {
      console.log("Withdrawal failed. Insufficient funds.");
      return this.#balance;
    }

    // fix: must subtract from #balance
    this.#balance -= amount;
    console.log(`Withdrew $${amount}. New Balance: ${this.#balance}`);
    return this.#balance;
  }

  getBalance() {
    // fix: must return private #balance
    return this.#balance;
  }

  // fix: method name must match instructions
  static getTotalAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

// Bank class
class Bank {
  // public instance property
  accounts = [];

  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    // fix: must use this.accounts
    this.accounts.push(account);
  }

  getTotalBalance() {
    // fix: cannot access private property balance directly
    let total = 0;
    for (const account of this.accounts) {
      total += account.getBalance();
    }
    return total;
  }

  findAccount(accountNumber) {
    // fix: must use === instead of =
    // fix: must search inside this.accounts
    return this.accounts.find(acc) => acc.accountNumber === accountNumber);
  }
}
// DO NOT REMOVE
module.exports = { BankAccount, Bank };
