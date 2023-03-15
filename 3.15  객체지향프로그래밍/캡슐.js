class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }

  // getter
  get email() {
    return this._email;
  }

   // setter
  set email(address) {
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const user1 = new User('doordie@took.com', '1992-09-23');
user1.email = 'newDoordie@took.com';
console.log(user1.email);