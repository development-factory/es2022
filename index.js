// 1. class members

class Person {
  firstName;
  lastName;
  #address;

  constructor(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#address = address;
  }

  static doSomethingStatic() {
    console.log("Some static method executed");
  }

  static #doSomethingPrivateStatic() {
    console.log("Method should not be accesible");
  }
}

const p = new Person("Ion", "Popescu", "Bucuresti");
console.log(`${p.firstName} ${p.lastName}`);

// field not found
//p.#address;

Person.doSomethingStatic();

// should throw error
//Person.doSomethingPrivateStatic();

// 2. arr.at()
const arr = [1, 2, 3, 4, 5, 6, 7];

const newWay = arr.at(-1);
const oldWay = arr[arr.length - 1];

console.log("new way: " + newWay);
console.log("old way: " + oldWay);

// 3. hasOwn
const person = {
  firstName: "Ion",
  lastName: "Popescu",
};

// es2022
const hasOwn = Object.hasOwn(person, "fullName");

// before es2022
const hasOwnProperty = Object.prototype.hasOwnProperty.call(person, "fullName");

console.log(`hasOwn: ${hasOwn}, hasOwnProperty: ${hasOwnProperty}`);

// 4. error.cause

const callApi = () => {
  throw new Error("Not found");
};

const doSomething = () => {
  try {
    callApi();
  } catch (e) {
    throw new Error("Api call failed", { cause: e });
  }
};

try {
  doSomething();
} catch (e) {
  console.log(e.cause);
}

// 5. top level awaits
const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await todos.json();

console.log(json);

// 5. Regex match indices

const regex = /test/dg;
const text = "this is a test for testing new regex feature";

const result = [...text.matchAll(regex)];

console.log(result);
