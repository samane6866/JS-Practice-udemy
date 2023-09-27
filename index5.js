// uderestanding spread and rest oprator
const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi Iam" + this.name);
  },
};

copiedPerson = { ...person };
console.log(copiedPerson);

// spread oprator can works for both, array and object.


//  With Rest oprator we can return as much as arguments we want.
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3))