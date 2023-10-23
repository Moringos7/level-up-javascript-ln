class User{
  #userName
  #password
  constructor(userName,password,age){
    this.#userName = userName
    this.#password = password
    this.age = age
  }
}
const user = new User("moringos","12342",24)

console.log(user.username);
console.log(user.password);
console.log(user.age)

//
const username = Symbol("username");
const password = Symbol("password");

const user2 = {
  [username]: "moringos9",
  [password]: "PatoPlano",
  age: 24
};

console.log(user2.username);
console.log(user2.password);
console.log(user2.age);