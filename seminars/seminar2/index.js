class Account {
  #balance = 0;
  get balance() {
    return this.#balance;
  }

  constructor(balance) {
    if (typeof balance !== "number" || balance < 0) {
      throw new Error("Балланс не может быть отрицательной");
    }
    this.#balance = balance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Сумма не может быть отрицательной");
    }
    return (this.#balance = this.balance + amount);
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount < 0) {
      throw new Error("Сумма не может быть отрицательной");
    }
    if (amount > this.#balance) {
      throw new Error("Сумма не может быть больше баланса");
    }
    return (this.#balance = this.balance - amount);
  }
}

const artAcc = new Account(3000);
console.log(artAcc);
console.log(artAcc.balance);
console.log(artAcc.deposit(1000));
console.log(artAcc.withdraw(1000000));
