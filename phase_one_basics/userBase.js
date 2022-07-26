class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  
  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users){
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroductions() {
    return this.users.map((user) => user.getIntroduction());
  }
}

// module.exports = UserBase;

const userbase = new UserBase(users);

console.log(userbase.count());
console.log(userbase.getNames());
console.log(userbase.getIntroductions());