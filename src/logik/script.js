function getData(ev) {
	ev.preventDefault();
	console.log('EV', ev);
}

function goAheadLessons() {
	return (window.location.href = './src/logik/autorized/formreg.html');
}

// function validateHello(greetings) {
//   let res = "";
//   const language = {
//     hello: "english",
//     ciao: "italian",
//     salut: "frenc",
//     hallo: "german",
//     hola: "spanish",
//     ahoj: "czech republic",
//     czesc: "polish",
//   };

//   const reskey = {
//     language: "",
//   };

//   if (language.hasOwnProperty(greetings.toLowerCase())) {
//     reskey.language = language[greetings];
//   }

//   return reskey.language;
// }

// validateHello("hallo");

// // Task 8

// const fruits = ["apple", "banana", "apple", "orange", "apples"];

// const sumOfApple = fruits.reduce((acc, curr) => {
//   return curr === "apple" ? acc + 1 : acc;
// }, 0);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 20 },
// ];

// const groupedByAge = users.reduce((acc, curr) => {
//   const age = curr.age;
//   if (!acc[age]) acc[age] = [];

//   acc[age].push(curr);

//   return acc;
// }, {});

// const entries = [
//   ["name", "Alice"],
//   ["age", "25"],
//   ["city", "Moscow"],
// ];

// const madeObject = entries.reduce((acc, curr) => {
//   const [key, value] = curr;
//   acc[key] = value;
//   return acc;
// }, {});

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Меня зовут ${this.name} и мне ${this.age} лет`);
//   }
// }

// const andrii = new Person("Andrii", 27);
// andrii.introduce();

// class Animal {
//   constructor(text) {
//     this.text = text;
//   }

//   speak() {
//     console.log(`Животное издает звук`);
//   }
// }

// class Dog extends Animal {
//   constructor(text) {
//     super(text);
//   }

//   anotherSpeak(text) {
//     this.text = text;
//     this.text = "Собака лает";
//     console.log(this.text);
//   }
// }

// // const animal = new Animal()
// // animal.speak()
// const dog = new Dog();
// dog.speak();
// dog.anotherSpeak();

// const str = "this is java script";

// let splited = str.split(" ");

// let mapped = splited
//   .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//   .join(" ");

// console.log(mapped);

// class BankAccount {
//   #balance;
//   constructor(amount) {
//     this.#balance = amount;
//   }

//   deposit() {
//     console.log(this.#balance);
//   }

//   getBalance() {
//     console.log(this.#balance);
//   }
// }

// const account = new BankAccount(100);
// account.deposit();
// account.#balance;

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}
